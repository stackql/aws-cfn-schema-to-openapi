
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
  
  function removeTrailingComma(query) {
    return query.slice(0, -2);
  }
  
  function buildFromClause(region, componentName, schemaName) {
    return `\nFROM aws.cloud_control.resources WHERE region = '${region}' and data__TypeName = 'AWS::${componentName}::${schemaName}' ;`;
  }
  
  function toSnakeCase(str) {
    return str.replace(/[\w]([A-Z])/g, (m) => m[0] + "_" + m[1]).toLowerCase();
  }
  
  function generateSelectQuery({
    schemaName,
    schema,
    region,
    componentName,
    openApiSpec,
  }) {
    let selectQuery = "SELECT\n";
  
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
  
    selectQuery = removeTrailingComma(selectQuery);
    selectQuery += buildFromClause(region, componentName, schemaName);
    return selectQuery;
  }
  
  
  export function generateStackqlViews(openApiSpec) {
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