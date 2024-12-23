import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import pluralize from 'pluralize';
import indefinite from 'indefinite';
import { exec } from 'child_process';
// import { get } from 'lodash';

//
// update ...
//
const providerName = 'aws';
const awsProviderVer = 'v24.07.00244';
const staticServices = [];
// const staticSelectableResourcesDiff = {
//     cloud_control: 0,
//     cloudhsm: -12,
//     cloudwatch: 0,
//     iam: 0,
//     transfer: -1,
//     route53: 0,
// };  // non selectable resources from static services
// const staticMethodCounts = {
//     cloud_control: 8,
//     cloudhsm: 15,
//     cloudwatch: 1,
//     iam: 23,
//     transfer: 14,
//     route53: 2, 
// }; // method counts from static services

const sqlCodeBlockStart = '```sql';
const jsonCodeBlockStart = '```json';
const yamlCodeBlockStart = '```yaml';
const codeBlockEnd = '```';
const mdCodeAnchor = "`";

// const staticSelectableResourcesDiffTotal = Object.values(staticSelectableResourcesDiff).reduce((a, b) => a + b, 0);
// const staticMethodsCountsTotal = Object.values(staticMethodCounts).reduce((a, b) => a + b, 0);

async function createDocsForService(yamlFilePath) {
    const data = yaml.load(fs.readFileSync(yamlFilePath, 'utf8'));

    const serviceName = path.basename(yamlFilePath, '.yaml');

    if(staticServices.includes(serviceName)) {
        console.log(`Skipping ${serviceName}`);
        return;
    }

    const serviceFolder = path.join(`${providerName}-docs/providers/${providerName}`, serviceName);

    // Create service directory under generated-docs
    if (!fs.existsSync(serviceFolder)) {
        fs.mkdirSync(serviceFolder, { recursive: true });
    }

    let resourcesObj = data.components['x-stackQL-resources'];

    if (!resourcesObj) {
        console.warn(`No resources found in ${yamlFilePath}`);
        return;
    }

    const resources = [];
    for (let resourceName in resourcesObj) {
        let resourceData = resourcesObj[resourceName];

        // Check if 'id' exists in 'resourceData'
        if (!resourceData.id) {
            console.warn(`No 'id' defined for resource: ${resourceName} in service: ${serviceName}`);
            return;
        }

        // Create the markdown content for the resource
        const schemaName = resourceData['x-cfn-schema-name'] || '';
        const methodType = resourceData['x-type'];
        const identifiers = resourceData['x-identifiers'] || [];
        const schema = data.components.schemas[schemaName] || {};
        const componentsSchemas = data.components.schemas;

        resources.push({ name: resourceName, type: methodType, identifiers: identifiers, schemaName, schema, componentsSchemas, resourceData });
    }
	
    // Create index.md for the service
    const serviceIndexPath = path.join(serviceFolder, 'index.md');
    const serviceIndexContent = await createServiceIndexContent(serviceName, resources);
    fs.writeFileSync(serviceIndexPath, serviceIndexContent);

    // Divide resources into two columns
    const halfLength = Math.ceil(resources.length / 2);
    const firstColumn = resources.slice(0, halfLength);
    const secondColumn = resources.slice(halfLength);

    // Create resource subfolders and index.md for each resource
    firstColumn.forEach(async (resource) => {
        const resourceFolder = path.join(serviceFolder, resource.name);
        if (!fs.existsSync(resourceFolder)) {
            fs.mkdirSync(resourceFolder, { recursive: true });
        }

        const resourceIndexPath = path.join(resourceFolder, 'index.md');
        const resourceIndexContent = await createResourceIndexContent(serviceName, resource.name, resource.type, resource.identifiers, resource.schemaName, resource.schema, resource.componentsSchemas, resource.resourceData);
        fs.writeFileSync(resourceIndexPath, resourceIndexContent);
    });

    secondColumn.forEach(async (resource) => {
        const resourceFolder = path.join(serviceFolder, resource.name);
        if (!fs.existsSync(resourceFolder)) {
            fs.mkdirSync(resourceFolder, { recursive: true });
        }

        const resourceIndexPath = path.join(resourceFolder, 'index.md');
        const resourceIndexContent = await createResourceIndexContent(serviceName, resource.name, resource.type, resource.identifiers, resource.schemaName, resource.schema, resource.componentsSchemas, resource.resourceData);
        fs.writeFileSync(resourceIndexPath, resourceIndexContent);
    });

    console.log(`Generated documentation for ${serviceName}`);
}

