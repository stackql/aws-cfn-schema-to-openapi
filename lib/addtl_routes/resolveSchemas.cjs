const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// node resolveSchemas.cjs

const schemaFile = 'iam_api.yaml';
const schemaOutputFile = 'IAM.yaml';
// const targetPaths = [];

// // Function to load YAML file and add all paths to the list
// function addPathsToList(schemaFile, targetPaths) {
//   try {
//     // Read the YAML file
//     const filePath = path.resolve(__dirname, schemaFile);
//     const fileContents = fs.readFileSync(filePath, 'utf8');

//     // Parse the YAML file
//     const yamlContents = yaml.load(fileContents);

//     // Check if the YAML file contains paths
//     if (yamlContents && yamlContents.paths) {
//       // Add all paths to the targetPaths list
//       for (const path in yamlContents.paths) {
//         if (yamlContents.paths.hasOwnProperty(path)) {
//           targetPaths.push(path);
//         }
//       }
//     }

//     console.log('Paths added successfully:');
//     console.log(targetPaths);
//   } catch (e) {
//     console.error('Error reading or parsing the YAML file:', e);
//   }
// }

// // Call the function to add paths to the list
// addPathsToList(schemaOutputFile, targetPaths);

const targetPaths = [
  '/?Action=GetSSHPublicKey&Version=2010-05-08',
  '/?Action=CreatePolicyVersion&Version=2010-05-08',
  '/?Action=DeletePolicyVersion&Version=2010-05-08',
  '/?Action=GetPolicyVersion&Version=2010-05-08',
  '/?Action=GetServiceLastAccessedDetailsWithEntities&Version=2010-05-08',
  '/?Action=GetServiceLinkedRoleDeletionStatus&Version=2010-05-08',
  '/?Action=DeleteServiceLinkedRole&Version=2010-05-08',
  '/?Action=CreateServiceLinkedRole&Version=2010-05-08',
  '/?Action=CreateServiceSpecificCredential&Version=2010-05-08',
  '/?Action=DeleteServiceSpecificCredential&Version=2010-05-08',
  '/?Action=ListServiceSpecificCredentials&Version=2010-05-08',
  '/?Action=ListSigningCertificates&Version=2010-05-08',
  '/?Action=ResetServiceSpecificCredential&Version=2010-05-08',
  '/?Action=UpdateServiceSpecificCredential&Version=2010-05-08',
  '/?Action=UpdateSigningCertificate&Version=2010-05-08',
  '/?Action=UploadSigningCertificate&Version=2010-05-08',
  '/?Action=DeleteSigningCertificate&Version=2010-05-08',
  '/?Action=DeleteSSHPublicKey&Version=2010-05-08',
  '/?Action=GetServerCertificate&Version=2010-05-08',
  '/?Action=ListSSHPublicKeys&Version=2010-05-08',
  '/?Action=UpdateSSHPublicKey&Version=2010-05-08',
  '/?Action=UploadSSHPublicKey&Version=2010-05-08',
  '/?Action=ListPolicyTags&Version=2010-05-08',
  '/?Action=ListPolicyVersions&Version=2010-05-08',
  '/?Action=DeactivateMFADevice&Version=2010-05-08',
  '/?Action=EnableMFADevice&Version=2010-05-08',
  '/?Action=ListMFADeviceTags&Version=2010-05-08',
  '/?Action=ListMFADevices&Version=2010-05-08',
  '/?Action=ResyncMFADevice&Version=2010-05-08',
  '/?Action=TagMFADevice&Version=2010-05-08',
  '/?Action=UntagMFADevice&Version=2010-05-08',
  '/?Action=CreateLoginProfile&Version=2010-05-08',
  '/?Action=DeleteLoginProfile&Version=2010-05-08',
  '/?Action=GetLoginProfile&Version=2010-05-08',
  '/?Action=UpdateLoginProfile&Version=2010-05-08',
  '/?Action=ListInstanceProfilesForRole&Version=2010-05-08',
  '/?Action=ListGroupsForUser&Version=2010-05-08',
  '/?Action=ListEntitiesForPolicy&Version=2010-05-08',
  '/?Action=GetContextKeysForCustomPolicy&Version=2010-05-08',
  '/?Action=GetContextKeysForPrincipalPolicy&Version=2010-05-08',
  '/?Action=ListAttachedRolePolicies&Version=2010-05-08',
  '/?Action=ListAttachedUserPolicies&Version=2010-05-08',
  '/?Action=ListAttachedGroupPolicies&Version=2010-05-08',
  '/?Action=GetAccountSummary&Version=2010-05-08',
  '/?Action=GetAccountPasswordPolicy&Version=2010-05-08',
  '/?Action=UpdateAccountPasswordPolicy&Version=2010-05-08',
  '/?Action=DeleteAccountPasswordPolicy&Version=2010-05-08',
  '/?Action=GetAccountAuthorizationDetails&Version=2010-05-08',
  '/?Action=ListAccountAliases&Version=2010-05-08',
  '/?Action=GetAccessKeyLastUsed&Version=2010-05-08',
  '/?Action=CreateAccessKey&Version=2010-05-08',
  '/?Action=DeleteAccessKey&Version=2010-05-08',
  '/?Action=ListAccessKeys&Version=2010-05-08',
  '/?Action=UpdateAccessKey&Version=2010-05-08',
  '/?Action=AttachGroupPolicy&Version=2010-05-08',
  '/?Action=AttachRolePolicy&Version=2010-05-08',
  '/?Action=AttachUserPolicy&Version=2010-05-08',
  '/?Action=CreatePolicy&Version=2010-05-08',
  '/?Action=DeleteGroupPolicy&Version=2010-05-08',
  '/?Action=DeletePolicy&Version=2010-05-08',
  '/?Action=DeleteRolePolicy&Version=2010-05-08',
  '/?Action=DeleteUserPolicy&Version=2010-05-08',
  '/?Action=DetachGroupPolicy&Version=2010-05-08',
  '/?Action=DetachRolePolicy&Version=2010-05-08',
  '/?Action=DetachUserPolicy&Version=2010-05-08',
  '/?Action=GetGroupPolicy&Version=2010-05-08',
  '/?Action=GetPolicy&Version=2010-05-08',
  '/?Action=GetRolePolicy&Version=2010-05-08',
  '/?Action=GetUserPolicy&Version=2010-05-08',
  '/?Action=ListGroupPolicies&Version=2010-05-08',
  '/?Action=ListPolicies&Version=2010-05-08',
  '/?Action=ListRolePolicies&Version=2010-05-08',
  '/?Action=ListUserPolicies&Version=2010-05-08',
  '/?Action=PutGroupPolicy&Version=2010-05-08',
  '/?Action=PutRolePolicy&Version=2010-05-08',
  '/?Action=PutUserPolicy&Version=2010-05-08',
  '/?Action=UntagPolicy&Version=2010-05-08',
  '/?Action=TagPolicy&Version=2010-05-08'
];

