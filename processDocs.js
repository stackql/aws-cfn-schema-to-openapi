import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

function replaceRefsWithOpenAPIRefs(obj) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = replaceRefsWithOpenAPIRefs(obj[i]);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          obj[key] = replaceRefsWithOpenAPIRefs(obj[key]);

          if (key === "$ref") {
            obj[key] = obj[key].replace("#/definitions/", "#/components/schemas/");
          }
        }
      }
    }
  }

  return obj;
}



function convertToOpenAPI(input, componentName, schemaDefinitions) {
  const openAPIComponent = {
    type: "object",
    properties: {},
    required: input.required || [],
  };

  replaceRefsWithOpenAPIRefs(input)

  const formattedComponentName = componentName
    .replace(/^aws-lambda-/, '')
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');


  Object.entries(input.properties).forEach(([key, value]) => {
  if (value.type === "object" && value.properties) {
      openAPIComponent.properties[key] = convertToOpenAPI(value, key, schemaDefinitions);
    } else {
      openAPIComponent.properties[key] = value;
    }
  });

  Object.entries(input.definitions || {}).forEach(([key, value]) => {
    schemaDefinitions[key] = value;
  });

  return { [formattedComponentName]: openAPIComponent };
}

async function main(fileFilter, outputFilename, serviceTitle) {
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

    const componentName = path.basename(file, ".json");
    const openAPIComponent = convertToOpenAPI(jsonContent, componentName, openAPI.components.schemas);

    Object.assign(openAPI.components.schemas, openAPIComponent);
  }

  try {
    await fs.promises.writeFile(outputFilename, JSON.stringify(openAPI, null, 2));
    console.log(`File ${outputFilename} written successfully.`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

// Usage: main("file_prefix", "output_filename", "service_title");
main("aws-lambda", "openapi-lambda.json", "Lambda");