async function createServiceIndexContent(serviceName, resources) {
    const totalResources = resources.length; // Calculate the total resources

    // Sort resources alphabetically by name
    resources.sort((a, b) => a.name.localeCompare(b.name));

    const halfLength = Math.ceil(totalResources / 2);
    const firstColumnResources = resources.slice(0, halfLength);
    const secondColumnResources = resources.slice(halfLength);

    // Generate the HTML for resource links in the first column
    const firstColumnLinks = generateResourceLinks(serviceName, firstColumnResources);

    // Generate the HTML for resource links in the second column
    const secondColumnLinks = generateResourceLinks(serviceName, secondColumnResources);

    // Create the markdown content for the service index
    // You can customize this content as needed
    return `---
title: ${serviceName}
hide_title: false
hide_table_of_contents: false
keywords:
  - ${serviceName}
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---

The ${serviceName} service documentation.

:::info Service Summary

<div class="row">
<div class="providerDocColumn">
<span>total resources:&nbsp;<b>${totalResources}</b></span><br />
</div>
</div>

:::

## Resources
<div class="row">
<div class="providerDocColumn">
${firstColumnLinks}
</div>
<div class="providerDocColumn">
${secondColumnLinks}
</div>
</div>`;
}

function generateResourceLinks(serviceName, resources) {
    // Generate resource links for the service index
    const resourceLinks = resources.map((resource) => {
        return `<a href="/providers/${providerName}/${serviceName}/${resource.name}/">${resource.name}</a>`;
    });
    return resourceLinks.join('<br />\n');
}

function createDeleteExample(serviceName, resourceName, resourceData, thisSchema, allSchemas) {
    const deleteOperation = resourceData.methods?.delete_resource;
    if (!deleteOperation) {
        return '';
    }

    return `\n## ${mdCodeAnchor}DELETE${mdCodeAnchor} example

${sqlCodeBlockStart}
/*+ delete */
DELETE FROM ${providerName}.${serviceName}.${resourceName}
WHERE data__Identifier = '<${resourceData['x-identifiers'].join('|')}>'
AND region = 'us-east-1';
${codeBlockEnd}
`;
}

