import pluralize from 'pluralize';

function handlePrimaryIdentifierProperty(primaryIdentifier, openApiSpec) {
  let columns = "";

  primaryIdentifier.forEach(identifier => {
    let adjustedIdentifier = identifier.replace(/\//g, '.'); // Replace slashes with dots for nested properties
    const columnAlias = toSnakeCase(adjustedIdentifier);
    columns += `JSON_EXTRACT(Properties, '$.${adjustedIdentifier}') as ${columnAlias},\n`;
  });

  return columns;
}

function handleReferenceProperty(propertySchema, openApiSpec, propertyName) {
  let queryPart = "";

  const refSchemaName = propertySchema.$ref.split("/").pop();
  const refSchema = openApiSpec.components.schemas[refSchemaName];

  for (const nestedPropertyName in refSchema.properties) {
    const columnAlias = toSnakeCase(`${propertyName}${nestedPropertyName}`);
    queryPart += `JSON_EXTRACT(Properties, '$.${propertyName}.${nestedPropertyName}') as ${columnAlias},\n`;
  }

  return queryPart;
}

function handleSimpleProperty(propertyName) {
  const columnAlias = toSnakeCase(propertyName);
  return `JSON_EXTRACT(Properties, '$.${propertyName}') as ${columnAlias},\n`;
}

function toSnakeCase(str) {
  return str.replace(/[\w]([A-Z])/g, (m) => m[0] + "_" + m[1]).toLowerCase();
}

function removeTrailingComma(query) {
  return query.slice(0, -2);
}

function generateSelectQuery({
  schemaName,
  schema,
  componentName,
  openApiSpec,
  isPlural
}) {
  let selectQuery = "SELECT\nregion,\n";

  if (isPlural && schema['x-stackql-primaryIdentifier']) {
    // For plural, use only primary identifiers for column list
    selectQuery += handlePrimaryIdentifierProperty(schema['x-stackql-primaryIdentifier'], openApiSpec);
  } else {
    // For singular, use all properties
    for (const propertyName in schema.properties) {
      const propertySchema = schema.properties[propertyName];
      const isReference = propertySchema.$ref;

      if (isReference) {
        selectQuery += handleReferenceProperty(
          propertySchema,
          openApiSpec,
          propertyName
        );
      } else {
        selectQuery += handleSimpleProperty(propertyName);
      }
    }
  }

  selectQuery = removeTrailingComma(selectQuery);
  const typeName = `AWS::${componentName}::${schemaName}`;
  
  if (isPlural){
    selectQuery += `\nFROM aws.cloud_control.resources WHERE data__TypeName = '${typeName}'`;
  } else {
    selectQuery += `\nFROM aws.cloud_control.resource WHERE data__TypeName = '${typeName}'`;
  }
  

  return selectQuery;
}

export function generateStackqlViews(openApiSpec) {
  const componentName = openApiSpec.info.title;

  const topLevelSchemas = Object.entries(openApiSpec.components.schemas)
    .filter(([_, value]) => value['x-stackql-resource-name']);

  const views = {};

  topLevelSchemas.forEach(([schemaName, schema]) => {
    const resource = schema['x-stackql-resource-name'] || schemaName;

    // Generate plural resource and view
    const pluralResource = pluralize(resource);

    const selectQueryPlural = generateSelectQuery({
      schemaName,
      schema,
      componentName,
      openApiSpec,
      isPlural: true
    });

    views[pluralResource] = {
      name: pluralResource,
      id: `aws.${componentName.toLowerCase()}.${pluralResource}`,
      'x-cfn-schema-name': schemaName,
      'x-type': 'list',
      config: {
        views: {
          select: {
            predicate: 'sqlDialect == "sqlite3"',
            ddl: selectQueryPlural,
          },
        },
      },
    };

    // Generate singular resource and view
    const selectQuerySingular = generateSelectQuery({
      schemaName,
      schema,
      componentName,
      openApiSpec,
      isPlural: false
    });

    views[resource] = {
      name: resource,
      id: `aws.${componentName.toLowerCase()}.${resource}`,
      'x-cfn-schema-name': schemaName,
      'x-type': 'get',
      'x-identifiers': schema['x-stackql-primaryIdentifier'],
      config: {
        views: {
          select: {
            predicate: 'sqlDialect == "sqlite3"',
            ddl: selectQuerySingular,
          },
        },
      },
    };
  });

  return views;
}
