import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { dump } from "js-yaml";
import { generateSelectQuery, convertToOpenAPI, cleanOpenAPISpec } from './lib/utils.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function findFiles(startPath, filter) {
  let results = [];
  if (!fs.existsSync(startPath)) {
    console.log("No directory found:", startPath);
    return;
  }

  const files = fs.readdirSync(startPath);
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      results = results.concat(findFiles(filename, filter));
    } else if (filename.indexOf(filter) >= 0) {
      results.push(filename);
    }
  }
  return results;
}

function writeObjectToYamlFile(fileContent, filename) {
  try {
    const yaml = dump(fileContent);
    fs.writeFileSync(filename, yaml, "utf8");
    console.log(`File ${filename} written successfully.`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

function generateStackqlViews(openApiSpec) {
  const region = 'ap-southeast-1';
  const componentName = openApiSpec.info.title;

  const topLevelSchemas = Object.entries(openApiSpec.components.schemas)
    .filter(([_, value]) => value['x-stackql-resource-name']);
  const views = topLevelSchemas.map(([schemaName, schema]) => {
    const resource = schema['x-stackql-resource-name'] || schemaName;
    const selectQuery = generateSelectQuery({schemaName, schema, region, componentName, openApiSpec});

    return {
      [resource]: {
        name: resource,
        id: `aws.${componentName.toLowerCase()}.${resource}`,
        config: {
          views: {
            select: {
              predicate: 'sqlDialect == "sqlite3"',
              ddl: selectQuery,
            },
          },
        },
      },
    };
  });

  return views;
}

async function processDoc(fileFilter, outputFilename, serviceTitle) {
  const openAPI = {
    openapi: "3.0.0",
    info: {
      title: serviceTitle,
      version: "1.0.0",
    },
    paths: {},
    components: {
      schemas: {},
    },
  };

  const files = findFiles(__dirname, fileFilter);

  for (const file of files) {
    const content = await fs.promises.readFile(file);
    const jsonContent = JSON.parse(content);
    const componentName = jsonContent.typeName.split("::").pop();
    const openAPIComponent = convertToOpenAPI(
      jsonContent,
      componentName,
      openAPI.components.schemas
    );
    Object.assign(openAPI.components.schemas, openAPIComponent);
  }
  const stackqlViews = generateStackqlViews(openAPI);
  Object.assign(openAPI, {'x-stackql-views': stackqlViews});

  const cleanedOpenAPI = cleanOpenAPISpec(openAPI);

  writeObjectToYamlFile(cleanedOpenAPI, outputFilename);
}

processDoc("aws-lambda", "openapi-lambda.yaml", "Lambda");