function createInsertExample(serviceName, resourceName, resourceData, thisSchema, allSchemas) {
    const createOperation = resourceData.methods?.create_resource;
    if (!createOperation) {
        return '';
    }

    function resolveRef(ref, visitedRefs) {
        const path = ref.replace('#/components/schemas/', '');
        if (visitedRefs.has(path)) {
            console.log(`Cyclic reference detected for ${path}, skipping expansion.`);
            return null; // Return null or some placeholder to avoid infinite recursion
        }
        visitedRefs.add(path);
        return allSchemas[path];
    }
    
    function resolveType(schema, requiredOnly, visitedRefs = new Set()) {
        if (!schema) return null;
    
        if (schema.type) {
            switch (schema.type) {
                case 'string':
                    return 'string';
                case 'integer':
                    return 0;
                case 'boolean':
                    return false;
                case 'array':
                    if (schema.items) {
                        return [resolveType(schema.items.$ref ? resolveRef(schema.items.$ref, visitedRefs) : schema.items, requiredOnly, visitedRefs)];
                    }
                    return [];
                case 'object':
                    if (schema.properties) {
                        let obj = {};
                        Object.keys(schema.properties).forEach(prop => {
                            if(schema['x-read-only-properties'] && schema['x-read-only-properties'].includes(prop)){
                                return null;
                            }
                            if (requiredOnly && schema['x-required-properties'] && !schema['x-required-properties'].includes(prop)) {
                                return null;
                            }
                            obj[prop] = resolveType(schema.properties[prop].$ref ? resolveRef(schema.properties[prop].$ref, visitedRefs) : schema.properties[prop], requiredOnly, visitedRefs);
                        });
                        return obj;
                    }
                    return {};
                default:
                    return null;
            }
        } else if (schema.$ref) {
            return resolveType(resolveRef(schema.$ref, visitedRefs), requiredOnly, visitedRefs);
        }
        return null;
    }

    function getObjectDetails(inputObject, detailType) {
        const keys = Object.keys(inputObject);
        const values = Object.values(inputObject);
        
        switch (detailType) {
            case 'keys':
                return keys;
            case 'values':
                return values;
            default:
                throw new Error('Invalid detail type requested. Use "keys" or "values".');
        }
    }
    
    function templateObjectValues(obj) {
        const templatedObj = JSON.parse(JSON.stringify(obj), (key, value) => {
            if (typeof value === 'string') {
                return `{{ ${key} }}`;
            }
            if (typeof value === 'boolean' || typeof value === 'number') {
                return `{{ ${key} }}`;
            }
            if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'string') {
                return [`{{ ${key}[0] }}`];
            }
            return value;
        });
        return templatedObj
    }

    const templateObject = {
        version: 1,
        name: "stack name",
        description: "stack description",
        providers: [
          "aws"
        ],
        globals: [{
            name: "region",
            value: "{{ vars.AWS_REGION }}"
        }],
        resources: [],
      };

      function transformDataToResource(templateData, resourceName, isRoot = true) {
        if (!templateData) return null;
    
        if (isRoot) {
            // If it's the root object, return a structured resource
            return {
                name: `${pluralize.singular(resourceName)}`,
                props: Object.entries(templateData).map(([key, value]) => ({
                    name: key,
                    value: transformDataToResource(value, resourceName, false)
                }))
            };
        } else if (Array.isArray(templateData)) {
            // If it's an array, transform each element
            return templateData.map(item => transformDataToResource(item, resourceName, false));
        } else if (typeof templateData === 'object' && templateData !== null) {
            // For object values, recursively call transformation for each property
            const transformedObject = {};
            for (const [key, value] of Object.entries(templateData)) {
                transformedObject[key] = transformDataToResource(value, resourceName, false);
            }
            return transformedObject;
        } else {
            // For primitive values, simply return the value
            return templateData;
        }
    };

    templateObject.resources.push(transformDataToResource(templateObjectValues(resolveType(thisSchema, false)), resourceName));

    return `\n## ${mdCodeAnchor}INSERT${mdCodeAnchor} example

Use the following StackQL query and manifest file to create a new <code>${pluralize.singular(resourceName)}</code> resource, using [__${mdCodeAnchor}stack-deploy${mdCodeAnchor}__](https://pypi.org/project/stack-deploy/).

<Tabs
    defaultValue="required"
    values={[
      { label: 'Required Properties', value: 'required', },
      { label: 'All Properties', value: 'all', },
      { label: 'Manifest', value: 'manifest', },
    ]
}>
<TabItem value="required">

${sqlCodeBlockStart}
/*+ create */
INSERT INTO ${providerName}.${serviceName}.${resourceName} (
 ${getObjectDetails(resolveType(thisSchema, true), 'keys').join(",\n ")},
 region
)
SELECT 
'{{ ${getObjectDetails(resolveType(thisSchema, true), 'keys').join(" }}',\n '{{ ")} }}',
'{{ region }}';
${codeBlockEnd}
</TabItem>
<TabItem value="all">

${sqlCodeBlockStart}
/*+ create */
INSERT INTO ${providerName}.${serviceName}.${resourceName} (
 ${getObjectDetails(resolveType(thisSchema, false), 'keys').join(",\n ")},
 region
)
SELECT 
 '{{ ${getObjectDetails(resolveType(thisSchema, false), 'keys').join(" }}',\n '{{ ")} }}',
 '{{ region }}';
${codeBlockEnd}
</TabItem>
<TabItem value="manifest">

${yamlCodeBlockStart}
${yaml.dump(templateObject)}
${codeBlockEnd}
</TabItem>
</Tabs>`;
}

