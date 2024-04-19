import * as fs from 'fs'; // For synchronous methods like fs.existsSync
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { dump, load } from "js-yaml";
import { generateStackqlViews, convertToOpenAPI, cleanOpenAPISpec } from './lib/utils/index.js';
import { resourceTypes } from './cc_supported_resources.js';

const providerName = 'awsv2';

const staticFiles = [
  'cloud_control.yaml', 
  'ec2_api.yaml', 
  'iam_api.yaml', 
  's3_api.yaml',
  'cloudwatch_api.yaml',
  'cloudhsm.yaml',
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const docsDir = path.join(__dirname, "input-cfn-docs");
const outputDir = path.join(__dirname, `src/${providerName}/v00.00.00000/services`);

let providerManifest = {
  id: providerName,
  name: providerName,
  version: 'v00.00.00000',
  providerServices: {},
  config: {
    auth: {
      type: 'aws_signing_v4',
      credentialsenvvar: 'AWS_SECRET_ACCESS_KEY',
      keyIDenvvar: 'AWS_ACCESS_KEY_ID',
    },
  },
};

function clearOutputDir() {
  // Define directories
  const servicesDir = outputDir;

  const providerYamlPath = path.join(servicesDir, '..', 'provider.yaml');
  if (fs.existsSync(providerYamlPath)) {  // Check if the file exists
      try {
          fs.unlinkSync(providerYamlPath);  // If it exists, delete it
          console.log(`Deleted ${providerYamlPath}`);
      } catch (err) {
          console.error(`Error deleting file ${providerYamlPath}:`, err);
      }
  } else {
      console.log(`${providerYamlPath} doesn't exist. Nothing to delete.`);
  }

  for (const dir of [servicesDir]) {
      if (fs.existsSync(dir)) {
          // Get all the files in the directory
          const files = fs.readdirSync(dir);

          for (const file of files) {
              const filePath = path.join(dir, file);
              
              // Skip if static service file
              if (staticFiles.includes(file)) {
                console.log(`Skipping statically defined spec:  ${filePath}`);
                continue;
              }

              // Check if the file ends with .yaml
              if (path.extname(filePath) === '.yaml') {
                  try {
                      fs.unlinkSync(filePath); // Deletes the file
                      console.log(`Deleted ${filePath}`);
                  } catch (err) {
                      console.error(`Error deleting file ${filePath}:`, err);
                  }
              }
          }
      } else {
          console.log(`${dir} doesn't exist. Nothing to clean.`);
      }
  }
}

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
    // Check if resource type is supported, if not, skip it
    if (!resourceTypes.includes(jsonContent.typeName)) {
      console.log(`Skipping unsupported resource type: ${jsonContent.typeName}`);
      continue;
    }

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
  if (!openAPI.components['x-stackQL-resources']) {
      openAPI.components['x-stackQL-resources'] = {};
  }
  Object.assign(openAPI.components['x-stackQL-resources'], stackqlViews);

  if (!Object.keys(openAPI.components['x-stackQL-resources']).length) {
    return false;
  }

  const cleanedOpenAPI = cleanOpenAPISpec(openAPI);

  if(serviceTitle == 'EC2'){
    // fix bug with self referencing object
    delete cleanedOpenAPI.components.schemas.SseSpecification.$ref;
    cleanedOpenAPI.components.schemas.SseSpecification['type'] = 'object';
    cleanedOpenAPI.components.schemas.SseSpecification['properties'] = {
      KmsKeyArn: {
        description: 'KMS Key Arn used to encrypt the group policy',
        type: 'string'
      },
      CustomerManagedKeyEnabled: {
        description: 'Whether to encrypt the policy with the provided key or disable encryption',
        type: 'boolean'
      }
    }
    cleanedOpenAPI.components.schemas.SseSpecification['additionalProperties'] = false;
  }

  const finalAPI = addAdditionalViews(cleanedOpenAPI, serviceTitle);

  writeObjectToYamlFile(finalAPI, outputFilename);
  return true;
}

function addAdditionalViews(openAPISpec, serviceTitle) {
  // Check for a custom view definition
  const viewsDir = path.join(__dirname, 'lib/views');
  const viewsFiles = findFiles(viewsDir, `${serviceTitle}.yaml`);
  
  if (viewsFiles.length) {
    const viewsContent = fs.readFileSync(viewsFiles[0], 'utf8');
    let views = load(viewsContent);

    // Ensure 'views' only contains relevant component definitions
    if (views.components && views.components['x-stackQL-resources']) {
      openAPISpec.components['x-stackQL-resources'] = {
        ...openAPISpec.components['x-stackQL-resources'],
        ...views.components['x-stackQL-resources']
      };
    }
    if (views.components && views.components.schemas) {
      openAPISpec.components['schemas'] = {
        ...openAPISpec.components['schemas'],
        ...views.components.schemas
      };
    }
  }

  return openAPISpec;
}


function findFilesInDocs(filter) {

  const filePath = filter? path.join(docsDir, filter) : docsDir;
  const files = fs.readdirSync(filePath);

  return files;
}

function addStaticFilesToManifest(service) {
return (
  providerManifest.providerServices[service] = {
    id: `${service}:${providerManifest.version}`,
    name: service,
    preferred: true,
    service: {
        $ref: `${providerName}/${providerManifest.version}/services/${service}.yaml`,
    },
    title: service,
    version: providerManifest.version,
    description: service,
  }
)
}


async function main(){
  clearOutputDir();

  const docFiles = findFilesInDocs();
  const fileFilters = docFiles
  .filter(filename => filename.startsWith("aws-"))
  .map(filename => filename.split("-")[1]);

  const uniqueServices = [...new Set(fileFilters)];

  for (let service of uniqueServices) {
    try {
      const filePrefix = `aws-${service}-`;
      let outputFilename = `${service}.yaml`;

      const validService = await processService(filePrefix, outputFilename);

      if(!validService) {
        console.log(`WARN: No stackQL views found for ${service}`);
        continue;
      }

      // add service to manifest
      providerManifest.providerServices[service] = {
        id: `${service}:${providerManifest.version}`,
        name: service,
        preferred: true,
        service: {
            $ref: `${providerName}/${providerManifest.version}/services/${service}.yaml`,
        },
        title: service,
        version: providerManifest.version,
        description: service,
      };
      console.log('Service processed', service);
    } catch (error) {
      console.log('Error processing file', service, error)
    }
  }

  // add static files
  const baseNames = staticFiles.map(file => file.replace('.yaml', ''));
  baseNames.forEach(service => {
    console.log('Adding static service to manifest', service);
    addStaticFilesToManifest(service);
  });

  writeObjectToYamlFile(providerManifest, '../provider.yaml');
}

await main();