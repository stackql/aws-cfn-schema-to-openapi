const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// node resolveSchemas.cjs

const schemaFile = 'ec2_api.yaml';
const targetPaths = [
  '/?Action=RebootInstances&Version=2016-11-15',
  '/?Action=StopInstances&Version=2016-11-15',
  '/?Action=StartInstances&Version=2016-11-15',
  '/?Action=ResetSnapshotAttribute&Version=2016-11-15',
  '/?Action=ModifySnapshotAttribute&Version=2016-11-15',
  '/?Action=DescribeSnapshotAttribute&Version=2016-11-15',
  '/?Action=DescribeSnapshotTierStatus&Version=2016-11-15',
  '/?Action=DescribeSnapshots&Version=2016-11-15',
  '/?Action=ModifySnapshotTier&Version=2016-11-15',
  '/?Action=RestoreSnapshotTier&Version=2016-11-15',
  '/?Action=CreateSnapshot&Version=2016-11-15',
  '/?Action=CreateSnapshots&Version=2016-11-15',
  '/?Action=CopySnapshot&Version=2016-11-15',
  '/?Action=DeleteSnapshot&Version=2016-11-15',
  '/?Action=ImportSnapshot&Version=2016-11-15',
  '/?Action=ListSnapshotsInRecycleBin&Version=2016-11-15',
  '/?Action=RestoreSnapshotFromRecycleBin&Version=2016-11-15'
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