async function createResourceIndexContent(serviceName, resourceName, resourceType, resourceIdentifiers, schemaName, schema, componentsSchemas, resourceData) {
    // Create the markdown content for each resource index
    // resourceType is x-type, one of 'cloud_control' (cloud control), 'native' (native resource), 'view' (SQL view)

    let sqlExampleWhere;
    let sqlExampleListWhere;
    let sqlExampleGetWhere;
    let permissionsHeadingMarkdown ='';
    let permissionsBylineMarkdown = '';
    let permissionsMarkdown = '';
    let hasList = false;
    let hasGet = false;
    let isSelectable = true;
    let sqlVerbsList = [];

    const requiredParamsMap = {
        create_resource: (schema['x-required-properties'] ? schema['x-required-properties'].join(', ') + ', region' : 'region'),
        delete_resource: "data__Identifier, region",
        update_resource: "data__Identifier, data__PatchDocument, region",
    };

    const sqlExampleSelect = `SELECT`;
    const sqlExampleFrom = `FROM ${providerName}.${serviceName}.${resourceName}`;

    const globalServices = ['iam', 'route53', 'cloudfront', 'wafv2', 'shield', 'globalaccelerator'];
    sqlExampleWhere = globalServices.includes(serviceName) ? "" : "WHERE region = 'us-east-1'";
  
    let fields = resourceIdentifiers;

    const singularResourceName = pluralize.singular(resourceName);
    let resourceDescription = `Creates, updates, deletes or gets ${indefinite(singularResourceName, { articleOnly: true })} <code>${singularResourceName}</code> resource or lists <code>${resourceName}</code> in a region`;

    if (resourceName.endsWith('_tags')) {
        const cleanedResourceName = resourceName.replace('_tags', '');
        resourceDescription = `Expands all tag keys and values for <code>${pluralize.plural(cleanedResourceName)}</code> in a region`;
    }

    if(resourceName.endsWith('_list_only')){
        const cleanedResourceName = resourceName.replace('_list_only', '');
        resourceDescription = `Lists <code>${cleanedResourceName}</code> in a region or regions, for all properties use <a href="/providers/aws/serviceName/${cleanedResourceName}/"><code>${cleanedResourceName}</code></a>`;
    }

    async function getSqlVerbsFromStackql(serviceName, resourceName) {
        const command = `./stackql exec --registry='{"url": "file:///mnt/c/LocalGitRepos/stackql/openapi-conversion/aws-cfn-schema-to-openapi", "localDocRoot": "/mnt/c/LocalGitRepos/stackql/openapi-conversion/aws-cfn-schema-to-openapi", "verifyConfig": {"nopVerify": true}}' --output json "show methods in aws.${serviceName}.${resourceName}"`;
    
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error executing command: ${error.message}`);
                    return reject(error);
                }
                if (stderr) {
                    console.error(`Error: ${stderr}`);
                    return reject(new Error(stderr));
                }
    
                try {
                    const methods = JSON.parse(stdout);
                    const sqlVerbsList = methods.map(method => ({
                        sqlVerbName: method.SQLVerb,
                        methodName: method.MethodName,
                        requiredParams: method.RequiredParams
                    }));
                    resolve(sqlVerbsList);
                } catch (parseError) {
                    reject(parseError);
                }
            });
        });
    }    

    if (resourceType === 'view') {
        // isPlural = false;
        fields = schema.properties;
        resourceDescription = schema.description;
        if(schema['x-example-where-clause']){
            sqlExampleWhere = `${schema['x-example-where-clause']};`
        }

        sqlVerbsList.push({
            sqlVerbName: 'select',
            methodName: 'view',
            requiredParams: 'region'
        });        
    }

    if (resourceType === 'native') {
        // isPlural = false;
        resourceData['x-example-where-clause'] ? sqlExampleWhere = `${resourceData['x-example-where-clause']};` : isSelectable = false;
        if(isSelectable){
            fields = componentsSchemas[resourceData['x-cfn-schema-name']].properties;
            resourceDescription = componentsSchemas[resourceData['x-cfn-schema-name']].description;
        } else {
            resourceDescription = resourceData['x-description'];
        }

        if (!resourceDescription) {
            if('x-description' in resourceData){
                resourceDescription = resourceData['x-description'];
            }
        }

        const verbsToPush = await getSqlVerbsFromStackql(serviceName, resourceName);
        verbsToPush.forEach(({ sqlVerbName, methodName, requiredParams }) => {
            sqlVerbsList.push({
                sqlVerbName,
                methodName,
                requiredParams
            });
        });
    }

    if (resourceType === 'cloud_control_view') {

        let viewResourceName = resourceName;
        
        if (resourceName.endsWith('_tags')) {
            viewResourceName = pluralize.plural(resourceName.replace('_tags', ''));
        }
    
        if(resourceName.endsWith('_list_only')){
            viewResourceName = resourceName.replace('_list_only', '');
        }

        // permissions
        permissionsHeadingMarkdown = '## Permissions\n';
        permissionsBylineMarkdown = `For permissions required to operate on the <code>${resourceName}</code> resource, see <a href="/providers/aws/${serviceName}/${viewResourceName}/#permissions"><code>${viewResourceName}</code></a>\n`;

        sqlVerbsList.push({
            sqlVerbName: 'select',
            methodName: 'list_resources',
            requiredParams: 'region'
        });

        hasList = true;
        sqlExampleListWhere = `${sqlExampleWhere};`;

    }

    if (resourceType === 'cloud_control') {

        // permissions
        permissionsHeadingMarkdown = schema?.['x-required-permissions'] ? '## Permissions\n' : '';
        permissionsBylineMarkdown = schema?.['x-required-permissions'] ? `To operate on the <code>${resourceName}</code> resource, the following permissions are required:\n` : '';
    
        permissionsMarkdown = Object.entries(schema?.['x-required-permissions'] ?? {})
        .map(([permissionType, permissions]) => {
          // Define which permission types to include based on the isPlural flag.

            const includedTypes = ['create', 'list', 'delete', 'read', 'update'];

          // Check if the current permissionType is in the includedTypes array.
          if (includedTypes.includes(permissionType)) {
            // update flags
            if (permissionType === 'list') {
                hasList = true;
            }
            if (permissionType === 'read') {
                hasGet = true;
            }
            
            if(!hasList && !hasGet){
                isSelectable = false;
            }

            // If it is, format the permissions as before.
            const sectionTitle = `### ${permissionType.charAt(0).toUpperCase() + permissionType.slice(1)}\n${jsonCodeBlockStart}\n`;
            const permissionsList = permissions.join(",\n");
            const sectionEnd = `\n${codeBlockEnd}\n`;
    
            if (permissions.length === 0) {
              return null;
            }
    
            return `${sectionTitle}${permissionsList}${sectionEnd}`;
          } else {
            // If it's not, return an empty string (or null, which will be filtered out).
            return null;
          }
        })
        // Filter out the null entries resulting from excluded permissionTypes.
        .filter(section => section !== null)
        .join('\n');

        // covers non select ops for cc resources
         sqlVerbsList = Object.entries(resourceData.sqlVerbs).map(([key, value]) => {
            if (value && Array.isArray(value) && value.length > 0 && typeof value[0].$ref == 'string') {
            return {
                sqlVerbName: key,
                methodName: value[0].$ref.split('/').pop(),
                requiredParams: requiredParamsMap[value[0].$ref.split('/').pop()]
            };
        }});

        if(hasList){
            sqlVerbsList.push({
                sqlVerbName: 'select',
                methodName: 'list_resources',
                requiredParams: 'region'
            });
        }
        
        if(hasGet){
            sqlVerbsList.push({
                sqlVerbName: 'select',
                methodName: 'get_resource',
                requiredParams: 'data__Identifier, region'
            });
        }

        const identifierValues = resourceIdentifiers.map(id => `<${id}>`).join('|');
        const identifierClause = `data__Identifier = '${identifierValues}'`;

        sqlExampleListWhere = `${sqlExampleWhere};`;
        globalServices.includes(serviceName) ? sqlExampleGetWhere = `WHERE ${identifierClause};`: sqlExampleGetWhere = `${sqlExampleWhere} AND ${identifierClause};`;

    }
   
    sqlVerbsList = sqlVerbsList.filter(Boolean);

    // if resourceDescription is an empty string or undefined, error out
    if (!resourceDescription) {
        console.error(`Resource description is missing for ${serviceName}.${resourceName}`);
        return;
    }
    
    const sqlExampleListCols = getColumns(fields, true, resourceType === 'native', false);
    const sqlExampleGetCols = getColumns(schema.properties, false, resourceType === 'native', false);
    const sqlExampleGetTagsCols = getColumns(schema.properties, false, resourceType === 'native', true);

    return `---
title: ${resourceName}
hide_title: false
hide_table_of_contents: false
keywords:
  - ${resourceName}
  - ${serviceName}
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

${resourceDescription}

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>${resourceName}</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
${schema.description ? `<tr><td><b>Description</b></td><td>${cleanDescription(schema.description)}</td></tr>` : `<tr><td><b>Description</b></td><td>${resourceName}</td></tr>`}
<tr><td><b>Id</b></td><td><CopyableCode code="${providerName}.${serviceName}.${resourceName}" /></td></tr>
</tbody></table>

## Fields
${isSelectable || hasList || hasGet ? `<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr>${generateFieldsTable(serviceName, resourceName, resourceType, schemaName, schema, componentsSchemas)}</tbody></table>` : '<code>SELECT</code> operation not supported for this resource.'}

## Methods
${generateMethodsTable(serviceName, resourceName, sqlVerbsList)}

${serviceName != 'cloud_control' ? generateSelectExamples(resourceName, hasList, hasGet, sqlExampleSelect, sqlExampleListCols, sqlExampleFrom, sqlExampleListWhere, sqlExampleGetCols, sqlExampleGetTagsCols, sqlExampleGetWhere): ''}
${serviceName != 'cloud_control' ? createInsertExample(serviceName, resourceName, resourceData, schema, componentsSchemas): ''}
${serviceName != 'cloud_control' ? createDeleteExample(serviceName, resourceName, resourceData, schema, componentsSchemas): ''}
${permissionsHeadingMarkdown}
${permissionsBylineMarkdown}
${permissionsMarkdown}
`;}

