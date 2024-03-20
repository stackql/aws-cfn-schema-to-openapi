const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const providerName = 'awscc';

const awsProviderVer = 'v24.03.00214';
const staticSelectableResourcesDiff = {
    // ec2: -71,
    cloud_control: 0,
    // s3: -7,
    // iam: -18,
};

const staticMethodsDiff = {
    // ec2: 282,
    cloud_control: 4,
    // s3: 54,
    // iam: 94,
};

const codeBlockStart = '```sql';
const jsonCodeBlockStart = '```json';
const codeBlockEnd = '```';

const staticSelectableResourcesDiffTotal = Object.values(staticSelectableResourcesDiff).reduce((a, b) => a + b, 0);
const staticMethodsDiffTotal = Object.values(staticMethodsDiff).reduce((a, b) => a + b, 0);

function createDocsForService(yamlFilePath) {
    const data = yaml.load(fs.readFileSync(yamlFilePath, 'utf8'));

    const serviceName = path.basename(yamlFilePath, '.yaml');

    if ([
        // 'ec2', 
        // 's3', 
        // 'iam', 
        'cloud_control'
    ].includes(serviceName)) {
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

        resources.push({ name: resourceName, type: methodType, identifiers: identifiers, schemaName, schema, componentsSchemas });
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
        const resourceIndexContent = createResourceIndexContent(serviceName, resource.name, resource.type, resource.identifiers, resource.schemaName, resource.schema, resource.componentsSchemas);
        fs.writeFileSync(resourceIndexPath, resourceIndexContent);
    });

    secondColumn.forEach((resource) => {
        const resourceFolder = path.join(serviceFolder, resource.name);
        if (!fs.existsSync(resourceFolder)) {
            fs.mkdirSync(resourceFolder, { recursive: true });
        }

        const resourceIndexPath = path.join(resourceFolder, 'index.md');
        const resourceIndexContent = createResourceIndexContent(serviceName, resource.name, resource.type, resource.identifiers, resource.schemaName, resource.schema, resource.componentsSchemas);
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

function createResourceIndexContent(serviceName, resourceName, resourceType, resourceIdentifiers, schemaName, schema, componentsSchemas) {
    // Create the markdown content for each resource index
    
    let resourceDescription = `Retrieves a list of <code>${resourceName}</code> in a region`;
    const sqlExampleSelect = `SELECT`;
    const sqlExampleFrom = `FROM ${providerName}.${serviceName}.${resourceName}`;
    let sqlExampleWhere;

    const globalServices = ['iam', 'route53', 'cloudfront', 'wafv2', 'shield', 'globalaccelerator'];
    sqlExampleWhere = globalServices.includes(serviceName) ? "" : "WHERE region = 'us-east-1'";
  
    let isPlural = true;
    let fields = resourceIdentifiers;

    if(resourceType === 'custom_list'){
        isPlural = false;
        fields = schema.properties;
        resourceDescription = schema.description;
        if(schema['x-addtl-where-clause']){
            sqlExampleWhere += `${schema['x-addtl-where-clause']}`
        }
    }

    if(resourceType === 'get') {
        isPlural = false;
        fields = schema.properties;
        resourceDescription = `Gets an individual <code>${resourceName}</code> resource`;
        
        const identifierValues = resourceIdentifiers.map(id => `<${id}>`).join('|');
        sqlExampleWhere = `WHERE data__Identifier = '${identifierValues}';`
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
${resourceDescription}

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>${resourceName}</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
${schema.description ? `<tr><td><b>Description</b></td><td>${schema.description}</td></tr>` : `<tr><td><b>Description</b></td><td>${resourceName}</td></tr>`}
<tr><td><b>Id</b></td><td><code>${providerName}.${serviceName}.${resourceName}</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
${generateFieldsTable(fields, componentsSchemas, schemaName, isPlural)}
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
${codeBlockStart}
${sqlExampleSelect}
${sqlExampleCols}
${sqlExampleFrom}
${sqlExampleWhere}
${codeBlockEnd}

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
    return `<tr><td><code>${toSnakeCase(fixCamelCaseIssues(propName))}</code></td><td><code>${type}</code></td><td>${descriptionCleaned}</td></tr>\n`;
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

function clearMdDocsDir(directory = `${providerName}-docs/providers/${providerName}`) {
    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((file) => {
            const currentPath = path.join(directory, file);
            if (fs.lstatSync(currentPath).isDirectory()) {
                // Skip the directory named 'cloud_control'
                if (file === 'cloud_control') {
                    return; // Skip this directory and its contents
                }
                // Recurse if it's a directory (and not 'cloud_control')
                clearMdDocsDir(currentPath);
                // After recursion, check if the directory is empty before attempting to remove it
                if (fs.readdirSync(currentPath).length === 0) {
                    fs.rmdirSync(currentPath); // Remove the directory once it's empty
                }
            } else {
                // Simply delete the file if it's not a directory
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

// delete awscc-docs/index.md if it exists
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
<span>total methods:&nbsp;<b>${(totalResourcesCount + staticMethodsDiffTotal).toLocaleString()}</b></span><br />
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
