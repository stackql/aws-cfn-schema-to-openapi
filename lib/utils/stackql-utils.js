import pluralize from 'pluralize';

const providerName = 'aws';

function fixReservedWordColumnAlias(columnAlias) {
 switch (columnAlias) {
    case 'values':
      return `_${columnAlias}`;
    case 'schema':
      return `_${columnAlias}`;
    case 'database':
      return `_${columnAlias}`;
    case 'format':
      return `_${columnAlias}`;
    case 'update':
      return `_${columnAlias}`;
    case 'force':
      return `_${columnAlias}`;
    case 'match':
      return `_${columnAlias}`;                      
    default:
      return columnAlias;
  }
}

function fixCamelCaseIssues(propertyName) {
  const replacements = {
      DB: "Db",
      ARN: "Arn",
      WAN: "Wan",
      URL: "Url",
      VPC: "Vpc",
      DHCP: "Dhcp",
      DNS: "Dns",
      IP: "Ip",
      IAM: "Iam",
      IPAM: "Ipam",
      TLS: "Tls",
      SSM: "Ssm",
      CNAME: "Cname",
      SQ: "Sq",
      ML: "Ml",
      SKU: "Sku",
      KMS: "Kms",
      OK: "Ok",
      CA: "Ca",
      ID: "Id",
      TTL: "Ttl",
      URI: "Uri",
      LB: "Lb",
      SNS: "Sns",
      AWS: "Aws",
      ACL: "Acl",
      AZ: "Az",
      API: "Api",
      MSK: "Msk",
      ECS: "Ecs",
      EBS: "Ebs",
      CWE: "Cwe",
      SSE: "Sse",
      HPO: "Hpo",
      LF: "Lf",
      WAL: "Wal",
      MFA: "Mfa",
      OAuth: "Oauth",
  };

  let updatedPropertyName = propertyName;

  for (const [key, value] of Object.entries(replacements)) {
      const regex = new RegExp(key, 'g');
      updatedPropertyName = updatedPropertyName.replace(regex, value);
  }

  return updatedPropertyName;
}