function getDescFromRef(ref, components) {
    // Assuming ref is a string like '#/components/schemas/Arn'
    const schemaname = ref.split('/').pop();
    let schema = components[schemaname];
    return schema.description;
}

function getTypeFromRef(ref, components) {
    // Assuming ref is a string like '#/components/schemas/Arn'
    const schemaname = ref.split('/').pop();
    let schema = components[schemaname];
    return schema.type;
}

function cleanDescription(description) {
    const htmlPattern = /<p[\s\S]*?>[\s\S]*?<\/p>|<code[\s\S]*?>[\s\S]*?<\/code>|<pre[\s\S]*?>[\s\S]*?<\/pre>|<br\s*\/?>/i;
    if(htmlPattern.test(description)){
        return description
        .replace(/[\r\n]+/g, '<br />')
        .replace(/\t/g, ' ')
        .replace(/\s\s+/g, ' ')
        .replace(/{/g, '&#123;')
        .replace(/}/g, '&#125;')
        .replace(/\[/g, '&#91;')
        .replace(/\]/g, '&#93;')
        .replace(/``(.*?)``/g, '$1')
        .replace(/<br \/>\s+/g, '<br />') 
        .trim();
    };
    return (description || '')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/[\r\n]+/g, '<br />')
        .replace(/\t/g, ' ')
        .replace(/\s\s+/g, ' ')
        .replace(/{/g, '&#123;')
        .replace(/}/g, '&#125;')
        .replace(/\[/g, '&#91;')
        .replace(/\]/g, '&#93;')
        .replace(/``(.*?)``/g, '<code>$1</code>')
        .replace(/<br \/>\s+/g, '<br />') 
        .trim();
}

