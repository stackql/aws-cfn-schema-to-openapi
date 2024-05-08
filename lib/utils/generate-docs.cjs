const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const pluralize = require('pluralize');


//
// update ...
//
const providerName = 'aws';
const awsProviderVer = 'v24.05.00228';
const staticServices = [
    'cloud_control', 
    'cloudhsm',
    'cloudwatch_api',
    'ec2_api', 
    'iam_api', 
    's3_api',
    'transfer_api',
  ];
const staticSelectableResourcesDiff = {
    cloud_control: 0,
    cloudhsm: -12,
    cloudwatch_api: 0,
    ec2_api: -71,
    iam_api: -18,
    s3_api: -7,
    transfer_api: 0,
};  // non selectable resources from static services
const staticMethodCounts = {
    cloud_control: 8,
    cloudhsm: 15,
    cloudwatch_api: 1,
    ec2_api: 523,
    iam_api: 156,
    s3_api: 93,
    transfer_api: 15,
}; // method counts from static services

const codeBlockStart = '```sql';
const jsonCodeBlockStart = '```json';
const codeBlockEnd = '```';
const mdCodeAnchor = "`";

const staticSelectableResourcesDiffTotal = Object.values(staticSelectableResourcesDiff).reduce((a, b) => a + b, 0);
const staticMethodsCountsTotal = Object.values(staticMethodCounts).reduce((a, b) => a + b, 0);

function createDocsForService(yamlFilePath) {
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
        const schemaName = resourceData['x-cfn-schema-name'];
        const methodType = resourceData['x-type'];
        const identifiers = resourceData['x-identifiers'] || [];
        const schema = data.components.schemas[schemaName];
        const componentsSchemas = data.components.schemas;
        if (!schema || !schema.properties) {
            console.warn(`No properties defined for schema: ${schemaName} in service: ${serviceName}`);
            return;
        }

        resources.push({ name: resourceName, type: methodType, identifiers: identifiers, schemaName, schema, componentsSchemas, resourceData });
    }
	
    // Create index.md for the service
    const serviceIndexPath = path.join(serviceFolder, 'index.md');
    const serviceIndexContent = createServiceIndexContent(serviceName, resources);
    fs.writeFileSync(serviceIndexPath, serviceIndexContent);

    // Divide resources into two columns
    const halfLength = Math.ceil(resources.length / 2);
    const firstColumn = resources.slice(0, halfLength);
    const secondColumn = resources.slice(halfLength);

    // Create resource subfolders and index.md for each resource
    firstColumn.forEach((resource) => {
        const resourceFolder = path.join(serviceFolder, resource.name);
        if (!fs.existsSync(resourceFolder)) {
            fs.mkdirSync(resourceFolder, { recursive: true });
        }

        const resourceIndexPath = path.join(resourceFolder, 'index.md');
        const resourceIndexContent = createResourceIndexContent(serviceName, resource.name, resource.type, resource.identifiers, resource.schemaName, resource.schema, resource.componentsSchemas, resource.resourceData);
        fs.writeFileSync(resourceIndexPath, resourceIndexContent);
    });

    secondColumn.forEach((resource) => {
        const resourceFolder = path.join(serviceFolder, resource.name);
        if (!fs.existsSync(resourceFolder)) {
            fs.mkdirSync(resourceFolder, { recursive: true });
        }

        const resourceIndexPath = path.join(resourceFolder, 'index.md');
        const resourceIndexContent = createResourceIndexContent(serviceName, resource.name, resource.type, resource.identifiers, resource.schemaName, resource.schema, resource.componentsSchemas, resource.resourceData);
        fs.writeFileSync(resourceIndexPath, resourceIndexContent);
    });

    console.log(`Generated documentation for ${serviceName}`);
}