function resolveSchema(schema, components, resolvedSchemas = new Set(), schemaDefinitions = {}) {
  if (!schema) return [];

  if (schema.$ref) {
    const ref = schema.$ref.replace('#/components/schemas/', '');
    if (resolvedSchemas.has(ref)) return [];
    resolvedSchemas.add(ref);
    const resolvedSchema = components.schemas[ref];
    schemaDefinitions[ref] = resolvedSchema;
    return [ref, ...resolveSchema(resolvedSchema, components, resolvedSchemas, schemaDefinitions)];
  }

  let schemas = [];
  if (schema.type === 'object' && schema.properties) {
    Object.values(schema.properties).forEach(property => {
      schemas = schemas.concat(resolveSchema(property, components, resolvedSchemas, schemaDefinitions));
    });
  }

  if (schema.type === 'array' && schema.items) {
    schemas = schemas.concat(resolveSchema(schema.items, components, resolvedSchemas, schemaDefinitions));
  }

  if (schema.allOf) {
    schema.allOf.forEach(subSchema => {
      schemas = schemas.concat(resolveSchema(subSchema, components, resolvedSchemas, schemaDefinitions));
    });
  }

  if (schema.oneOf) {
    schema.oneOf.forEach(subSchema => {
      schemas = schemas.concat(resolveSchema(subSchema, components, resolvedSchemas, schemaDefinitions));
    });
  }

  if (schema.anyOf) {
    schema.anyOf.forEach(subSchema => {
      schemas = schemas.concat(resolveSchema(subSchema, components, resolvedSchemas, schemaDefinitions));
    });
  }

  return schemas;
}