function toSnakeCase(str) {
    return str.replace(/[\w]([A-Z])/g, (m) => m[0] + "_" + m[1]).toLowerCase();
}

function fixCamelCaseIssues(propertyName) {
    const replacements = {
        DB: "Db",
        ARN: "Arn",
        WAN: "Wan",
        URL: "Url",
        VPC: "Vpc",
        DNS: "Dns",
        IP: "Ip",
        IAM: "Iam",
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
        OAuth: "Oauth",
    };
  
    let updatedPropertyName = propertyName;
  
    for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key, 'g');
        updatedPropertyName = updatedPropertyName.replace(regex, value);
    }
  
    return updatedPropertyName;
}

function generateTableRow(propName, type, descriptionCleaned, isCustom = false) {
    if(isCustom){
        return `<tr><td><CopyableCode code="${propName}" /></td><td><code>${type}</code></td><td>${descriptionCleaned}</td></tr>\n`;
    } else {
        return `<tr><td><CopyableCode code="${toSnakeCase(fixCamelCaseIssues(propName))}" /></td><td><code>${type}</code></td><td>${descriptionCleaned}</td></tr>\n`;
    }
}

function getColumns(properties, isList, isCustom = false, is_tags = false){
    let columns = 'region,';
    if (isList) {
        if(Array.isArray(properties)){
            properties.forEach(propName => {
                if(isCustom){
                    columns += `\n${propName},`;
                } else {
                    columns += `\n${toSnakeCase(fixCamelCaseIssues(propName))},`;
                }
            })
        }
    } else {
        for (let propName in properties) {
            if(isCustom){
                columns += `\n${propName},`;
            } else {
                if(propName === 'Tags' && is_tags){
                    continue;
                }
                columns += `\n${toSnakeCase(fixCamelCaseIssues(propName))},`;
            }
        }
    }

    if(is_tags){
        columns += `\ntag_key,`;
        columns += `\ntag_value,`;
    }

    columns = columns.slice(0, -1);
    return columns;
}

function generateFieldsTable(serviceName, resourceName, resourceType, schemaName, schema, componentsSchemas) {
    
    let isTags = false;
    if(resourceName.endsWith('_tags')){
        isTags = true;
    }

    let fieldsTable = '';
    console.log(`Generating fields table for ${serviceName}.${resourceName}`);
    for (let propName in schema.properties) {

        if(isTags && propName === 'Tags'){
            continue;
        }

        let propDesc = '';
        let propType = '';
        const prop = schema.properties[propName];

        if('description' in prop){
            propDesc = cleanDescription(prop.description);
        }
        if('type' in prop){
            propType = prop.type;
        }
        if (prop.hasOwnProperty('$ref')) {
            !propType ? propType = getTypeFromRef(prop['$ref'], componentsSchemas) : null;
            !propDesc ? propDesc = cleanDescription(getDescFromRef(prop['$ref'], componentsSchemas)) : null;
        } else if (prop.hasOwnProperty('allOf')) {
            // for custom resources
            let allOfArray = prop.allOf;
            let combinedObject = {};
            allOfArray.forEach(item => {
              Object.assign(combinedObject, item);
            });
            !propType ? propType = combinedObject.type : null;
            !propDesc ? propDesc = combinedObject.description : null;
            if(combinedObject.hasOwnProperty('$ref')){
                !propType ? propType = getTypeFromRef(combinedObject['$ref'], componentsSchemas) : null;
                !propDesc ? propDesc = cleanDescription(getDescFromRef(combinedObject['$ref'], componentsSchemas)) : null;
            }
        }
        fieldsTable += generateTableRow(propName, propType, propDesc);
    }
    
    if(isTags){
        fieldsTable += generateTableRow('tag_key', 'string', 'Tag key.');
        fieldsTable += generateTableRow('tag_value', 'string', 'Tag value.');
    }

    fieldsTable += generateTableRow('region', 'string', 'AWS region.');

    return fieldsTable;
}

