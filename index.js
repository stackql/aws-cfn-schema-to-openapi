import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { dump } from "js-yaml";
import { generateStackqlViews, convertToOpenAPI, cleanOpenAPISpec,removeEmptyLinesInYaml } from './lib/utils.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const docsDir = path.join(__dirname, "docs");
const outputDir = path.join(__dirname, "output");

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
    const yaml = dump(fileContent, {lineWidth: 500});
    const outputFilePath = path.join(outputDir, filename);
    fs.writeFileSync(outputFilePath, yaml, "utf8");
    console.log(`File ${filename} written successfully.`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

async function processService(servicePrefix, outputFilename) {
  const openAPI = {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
    },
    paths: {},
    components: {
      schemas: {},
    },
  };

  const files = findFiles(docsDir, servicePrefix);
  let serviceTitle;
  for (const file of files) {
    const content = await fs.promises.readFile(file);
    const jsonContent = JSON.parse(content);
    const componentName = jsonContent.typeName.split("::").pop();
    if (!serviceTitle) {
      serviceTitle = jsonContent.typeName?.split("::")[1];
    }
    const openAPIComponent = convertToOpenAPI(
      jsonContent,
      componentName,
      openAPI.components.schemas
    );
    Object.assign(openAPI.components.schemas, openAPIComponent);
  }
  openAPI.info = {title: serviceTitle, ...openAPI.info};
  const stackqlViews = generateStackqlViews(openAPI);
  Object.assign(openAPI, {'x-stackql-views': stackqlViews});


  const cleanedOpenAPI = cleanOpenAPISpec(openAPI);

  writeObjectToYamlFile(cleanedOpenAPI, outputFilename);
}


function findFilesInDocs(filter) {

  const filePath = filter? path.join(docsDir, filter) : docsDir;
  const files = fs.readdirSync(filePath);

  return files;
}

function main(){
  const docFiles = findFilesInDocs();
  const fileFilters = docFiles
  .filter(filename => filename.startsWith("aws-"))
  .map(filename => filename.split("-")[1]);

  const uniqueServices = [...new Set(fileFilters)];

  for (const service of uniqueServices) {
    try {
      const filePrefix = `aws-${service}`;
      const outputFilename = `${service}.yaml`;
      processService(filePrefix, outputFilename);
      console.log('Service processed', service)
    } catch (error) {
      console.log('Error processing file', service, error)
    }

  }

}

main()