function createServiceIndexContent(serviceName, resources) {
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
<span>total selectable resources:&nbsp;<b>${totalResources}</b></span><br />
<span>total methods:&nbsp;<b>${totalResources}</b></span><br />
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

function resolveSchema(ref, allSchemas) {
    const refPath = ref.replace('#/components/schemas/', '');
    if (!allSchemas || typeof allSchemas !== 'object') {
        console.error('Invalid or undefined allSchemas object:', allSchemas);
        throw new Error('Invalid schemas object');
    }
    if (!allSchemas[refPath]) {
        console.error(`Schema not found for reference: ${ref}`, Object.keys(allSchemas));
        throw new Error(`Schema not found for reference: ${ref}`);
    }
    return allSchemas[refPath];
}


function formatSchemaValue(schema, allSchemas) {
    switch (schema.type) {
        case 'string':
            return '"string"';
        case 'integer':
            return 'integer';
        case 'boolean':
            return 'true';
        case 'array':
            if (schema.items) {
                if (schema.items.$ref) {
                    const itemSchema = resolveSchema(schema.items.$ref, allSchemas);
                    return `[${formatSchemaValue(itemSchema, allSchemas)}]`;
                } else {
                    return `[${formatSchemaValue(schema.items, allSchemas)}]`;
                }
            }
            return '[]';
        case 'object':
            if (schema.properties) {
                return `{${Object.entries(schema.properties).map(([key, prop]) => {
                    return `"${key}": ${formatSchemaValue(prop, allSchemas)}`;
                }).join(', ')}}`;
            }
            return '{}';
        default:
            return 'null';
    }
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

    return `\n## INSERT Example

<Tabs
    defaultValue="all"
    values={[
      { label: 'All Properties', value: 'all', },
      { label: 'Required Only', value: 'required', },
    ]
}>
<TabItem value="all">

${codeBlockStart}
--required properties only
INSERT INTO ${providerName}.${serviceName}.${resourceName} (data__DesiredState, region)
SELECT 
${JSON.stringify(resolveType(thisSchema, false), null, 1)},
'us-east-1';
${codeBlockEnd}\n

</TabItem>
<TabItem value="required">

${codeBlockStart}
--all properties
INSERT INTO ${providerName}.${serviceName}.${resourceName} (data__DesiredState, region)
SELECT 
${JSON.stringify(resolveType(thisSchema, true), null, 1)},
'us-east-1';
${codeBlockEnd}\n

</TabItem>
</Tabs>`;
}

function createResourceIndexContent(serviceName, resourceName, resourceType, resourceIdentifiers, schemaName, schema, componentsSchemas, resourceData) {
    // Create the markdown content for each resource index
    let sqlVerbsList = [];

    const requiredParamsMap = {
        create_resource: "data__DesiredState, region",
        delete_resource: "data__Identifier, region",
        update_resource: "data__Identifier, data__PatchDocument, region",
    };

    if (resourceType != 'custom_list') {
         sqlVerbsList = Object.entries(resourceData.sqlVerbs).map(([key, value]) => {
            if (value && Array.isArray(value) && value.length > 0 && typeof value[0].$ref == 'string') {
            return {
                sqlVerbName: key,
                methodName: value[0].$ref.split('/').pop(),
                requiredParams: requiredParamsMap[value[0].$ref.split('/').pop()]
            };
        }});
    } else {
        sqlVerbsList.push({
            sqlVerbName: 'select',
            methodName: 'view',
            requiredParams: 'region'
        });        
    }

    if(resourceType === 'get') {
        sqlVerbsList.push({
            sqlVerbName: 'select',
            methodName: 'get_resource',
            requiredParams: 'data__Identifier, region'
        });
    }

    if(resourceType === 'list') {
        sqlVerbsList.push({
            sqlVerbName: 'select',
            methodName: 'list_resource',
            requiredParams: 'region'
        });
    }
    
    sqlVerbsList = sqlVerbsList.filter(Boolean);

    const sqlExampleSelect = `SELECT`;
    const sqlExampleFrom = `FROM ${providerName}.${serviceName}.${resourceName}`;
    let sqlExampleWhere;
    const globalServices = ['iam', 'route53', 'cloudfront', 'wafv2', 'shield', 'globalaccelerator'];
    sqlExampleWhere = globalServices.includes(serviceName) ? "" : "WHERE region = 'us-east-1'";
  
    let isPlural = true;
    let fields = resourceIdentifiers;
    let resourceDescription;

    if(resourceType === 'list') {
        resourceDescription = `Used to retrieve a list of <code>${resourceName}</code> in a region or create a <code>${resourceName}</code> resource, use <code>${pluralize.singular(resourceName)}</code> to operate on an individual resource.`;
    }

    if(resourceType === 'get') {
        isPlural = false;
        fields = schema.properties;
        resourceDescription = `Gets or operates on an individual <code>${resourceName}</code> resource, use <code>${pluralize.plural(resourceName)}</code> to retrieve a list of resources or to create a resource.`;
        const identifierValues = resourceIdentifiers.map(id => `<${id}>`).join('|');
        sqlExampleWhere = `WHERE data__Identifier = '${identifierValues}';`
    }

    if(resourceType === 'custom_list'){
        isPlural = false;
        fields = schema.properties;
        resourceDescription = schema.description;
        if(schema['x-example-where-clause']){
            sqlExampleWhere = `${schema['x-example-where-clause']};`
        }
    }

    // if resourceDescription is an empty string or undefined, error out
    if (!resourceDescription) {
        console.error(`Resource description is missing for ${serviceName}.${resourceName}`);
        return;
    }
    
    const sqlExampleCols = getColumns(fields, isPlural);

    const permissionsHeadingMarkdown = schema?.['x-required-permissions'] ? '## Permissions\n' : '';
    const permissionsBylineMarkdown = schema?.['x-required-permissions'] ? `To operate on the <code>${resourceName}</code> resource, the following permissions are required:\n` : '';

    const permissionsMarkdown = Object.entries(schema?.['x-required-permissions'] ?? {})
    .map(([permissionType, permissions]) => {
      // Define which permission types to include based on the isPlural flag.
      const includedTypes = isPlural ? ['create', 'list'] : ['read', 'update', 'delete'];
  
      // Check if the current permissionType is in the includedTypes array.
      if (includedTypes.includes(permissionType)) {
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
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
${generateFieldsTable(fields, componentsSchemas, schemaName, isPlural)}
</tbody></table>

## Methods
${generateMethodsTable(serviceName, resourceName, sqlVerbsList)}

## ${mdCodeAnchor}SELECT${mdCodeAnchor} Example
${codeBlockStart}
${sqlExampleSelect}
${sqlExampleCols}
${sqlExampleFrom}
${sqlExampleWhere}
${codeBlockEnd}
${createInsertExample(serviceName, resourceName, resourceData, schema, componentsSchemas)}
${permissionsHeadingMarkdown}
${permissionsBylineMarkdown}
${permissionsMarkdown}
`;
}

function getTypeFromRef(ref, components) {
    // Assuming ref is a string like '#/components/schemas/Arn'
    const schemaname = ref.split('/').pop();
    let schema = components[schemaname];
    return schema.type;
}

function cleanDescription(description) {
    return (description || '')
        .replace(/\n/g, '<br/>')
        .replace(/\//g, '&#x2F;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/{/g, '&#123;')
        .replace(/}/g, '&#125;')
        .replace(/\[/g, '&#91;')
        .replace(/\]/g, '&#93;');
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

function generateTableRow(propName, type, descriptionCleaned) {
    return `<tr><td><CopyableCode code="${toSnakeCase(fixCamelCaseIssues(propName))}" /></td><td><code>${type}</code></td><td>${descriptionCleaned}</td></tr>\n`;
}


function getColumns(properties, isPlural){
    let columns = 'region,';
    if (isPlural) {
        properties.forEach(propName => {
            columns += `\n${toSnakeCase(fixCamelCaseIssues(propName))},`;
        })
    } else {
        for (let propName in properties) {
            columns += `\n${toSnakeCase(fixCamelCaseIssues(propName))},`;
        }
    }
    columns = columns.slice(0, -1);
    return columns;
}

function generateFieldsTable(properties, componentsSchemas, schemaName, isPlural) {
    let fieldsTable = '';
    
    if (isPlural) {
        // 'properties' is an array of property names, so look up details in 'components'
        properties.forEach(propName => {
            let propDetails;
            // if propName has a /, it's a nested property, grab the last token as the propName
            if (propName.includes('/')) {
                const lastToken = propName.split('/').pop();
                const firstToken = propName.split('/')[0];
                const ref = componentsSchemas[schemaName]['properties'][firstToken]['$ref'].split('/').pop();
                propDetails = componentsSchemas[ref]['properties'][lastToken] || { type: 'string', description: ''};
                console.log(propDetails);
            } else {
                // Assuming 'components' has a 'schemas' object with details for each property
                propDetails = componentsSchemas[schemaName]['properties'][propName];
            }
            const type = propDetails.type;
            const descriptionCleaned = cleanDescription(propDetails.description);
            fieldsTable += generateTableRow(propName, type, descriptionCleaned);
        });
    } else {
        // 'properties' is an object with property details
        for (let propName in properties) {
            const prop = properties[propName];
            let type = prop.type;
            if (prop.hasOwnProperty('$ref')) {
                type = getTypeFromRef(prop['$ref'], componentsSchemas);
            }
            const descriptionCleaned = cleanDescription(prop.description);
            fieldsTable += generateTableRow(propName, type, descriptionCleaned);
        }
    }
    
    fieldsTable += generateTableRow('region', 'string', 'AWS region.');

    return fieldsTable;
}

function generateMethodsTable(serviceName, resourceName, sqlVerbsList) {
    
    // console.log(serviceName);
    // console.log(resourceName);
    // console.log(sqlVerbsList);

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
fs.readdirSync(`src/${providerName}/v00.00.00000/services`).forEach(file => {
if (path.extname(file) === '.yaml') {
    const serviceName = path.basename(file, '.yaml');
    servicesForIndex.push(serviceName);
    totalServicesCount++; // Increment service counter
    createDocsForService(path.join(`src/${providerName}/v00.00.00000/services`, file));
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

fs.readdirSync(`${providerName}-docs/providers/${providerName}`).forEach(serviceName => {
    // Count the number of resource subdirectories for this service
    const serviceDirPath = path.join(`${providerName}-docs/providers/${providerName}`, serviceName);
    const resourceCount = countResourceDirectories(serviceDirPath);
    totalResourcesCount += resourceCount; // Add the resource count to the total
});

// Create the content for the index file
const indexContent = `${headerContent1}

:::info Provider Summary (${awsProviderVer})

<div class="row">
<div class="providerDocColumn">
<span>total services:&nbsp;<b>${totalServicesCount.toLocaleString()}</b></span><br />
<span>total methods:&nbsp;<b>${(((totalResourcesCount - staticServices.length) * 3) + staticMethodsCountsTotal).toLocaleString()}</b></span><br />
</div>
<div class="providerDocColumn">
<span>total resources:&nbsp;<b>${totalResourcesCount.toLocaleString()}</b></span><br />
<span>total selectable resources:&nbsp;<b>${(totalResourcesCount + staticSelectableResourcesDiffTotal).toLocaleString()}</b></span><br />
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