function collectParameters(parameters, components, resolvedSchemas, schemaDefinitions) {
  let schemas = [];
  parameters.forEach(param => {
    if (param.schema) {
      schemas = schemas.concat(resolveSchema(param.schema, components, resolvedSchemas, schemaDefinitions));
    }
  });
  return schemas;
}

function collectRequestBody(requestBody, components, resolvedSchemas, schemaDefinitions) {
  if (!requestBody) return [];
  const content = requestBody.content || {};
  let schemas = [];
  Object.values(content).forEach(mediaType => {
    schemas = schemas.concat(resolveSchema(mediaType.schema, components, resolvedSchemas, schemaDefinitions));
  });
  return schemas;
}

function collectResponses(responses, components, resolvedSchemas, schemaDefinitions) {
  let schemas = [];
  Object.values(responses).forEach(response => {
    const content = response.content || {};
    Object.values(content).forEach(mediaType => {
      schemas = schemas.concat(resolveSchema(mediaType.schema, components, resolvedSchemas, schemaDefinitions));
    });
  });
  return schemas;
}

function collectPathSchemas(pathItem, components, resolvedSchemas, schemaDefinitions) {
  let schemas = [];

  ['get', 'post', 'put', 'delete', 'patch', 'options', 'head', 'trace'].forEach(method => {
    if (pathItem[method]) {
      const operation = pathItem[method];
      if (operation.parameters) {
        schemas = schemas.concat(collectParameters(operation.parameters, components, resolvedSchemas, schemaDefinitions));
      }
      if (operation.requestBody) {
        schemas = schemas.concat(collectRequestBody(operation.requestBody, components, resolvedSchemas, schemaDefinitions));
      }
      if (operation.responses) {
        schemas = schemas.concat(collectResponses(operation.responses, components, resolvedSchemas, schemaDefinitions));
      }
    }
  });

  return schemas;
}

function getAllDependentSchemasForPaths(openApiSpec, paths) {
  const components = openApiSpec.components || {};
  let resolvedSchemas = new Set();
  let schemaDefinitions = {};
  let allSchemas = [];

  paths.forEach(path => {
    const pathItem = openApiSpec.paths[path];
    if (!pathItem) {
      throw new Error(`Path ${path} not found in the OpenAPI specification`);
    }
    let schemas = collectPathSchemas(pathItem, components, resolvedSchemas, schemaDefinitions);
    allSchemas = allSchemas.concat(schemas);
  });

  allSchemas = [...new Set(allSchemas)]; // Remove duplicates
  allSchemas.sort(); // Alphabetize the list

  const dedupedSchemaDefinitions = {};
  allSchemas.forEach(schemaName => {
    if (schemaDefinitions[schemaName]) {
      dedupedSchemaDefinitions[schemaName] = schemaDefinitions[schemaName];
    }
  });

  return { schemas: dedupedSchemaDefinitions };
}

// Load your OpenAPI specification from a YAML file
const openApiSpecPath = path.resolve(schemaFile);
const openApiSpec = yaml.load(fs.readFileSync(openApiSpecPath, 'utf-8'));

const dependentSchemas = getAllDependentSchemasForPaths(openApiSpec, targetPaths);

const outputYaml = yaml.dump({ components: { schemas: dependentSchemas.schemas } });

console.log('Dependent schemas block for specified paths:');
console.log(outputYaml);

// Write to a file if needed
fs.writeFileSync('dependent_schemas.yaml', outputYaml, 'utf8');
