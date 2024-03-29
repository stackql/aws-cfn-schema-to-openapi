---
title: data_catalogs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_catalogs
  - athena
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>data_catalogs</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_catalogs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>data_catalogs</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.athena.data_catalogs</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>The name of the data catalog to create. The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters. </td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
name
FROM awscc.athena.data_catalogs
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>data_catalogs</code> resource, the following permissions are required:

### Create
```json
athena:CreateDataCatalog,
athena:TagResource
```

### List
```json
athena:ListDataCatalog
```

