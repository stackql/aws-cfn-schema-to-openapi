---
title: attribute_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - attribute_groups
  - servicecatalogappregistry
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>attribute_groups</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>attribute_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>attribute_groups</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.servicecatalogappregistry.attribute_groups</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
id
FROM awscc.servicecatalogappregistry.attribute_groups
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>attribute_groups</code> resource, the following permissions are required:

### Create
```json
servicecatalog:CreateAttributeGroup,
servicecatalog:TagResource
```

### List
```json
servicecatalog:ListAttributeGroups
```