function handlePrimaryIdentifierProperty(dbms, primaryIdentifier, openApiSpec) {
  let columns = "";

  primaryIdentifier.forEach(identifier => {
    const pathParts = identifier.replace(/^\//, '').split('/'); // Remove leading slash and split

    // let columnAlias = toSnakeCase(pathParts.join('_'));
    let columnAlias = toSnakeCase(pathParts.map(fixCamelCaseIssues).join('_'));

    columnAlias = fixReservedWordColumnAlias(columnAlias);

    if (dbms === 'postgres'){
      // log a message when pathParts is greater than 1
      if (pathParts.length > 1) {
        console.log(`The primaryIdentifier ${identifier} has more than one part.`);
      }
      // Wrap each part in single quotes and separate by commas
      const adjustedIdentifier = pathParts.map(part => `'${part}'`).join(', ');
      // Use json_extract_path_text for 'json' type or jsonb_extract_path_text for 'jsonb' type
      columns += `json_extract_path_text(Properties, ${adjustedIdentifier}) as ${columnAlias},\n`;
    } else {
      // For SQLite and others, use the adjusted identifier directly
      const adjustedIdentifier = pathParts.join('.');
      columns += `JSON_EXTRACT(Properties, '$.${adjustedIdentifier}') as ${columnAlias},\n`;
    }  
  });

  // Remove the trailing comma from the last column
  columns = columns.replace(/,\n$/, '');

  return columns;
}

function handleSimpleProperty(dmbs, propertyName) {
  let columnAlias = toSnakeCase(fixCamelCaseIssues(propertyName));

  columnAlias = fixReservedWordColumnAlias(columnAlias);

  if (dmbs === 'postgres'){
    return `json_extract_path_text(Properties, '${propertyName}') as ${columnAlias},\n`;
  } else {
    return `JSON_EXTRACT(Properties, '$.${propertyName}') as ${columnAlias},\n`;
  }
}

function toSnakeCase(str) {
  return str.replace(/[\w]([A-Z])/g, (m) => m[0] + "_" + m[1]).toLowerCase();
}

function removeTrailingComma(query) {
  return query.slice(0, -2);
}

function generateSelectQuery({
  dmbs,
  schemaName,
  schema,
  componentName,
  openApiSpec,
  isPlural
}) {
  let selectQuery = "SELECT\nregion,\n";

  // Iterate over all properties in the schema
  if(isPlural && schema['x-stackql-primary-identifier']){
    selectQuery += handlePrimaryIdentifierProperty(dmbs, schema['x-stackql-primary-identifier'], openApiSpec);
  } else {
    selectQuery += "data__Identifier,\n";
    for (const propertyName in schema.properties) {
      // Use simple property handler for all properties
      selectQuery += handleSimpleProperty(dmbs, propertyName);
    }
    selectQuery = removeTrailingComma(selectQuery);
  }

  // selectQuery = removeTrailingComma(selectQuery);
  const typeName = `AWS::${componentName}::${schemaName}`;
  
  // Append the FROM clause based on whether it is plural or singular
  if (isPlural){
    selectQuery += `\nFROM ${providerName}.cloud_control.resources WHERE data__TypeName = '${typeName}'`;
  } else {
    const primaryIdentifiers = schema['x-stackql-primary-identifier'];
    const identifierValues = primaryIdentifiers.map(id => `<${id}>`).join('|');
    selectQuery += `\nFROM ${providerName}.cloud_control.resource WHERE data__TypeName = '${typeName}'\nAND data__Identifier = '${identifierValues}'`;
    // selectQuery += `\nFROM ${providerName}.cloud_control.resource WHERE data__TypeName = '${typeName}'\nAND data__Identifier = '<${schema['x-stackql-primary-identifier'][0]}>'`;
  }

  return selectQuery;
}

export function generateStackqlViews(openApiSpec) {
  const componentName = openApiSpec.info.title;

  // const globalServices = ['IAM', 'Route53', 'CloudFront', 'WAFv2', 'Shield', 'GlobalAccelerator'];
  // const regionClause = globalServices.includes(componentName) ? "" : "\nAND region = 'us-east-1'";

  const regionClause = "\nAND region = 'us-east-1'";

  const topLevelSchemas = Object.entries(openApiSpec.components.schemas)
    .filter(([_, value]) => value['x-stackql-resource-name']);

  const views = {};

  topLevelSchemas.forEach(([schemaName, schema]) => {

    let resource = schema['x-stackql-resource-name'] || schemaName;
    const isListSupported = schema['x-required-permissions']['list'] ? true : false;
    const isGetSupported = schema['x-required-permissions']['read'] ? true : false;
    const isCreateSupported = schema['x-required-permissions']['create'] ? true : false;
    const isUpdateSupported = schema['x-required-permissions']['update'] ? true : false;
    const isDeleteSupported = schema['x-required-permissions']['delete'] ? true : false;

    const pluralResource = pluralize(resource);

    if(['registry', 'list', 'stream'].includes(resource)){
      resource = `${componentName.toLowerCase()}_${resource}`;
    }

    //
    // plural resource
    //
    if (isListSupported || isCreateSupported){
      
      views[pluralResource] = {
        name: pluralResource,
        id: `${providerName}.${componentName.toLowerCase()}.${pluralResource}`,
        'x-cfn-schema-name': schemaName,
        'x-cfn-type-name': schema['x-type-name'],
        'x-identifiers': schema['x-stackql-primary-identifier'],
        'x-type': 'list',
        methods: {},
        sqlVerbs: {
          insert: [],
        },
      };
    }
    
    if (isListSupported){
     
      const sqlliteSelectQueryPlural = generateSelectQuery({
        dmbs: 'sqlite3',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: true
      });

      const postgresSelectQueryPlural = generateSelectQuery({
        dmbs: 'postgres',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: true
      });    

      const configBlock = {
        config: {
          views: {
            select: {
              predicate: 'sqlDialect == "sqlite3"',
              ddl: `${sqlliteSelectQueryPlural}${regionClause}`,
              fallback: {
                predicate: 'sqlDialect == "postgres"',
                ddl: `${postgresSelectQueryPlural}${regionClause}`,
              },
            },
          },
        },
      };
      
      views[pluralResource] = {
        ...views[pluralResource],
        ...configBlock
      };

    }

    if (isCreateSupported) {
      views[pluralResource].methods.create_resource = {
        operation: {
          $ref: "#/paths/~1?Action=CreateResource&Version=2021-09-30/post"
        },
        request: {
          mediaType: "application/x-amz-json-1.0",
          base: `{\n  \"TypeName\": \"${schema['x-type-name']}\"\n}`,
        },
        response: {
          mediaType: "application/json",
          openAPIDocKey: "200"
        }
      };
      views[pluralResource].sqlVerbs.insert.push({
        $ref: `#/components/x-stackQL-resources/${pluralResource}/methods/create_resource`
      });        
    }
    

    //
    // singular resource
    //
    if (isGetSupported || isUpdateSupported || isDeleteSupported) {

      views[resource] = {
        name: resource,
        id: `${providerName}.${componentName.toLowerCase()}.${resource}`,
        'x-cfn-schema-name': schemaName,
        'x-cfn-type-name': schema['x-type-name'],
        'x-identifiers': schema['x-stackql-primary-identifier'],
        'x-type': 'get',
        methods: {},
        sqlVerbs: {
          update: [],
          delete: [],
        },        
      }
    };

    if (isGetSupported){

      // Generate singular resource and view
      const sqlliteSelectQuerySingular = generateSelectQuery({
        dmbs: 'sqlite3',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: false
      });

      const postgresSelectQuerySingular = generateSelectQuery({
        dmbs: 'postgres',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: false
      });    

      const configBlock = {
        config: {
          views: {
            select: {
              predicate: 'sqlDialect == "sqlite3"',
              ddl: `${sqlliteSelectQuerySingular}${regionClause}`,
              fallback: {
                predicate: 'sqlDialect == "postgres"',
                ddl: `${postgresSelectQuerySingular}${regionClause}`,
              },
            },
          },
        },
      };
      
      views[resource] = {
        ...views[resource],
        ...configBlock
      };

    }

      
    if (isUpdateSupported) {
      views[resource].methods.update_resource = {
        operation: {
          $ref: "#/paths/~1?Action=UpdateResource&Version=2021-09-30/post"
        },
        request: {
          mediaType: "application/x-amz-json-1.0",
          base: `{\n  \"TypeName\": \"${schema['x-type-name']}\"\n}`,
        },
        response: {
          mediaType: "application/json",
          openAPIDocKey: "200"
        }          
      };
      views[resource].sqlVerbs.update.push({
        $ref: `#/components/x-stackQL-resources/${resource}/methods/update_resource`
      });
    }

    if (isDeleteSupported) {
      views[resource].methods.delete_resource = {
        operation: {
          $ref: "#/paths/~1?Action=DeleteResource&Version=2021-09-30/post"
        },
        request: {
          mediaType: "application/x-amz-json-1.0",
          base: `{\n  \"TypeName\": \"${schema['x-type-name']}\"\n}`,
        },
        response: {
          mediaType: "application/json",
          openAPIDocKey: "200"
        }          
      };
      views[resource].sqlVerbs.delete.push({
        $ref: `#/components/x-stackQL-resources/${resource}/methods/delete_resource`
      });        
    }

  });

  return views;
}
