const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function createDocsForService(yamlFilePath) {
    const data = yaml.load(fs.readFileSync(yamlFilePath, 'utf8'));
    const serviceName = path.basename(yamlFilePath, '.yaml');
    const serviceFolder = path.join('md-docs', serviceName);

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
        if (!schema || !schema.properties) {
            console.warn(`No properties defined for schema: ${schemaName} in service: ${serviceName}`);
            return;
        }

        resources.push({ name: resourceName, type: methodType, identifiers: identifiers, schema });
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
        const resourceIndexContent = createResourceIndexContent(serviceName, resource.name, resource.type, resource.identifiers, resource.schema);
        fs.writeFileSync(resourceIndexPath, resourceIndexContent);
    });

    secondColumn.forEach((resource) => {
        const resourceFolder = path.join(serviceFolder, resource.name);
        if (!fs.existsSync(resourceFolder)) {
            fs.mkdirSync(resourceFolder, { recursive: true });
        }

        const resourceIndexPath = path.join(resourceFolder, 'index.md');
        const resourceIndexContent = createResourceIndexContent(serviceName, resource.name, resource.type, resource.identifiers, resource.schema);
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
        return `<a href="/providers/aws/${serviceName}/${resource.name}/">${resource.name}</a>`;
    });
    return resourceLinks.join('<br />\n');
}

function createResourceIndexContent(serviceName, resourceName, resourceType, resourceIdentifiers, schema) {
    // Create the markdown content for each resource index
    // You can customize this content as needed
    let resourceDescription = `Retrieves a list of <code>${resourceName}</code> in a region`;
    if(resourceType === 'get') {
        resourceDescription = `Gets an individual <code>${resourceName}</code> resource`;
    }
    let sqlExample = `SELECT * 
FROM aws.${serviceName}.${resourceName}
WHERE region = 'us-east-1'`;
    if(resourceType === 'get') {
        resourceIdentifiers.forEach(identifier => {
            sqlExample += ` AND data__Identifier = '<${identifier}>'`;
        });
    };
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
${schema.description ? `<tr><td><b>Description</b></td><td>${schema.description}</td></tr>` : null}
<tr><td><b>Id</b></td><td><code>aws.${serviceName}.${resourceName}</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
${generateFieldsTable(schema.properties)}
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
${sqlExample}
</pre>
`;
}

function generateFieldsTable(properties) {
    // Generate the fields table for each resource index
    let fieldsTable = '';
    for (let propName in properties) {
        const prop = properties[propName];
        fieldsTable += `<tr><td><code>${propName}</code></td><td><code>${prop.type}</code></td><td>${prop.description || ''}</td></tr>`;
    }
    return fieldsTable;
}

function clearMdDocsDir(directory = 'md-docs') {
    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((file) => {
            const currentPath = path.join(directory, file);
            if (fs.lstatSync(currentPath).isDirectory()) { 
                // Recurse if it's a directory
                clearMdDocsDir(currentPath);
                fs.rmdirSync(currentPath); // Remove the directory once it's empty
            } else { 
                // Simply delete the file if it's not a directory
                fs.unlinkSync(currentPath);
            }
        });
    } else {
        console.log("Directory not found:", directory);
    }
}

// Iterate over each yaml file in the 'output' directory
clearMdDocsDir();
fs.readdirSync('src/aws/v00.00.00000/services').forEach(file => {
if (path.extname(file) === '.yaml') {
    createDocsForService(path.join('src/aws/v00.00.00000/services', file));
}
});
