import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { dump } from "js-yaml";
import _ from "lodash";

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

function isAllowedInOpenAPISchema(key) {
  const allowedProperties = [
    "type",
    "format",
    "items",
    "properties",
    "additionalProperties",
    "description",
    "default",
    "required",
    "enum",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    "minLength",
    "maxLength",
    "pattern",
    "minItems",
    "maxItems",
    "uniqueItems",
    "minProperties",
    "maxProperties",
    "allOf",
    "anyOf",
    "oneOf",
    "not",
    "$ref",
    "example",
  ];

  return allowedProperties.includes(key);
}

function convertToOpenAPI(input, componentName, schemaDefinitions) {
  const formattedComponentName = componentName
    .replace(/^aws-lambda-/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const formattedInput = input;

  const openAPIComponent = {
    type: "object",
    properties: {},
    required: formattedInput.required || [],
  };

  Object.entries(formattedInput.properties).forEach(([key, value]) => {
    if (value.type === "object" && value.properties) {
      openAPIComponent.properties[key] = convertToOpenAPI(
        value,
        key,
        schemaDefinitions
      ).properties[key];
    } else {
      openAPIComponent.properties[key] = value;
    }
  });

  Object.entries(formattedInput.definitions || {}).forEach(([key, value]) => {
    schemaDefinitions[key] = value;
  });

  return { [formattedComponentName]: openAPIComponent };
}

function processProperties(value, parentKey, grandparentKey) {
  if (_.isPlainObject(value)) {
    let result = {};

    for (const [key, val] of Object.entries(value)) {
      // Check if the key is $ref and update the reference
      if (key === "$ref" && val.startsWith("#/definitions/")) {
        result[key] = val.replace("#/definitions/", "#/components/schemas/");
      } 
      // Check if the grandparent key is either 'properties' or 'schemas'
      // and the parent key is not 'properties', then add x- prefix to non-allowed keys
      else if (
        (grandparentKey === "properties" || grandparentKey === "schemas") &&
        parentKey !== "properties" &&
        !isAllowedInOpenAPISchema(key)
      ) {
        result[`x-${key}`] = processProperties(val, key, parentKey);
      } else {
        result[key] = processProperties(val, key, parentKey);
      }
    }
    return result;
  } 
  // If value is an array, process each item recursively
  else if (_.isArray(value)) {
    return value.map((item) =>
      processProperties(item, parentKey, grandparentKey)
    );
  } 
  // If value is neither an object nor an array, return it unchanged
  else {
    return value;
  }
}

function cleanOpenAPISpec(openAPIObject) {
  const cleanedOpenAPIObject = processProperties(openAPIObject);
  return cleanedOpenAPIObject;
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
    const openAPIComponent = convertToOpenAPI(
      jsonContent,
      componentName,
      openAPI.components.schemas
    );

    Object.assign(openAPI.components.schemas, openAPIComponent);
  }
  const cleanedOpenAPI = cleanOpenAPISpec(openAPI);
  writeObjectToYamlFile(cleanedOpenAPI, outputFilename);
}

main("aws-lambda", "openapi-lambda.yaml", "Lambda");
