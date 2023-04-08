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
    'x-stackql-resource-name': formattedComponentName,
  };

  Object.entries(formattedInput.properties).forEach(([key, value]) => {
    if (value.type === "object" && value.properties) {
      openAPIComponent.properties[key] = convertToOpenAPI(
        value,
        key,
        schemaDefinitions
      ).properties[key];
    } else {
      value['x-is-top-level-property'] = true;
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
        && !key.startsWith('x-')
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

function generateStackqlViews(openApiSpec) {
  const region = 'ap-southeast-1';
  const componentName = openApiSpec.info.title;

  const topLevelSchemas = Object.entries(openApiSpec.components.schemas)
    .filter(([_, value]) => value['x-stackql-resource-name']);
  const views = topLevelSchemas.map(([schemaName, schema]) => {
    const resource = schema['x-stackql-resource-name'] || schemaName;
    const selectQuery = generateSelectQuery(schemaName, schema, region, componentName, openApiSpec);

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

function generateSelectQuery(schemaName, schema, region, componentName, openApiSpec) {
  let selectQuery = "SELECT \n";
  for (const propertyName in schema.properties) {
    const propertySchema = schema.properties[propertyName];
    //if property schema has ref, need to get the ref component in the schema of the openapi spec
    if (propertySchema.$ref) {
      const refSchemaName = propertySchema.$ref.split('/').pop();
      const refSchema = openApiSpec.components.schemas[refSchemaName];
      for (const nestedPropertyName in refSchema.properties) {
        const columnAlias = toSnakeCase(`${propertyName}_${nestedPropertyName}`);
        selectQuery += `JSON_EXTRACT(Properties, '$.${propertyName}.${nestedPropertyName}') as ${columnAlias},\n`;
      }
    } else {
      const columnAlias = toSnakeCase(propertyName);
      selectQuery += `JSON_EXTRACT(Properties, '$.${propertyName}') as ${columnAlias},\n`;
    }
  }

  selectQuery = selectQuery.slice(0, -2);

  selectQuery += `\nFROM aws.cloud_control.resources WHERE region = '${region}' and data__TypeName = 'AWS::${componentName}::${schemaName}' ;`;

  return selectQuery;
}

function toSnakeCase(str) {
  return str.replace(/[\w]([A-Z])/g, (m) => m[0] + '_' + m[1]).toLowerCase();
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
    //  "typeName" : "AWS::Lambda::Function", to "Function"
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





main("aws-lambda", "openapi-lambda.yaml", "Lambda");


/**
 * Write a javascript function generateStackqlViews(schema) that will generate a view for each: 
 * identify such top level schema, add x-stackql-resource-name:function (all snake case)
 * If the schema has the x-stackql-resource-name property, then generate a view starting like
 *    s3_bucket_listing:
      name: s3_bucket_listing
      id: aws.pseudo_s3.s3_bucket_listing
      config:
        views:
          'select':
              predicate: sqlDialect == "sqlite3"
              ddl: '
                SELECT 
                JSON_EXTRACT(Properties, ''$.Arn'') as Arn,
                JSON_EXTRACT(Properties, ''$.BucketName'') as BucketName,
                JSON_EXTRACT(Properties, ''$.DomainName'') as DomainName,
                JSON_EXTRACT(Properties, ''$.RegionalDomainName'') as RegionalDomainName,
                JSON_EXTRACT(Properties, ''$.DualStackDomainName'') as DualStackDomainName,
                JSON_EXTRACT(Properties, ''$.WebsiteURL'') as WebsiteURL,
                JSON_EXTRACT(Properties, ''$.OwnershipControls.Rules[0].ObjectOwnership'') as ObjectOwnership,
                IIF(JSON_EXTRACT(Properties, ''$.PublicAccessBlockConfiguration.RestrictPublicBuckets'') = 0, ''false'', ''true'') as RestrictPublicBuckets,
                IIF(JSON_EXTRACT(Properties, ''$.PublicAccessBlockConfiguration.BlockPublicPolicy'') = 0, ''false'', ''true'') as BlockPublicPolicy,
                IIF(JSON_EXTRACT(Properties, ''$.PublicAccessBlockConfiguration.BlockPublicAcls'') = 0, ''false'', ''true'') as BlockPublicAcls,
                IIF(JSON_EXTRACT(Properties, ''$.PublicAccessBlockConfiguration.IgnorePublicAcls'') = 0, ''false'', ''true'') as IgnorePublicAcls,
                JSON_EXTRACT(Properties, ''$.Tags'') as Tags
                FROM aws.cloud_control.resources WHERE region = ''ap-southeast-1'' and data__TypeName = ''AWS::S3::Bucket''
                ;
 */
/**
 * Given an openapi spec, I want to generate a sqlite select statement extracting all the fields in the schema,
 * for example, given the following schema:
openapi: 3.0.0
info:
  title: Lambda
  version: 1.0.0
paths: {}
components:
  schemas:
    Function: 
      x-stackql-resource-name: function
      type: object
      properties:
        Code:
          description: The code for the function.
          $ref: '#/components/schemas/Code'
      required:
        - Code
    Code:
      additionalProperties: false
      type: object
      properties:
        S3ObjectVersion:
          minLength: 1
          description: >-
            For versioned objects, the version of the deployment package object
            to use.
          type: string
          maxLength: 1024
        S3Bucket:
          minLength: 3
          pattern: ^[0-9A-Za-z\.\-_]*(?<!\.)$
          description: >-
            An Amazon S3 bucket in the same AWS Region as your function. The
            bucket can be in a different AWS account.
          type: string
          maxLength: 63
        ZipFile:
          description: >-
            The source code of your Lambda function. If you include your
            function source inline with this parameter, AWS CloudFormation
            places it in a file named index and zips it to create a deployment
            package..
          type: string
        S3Key:
          minLength: 1
          description: The Amazon S3 key of the deployment package.
          type: string
          maxLength: 1024
        ImageUri:
          description: ImageUri.
          type: string

  * I want to generate the following:
    function:
      name: function
      id: aws.lambda.function
      config:
        views:
          'select':
              predicate: sqlDialect == "sqlite3"
              ddl: '
               SELECT 
                JSON_EXTRACT(Properties, ''$.Code.S3ObjectVersion'') as code_s3_object_version,
                JSON_EXTRACT(Properties, ''$.Code.S3Bucket'') as code_s3_bucket,
                JSON_EXTRACT(Properties, ''$.Code.ZipFile'') as code_zip_file,
                JSON_EXTRACT(Properties, ''$.Code.S3Key'') as code_s3_Key,
                JSON_EXTRACT(Properties, ''$.Code.ImageUri'') as code_image_uri
                FROM aws.cloud_control.resources WHERE region = ''ap-southeast-1'' and data__TypeName = ''AWS::Lambda::Function''
                ;
                '
    here are some rules: 
    1. Identify the top level function by finding the key x-stackql-resource-name (which should be a snake case string)
    2. All object names include field alias should be converted to snake case 
    3. if property of an object reference another object, extract the lowest scaler type property from each object
      to avoid name collision, use the object name as prefix for each property
    4. if the property is an array, don't extract it, just return it as it is (it will be a json string)

 */