function generateSelectExamples(resourceName, hasList, hasGet, sqlExampleSelect, sqlExampleListCols, sqlExampleFrom, sqlExampleListWhere, sqlExampleGetCols, sqlExampleGetTagsCols, sqlExampleGetWhere){
    let returnString = '';
    if(hasList || hasGet){
        returnString = `## ${mdCodeAnchor}SELECT${mdCodeAnchor} examples\n`;
    } else {
        return returnString;
    }

    if(hasList){
        // let listDesc = `Gets all <code>${pluralize.plural(resourceName)}</code> in a region.`;
        let listDesc = `Gets all <code>${resourceName}</code> in a region.`;

        if(resourceName.endsWith('_list_only')){
            // listDesc = `Lists all <code>${pluralize.plural(resourceName)}</code> in a region.`;
            listDesc = `Lists all <code>${resourceName.replace('_list_only','')}</code> in a region.`;
            returnString += `${listDesc}\n${sqlCodeBlockStart}\n${sqlExampleSelect}\n${sqlExampleListCols}\n${sqlExampleFrom}\n${sqlExampleListWhere}\n${codeBlockEnd}`;
        } else if(resourceName.endsWith('_tags')){
            listDesc = `Expands tags for all <code>${pluralize.plural(resourceName.replace('_tags',''))}</code> in a region.`;
            returnString += `${listDesc}\n${sqlCodeBlockStart}\n${sqlExampleSelect}\n${sqlExampleGetTagsCols}\n${sqlExampleFrom}\n${sqlExampleListWhere}\n${codeBlockEnd}`;
        } else {
            returnString += `${listDesc}\n${sqlCodeBlockStart}\n${sqlExampleSelect}\n${sqlExampleGetCols}\n${sqlExampleFrom}\n${sqlExampleListWhere}\n${codeBlockEnd}`;
        }
    } 

    if(hasGet){
        const singularResourceName = pluralize.singular(resourceName);
        // const getDesc = `Gets all properties from ${indefinite(singularResourceName, { articleOnly: true })} <code>${singularResourceName}</code>.`;
        const getDesc = `Gets all properties from an individual <code>${singularResourceName}</code>.`;
        returnString += `\n${getDesc}\n${sqlCodeBlockStart}\n${sqlExampleSelect}\n${sqlExampleGetCols}\n${sqlExampleFrom}\n${sqlExampleGetWhere}\n${codeBlockEnd}`;
    }

    return returnString;
}

function generateMethodsTable(serviceName, resourceName, sqlVerbsList) {
    
    let html = `
<table><tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>`;

    sqlVerbsList.forEach(item => {
        html += `
  <tr>
    <td><CopyableCode code="${item.methodName}" /></td>
    <td><code>${item.sqlVerbName.toUpperCase()}</code></td>
    <td><CopyableCode code="${item.requiredParams}" /></td>
  </tr>`;
    });

    html += `
</tbody></table>`;

    return html;
}

function clearMdDocsDir(directory = `${providerName}-docs/providers/${providerName}`) {
    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((file) => {
            const currentPath = path.join(directory, file);
            if (fs.lstatSync(currentPath).isDirectory()) {
                // Skip directories listed in staticServices
                if (staticServices.includes(file)) {
                    console.log("Skipping directory:", currentPath);
                    return; // Skip this directory and its contents
                }
                // Recurse if it's a directory and not in staticServices
                clearMdDocsDir(currentPath);
                // After recursion, check if the directory is empty before attempting to remove it
                if (fs.readdirSync(currentPath).length === 0) {
                    fs.rmdirSync(currentPath); // Remove the directory once it's empty
                }
            } else {
                // Check if the file is 'stackql-provider-registry.mdx' and skip if true
                if (file === 'stackql-provider-registry.mdx') {
                    console.log("Skipping file:", currentPath);
                    return;
                }
                // Delete the file if it's not a directory and not the MDX file
                fs.unlinkSync(currentPath);
            }
        });
    } else {
        console.log("Directory not found:", directory);
    }
}

