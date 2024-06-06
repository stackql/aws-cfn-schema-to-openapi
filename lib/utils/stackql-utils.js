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
    const isListSupported = schema['x-required-permissions']['list'] && schema['x-required-permissions']['list'].length > 0 ? true : false;
    const isGetSupported = schema['x-required-permissions']['read'] && schema['x-required-permissions']['read'].length > 0 ? true : false;
    const isCreateSupported = schema['x-required-permissions']['create'] && schema['x-required-permissions']['create'].length > 0 ? true : false;
    const isUpdateSupported = schema['x-required-permissions']['update'] && schema['x-required-permissions']['update'].length > 0 ? true : false;
    const isDeleteSupported = schema['x-required-permissions']['delete'] && schema['x-required-permissions']['delete'].length > 0 ? true : false;
    
    const pluralResource = pluralize(resource);

    // if(['registry', 'list', 'stream'].includes(resource)){
    //   resource = `${componentName.toLowerCase()}_${resource}`;
    // }

    views[pluralResource] = {
      name: pluralResource,
      id: `${providerName}.${componentName.toLowerCase()}.${pluralResource}`,
      'x-cfn-schema-name': schemaName,
      'x-cfn-type-name': schema['x-type-name'],
      'x-identifiers': schema['x-stackql-primary-identifier'],
      'x-type': 'cloud_control',
      methods: {},
      sqlVerbs: {
        insert: [],
        delete: [],
        update: [],
      },
    };
    
    if (isCreateSupported) {
        
      // create faux schema
      openApiSpec.components.schemas = {
        ...openApiSpec.components.schemas,
        [`Create${schemaName}Request`]: {
          properties: {
            ClientToken: { type: 'string' },
            RoleArn: { type: 'string' },
            TypeName: { type: 'string' },
            TypeVersionId: { type: 'string' },
            DesiredState: {
              type: 'object',
              properties: {},
              'x-stackQL-stringOnly': true
            },
          },
          title: `Create${schemaName}Request`,
          type: 'object',
          required: []
        }
      };

      // add properties to Create${schemaName}Request from schema
      for (const propertyName in schema.properties) {
        openApiSpec.components.schemas[`Create${schemaName}Request`].properties.DesiredState.properties[propertyName] = schema.properties[propertyName];
      }

      // create faux path
      const pathKey = `/?Action=CreateResource&Version=2021-09-30&__${schemaName}&__detailTransformed=true`;

      openApiSpec.paths = {
        ...openApiSpec.paths,
        [pathKey]: {
          parameters: [
            { $ref: '#/components/parameters/X-Amz-Content-Sha256' },
            { $ref: '#/components/parameters/X-Amz-Date' },
            { $ref: '#/components/parameters/X-Amz-Algorithm' },
            { $ref: '#/components/parameters/X-Amz-Credential' },
            { $ref: '#/components/parameters/X-Amz-Security-Token' },
            { $ref: '#/components/parameters/X-Amz-Signature' },
            { $ref: '#/components/parameters/X-Amz-SignedHeaders' }
          ],
          post: {
            operationId: `Create${schemaName}`,
            parameters: [
              {
                description: "Action Header",
                in: "header",
                name: "X-Amz-Target",
                required: false,
                schema: {
                  default: `CloudApiService.CreateResource`,
                  enum: [`CloudApiService.CreateResource`],
                  type: "string"
                }
              },
              {
                in: "header",
                name: "Content-Type",
                required: false,
                schema: {
                  default: "application/x-amz-json-1.0",
                  enum: ["application/x-amz-json-1.0"],
                  type: "string"
                }
              }
            ],
            requestBody: {
              content: {
                "application/x-amz-json-1.0": {
                  schema: { $ref: `#/components/schemas/Create${schemaName}Request` }
                }
              },
              required: true
            },
            responses: {
              '200': {
                content: {
                  "application/json": {
                    schema: { $ref: '#/components/x-cloud-control-schemas/ProgressEvent' }
                  }
                },
                description: "Success"
              }
            }
          }
        }
      };

      // update x-stackQL-resources
      views[pluralResource].methods.create_resource = {
        config: {
          requestBodyTranslate: {
            algorithm: "naive_DesiredState"
          },
        },
        operation: {
          $ref: `#/paths/~1?Action=CreateResource&Version=2021-09-30&__${schemaName}&__detailTransformed=true/post`
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

    if (isUpdateSupported) {
      views[pluralResource].methods.update_resource = {
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
      views[pluralResource].sqlVerbs.update.push({
        $ref: `#/components/x-stackQL-resources/${pluralResource}/methods/update_resource`
      });
    }

    if (isDeleteSupported) {
      views[pluralResource].methods.delete_resource = {
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
      views[pluralResource].sqlVerbs.delete.push({
        $ref: `#/components/x-stackQL-resources/${pluralResource}/methods/delete_resource`
      });        
    }


    //
    // setup view queries
    //
    let sqlliteSelectQueryPlural;
    let postgresSelectQueryPlural;
    let sqlliteSelectQuerySingular;
    let postgresSelectQuerySingular;

    if (isListSupported){
     
      sqlliteSelectQueryPlural = generateSelectQuery({
        dmbs: 'sqlite3',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: true
      });

      postgresSelectQueryPlural = generateSelectQuery({
        dmbs: 'postgres',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: true
      });    

    }

    if (isGetSupported){

      sqlliteSelectQuerySingular = generateSelectQuery({
        dmbs: 'sqlite3',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: false
      });

      postgresSelectQuerySingular = generateSelectQuery({
        dmbs: 'postgres',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: false
      });    

    }

    //
    // generate config block
    //

    if (isListSupported && isGetSupported){

      const configBlock = {
        config: {
          views: {
            select: {
              predicate: 'sqlDialect == "sqlite3" && requiredParams == [ data__Identifier ]',
              ddl: `${sqlliteSelectQuerySingular}${regionClause}`,
              fallback: {
                predicate: 'sqlDialect == "sqlite3"',
                ddl: `${sqlliteSelectQueryPlural}${regionClause}`,
                fallback: {
                  predicate: 'sqlDialect == "postgres" && requiredParams == [ data__Identifier ]',
                  ddl: `${postgresSelectQuerySingular}${regionClause}`,
                  fallback: {
                    predicate: 'sqlDialect == "postgres"',
                    ddl: `${postgresSelectQueryPlural}${regionClause}`,
                  }
                }
              }
            },
          },
        },
      };
      
      views[pluralResource] = {
        ...views[pluralResource],
        ...configBlock
      };      
    
    } else if(isListSupported){

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

    } else if(isGetSupported){

      const configBlock = {
        config: {
          views: {
            select: {
              predicate: 'sqlDialect == "sqlite3" && requiredParams == [ data__Identifier ]',
              ddl: `${sqlliteSelectQuerySingular}${regionClause}`,
              fallback: {
                predicate: 'sqlDialect == "postgres" && requiredParams == [ data__Identifier ]',
                ddl: `${postgresSelectQuerySingular}${regionClause}`,
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
      
  });

  return views;
}
