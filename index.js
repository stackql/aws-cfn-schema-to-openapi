import * as fs from 'fs'; // For synchronous methods like fs.existsSync
import { promises as fsPromises } from 'fs'; // For asynchronous methods like readFile, writeFile
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { dump, load } from "js-yaml";
import { generateStackqlViews, convertToOpenAPI, cleanOpenAPISpec } from './lib/utils/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const docsDir = path.join(__dirname, "input-cfn-docs");
const outputDir = path.join(__dirname, "src/aws/v00.00.00000/services");

let providerManifest = {
  id: 'aws',
  name: 'aws',
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
              
              // Skip if the file is cloud_control.yaml
              if (file === 'cloud_control.yaml') {
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
  clearOutputDir();

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
      // add service to manifest
      providerManifest.providerServices[service] = {
        id: `${service}:${providerManifest.version}`,
        name: service,
        preferred: true,
        service: {
            $ref: `aws/${providerManifest.version}/services/${service}.yaml`,
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
  writeObjectToYamlFile(providerManifest, '../provider.yaml');
}

main();

// async function processYamlFilesInDirectory(directory) {
//     const files = await fsPromises.readdir(directory);

//     for (const file of files) {
//         console.log('Processing file:', file);
//         // const filePath = path.join(directory, file);
//         // const fileStat = await fsPromises.stat(filePath);

//         // // Ensure it's a file, not a directory, and has a .yaml extension
//         // if (fileStat.isFile() && path.extname(filePath) === '.yaml') {
//         //     console.log('Adding service to provider manifest:', filePath);
            
//         //     const content = await fsPromises.readFile(filePath, 'utf8');  // Ensure encoding is specified
//         //     const yamlContent = load(content);  // Make sure 'load' is imported from 'js-yaml'
            
//         //     const serviceName = yamlContent.info.title;
//         //     console.log('Service name:', serviceName);
            
//         //     providerManifest.providerServices[serviceName] = {
//         //         id: `${serviceName}:${providerManifest.version}`,
//         //         name: serviceName,
//         //         preferred: true,
//         //         service: {
//         //             $ref: `aws/${providerManifest.version}/services/${serviceName}.yaml`,
//         //         },
//         //         title: serviceName,
//         //         version: providerManifest.version,
//         //         description: serviceName,
//         //     };
//         // }
//     }
//     writeObjectToYamlFile(providerManifest, '../provider.yaml');  // Assuming you have this function defined elsewhere
// }

// await processYamlFilesInDirectory(outputDir);