function countResourceDirectories(serviceDir) {
    return fs.readdirSync(serviceDir, { withFileTypes: true })
             .filter(dirent => dirent.isDirectory()).length;
}

//
// Main
//

// delete aws-docs/index.md if it exists
fs.existsSync(`${providerName}-docs/index.md`) && fs.unlinkSync(`${providerName}-docs/index.md`);

// clean the MdDocs directory (less static service docs)
clearMdDocsDir();

// init provider index
let servicesForIndex = [];

// Static header content
const headerContent1 = fs.readFileSync('lib/utils/headerContent1.txt', 'utf8');
const headerContent2 = fs.readFileSync('lib/utils/headerContent2.txt', 'utf8');

// Initialize counters for services and resources
let totalServicesCount = 0;
let totalResourcesCount = 0;

//
// Iterate over each yaml file in the output directory
// and generate documentation for each service
//
fs.readdirSync(`src/${providerName}/v00.00.00000/services`).forEach(async file => {
if (path.extname(file) === '.yaml') {
    const serviceName = path.basename(file, '.yaml');
    servicesForIndex.push(serviceName);
    totalServicesCount++; // Increment service counter
    await createDocsForService(path.join(`src/${providerName}/v00.00.00000/services`, file));
}
});

//
// get data for provider index
//

// add non cloud control services
servicesForIndex = servicesForIndex.concat(staticServices);

// make sure servicesForIndex is unique
servicesForIndex = [...new Set(servicesForIndex)];

// add services to index
servicesForIndex.sort();

// Splitting services into two columns
const half = Math.ceil(servicesForIndex.length / 2);
const firstColumnServices = servicesForIndex.slice(0, half);
const secondColumnServices = servicesForIndex.slice(half);

// Function to convert services to markdown links
function servicesToMarkdown(servicesList) {
    return servicesList.map(service => `<a href="/providers/${providerName}/${service}/">${service}</a><br />`).join('\n');
}


// fs.readdirSync(`${providerName}-docs/providers/${providerName}`).forEach(serviceName => {
//     const serviceDirPath = path.join(`${providerName}-docs/providers/${providerName}`, serviceName);
//     console.log(`Checking service directory: ${serviceDirPath}`); // Debug statement
//     if (fs.statSync(serviceDirPath).isDirectory()) {
//         const resourceCount = countResourceDirectories(serviceDirPath);
//         console.log(`Resource count for ${serviceName}: ${resourceCount}`); // Debug statement
//         totalResourcesCount += resourceCount; // Add the resource count to the total
//     }
// });

async function getResourcesFromStackql(serviceName) {
    const command = `./stackql exec --registry='{"url": "file:///mnt/c/LocalGitRepos/stackql/openapi-conversion/aws-cfn-schema-to-openapi", "localDocRoot": "/mnt/c/LocalGitRepos/stackql/openapi-conversion/aws-cfn-schema-to-openapi", "verifyConfig": {"nopVerify": true}}' --output json "show resources in aws.${serviceName}"`;

    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${error.message}`);
                return reject(error);
            }
            if (stderr) {
                console.error(`Error: ${stderr}`);
                return reject(new Error(stderr));
            }

            try {
                const resourcesLength = JSON.parse(stdout).length;
                resolve(resourcesLength);
            } catch (parseError) {
                reject(parseError);
            }
        });
    });
}

for(const service in servicesForIndex){
    const resourceCount = await getResourcesFromStackql(servicesForIndex[service]);
    console.log(`Resource count for ${servicesForIndex[service]}: ${resourceCount}`); // Debug statement
    totalResourcesCount += resourceCount; // Add the resource count to the total
}


// Create the content for the index file
const indexContent = `${headerContent1}

:::info Provider Summary (${awsProviderVer})

<div class="row">
<div class="providerDocColumn">
<span>total services:&nbsp;<b>${totalServicesCount}</b></span><br />
<span>total resources:&nbsp;<b>${totalResourcesCount}</b></span><br />
</div>
</div>

:::

${headerContent2}

## Services
<div class="row">
<div class="providerDocColumn">
${servicesToMarkdown(firstColumnServices)}
</div>
<div class="providerDocColumn">
${servicesToMarkdown(secondColumnServices)}
</div>
</div>
`;

// Write the index file
const indexPath = `${providerName}-docs/index.md`;
fs.writeFileSync(indexPath, indexContent);

console.log(`Index file created at ${indexPath}`);
