---
title: schema_mapping
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_mapping
  - entityresolution
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>schema_mapping</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schema_mapping</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>schema_mapping</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.entityresolution.schema_mapping</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>schema_name</code></td><td><code>string</code></td><td>The name of the SchemaMapping</td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td>The description of the SchemaMapping</td></tr>
<tr><td><code>mapped_input_fields</code></td><td><code>array</code></td><td>The SchemaMapping attributes input</td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>schema_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>created_at</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>updated_at</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>has_workflows</code></td><td><code>boolean</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
schema_name,
description,
mapped_input_fields,
tags,
schema_arn,
created_at,
updated_at,
has_workflows
FROM awscc.entityresolution.schema_mapping
WHERE data__Identifier = '<SchemaName>';
```

## Permissions

To operate on the <code>schema_mapping</code> resource, the following permissions are required:

### Read
```json
entityresolution:GetSchemaMapping,
entityresolution:ListTagsForResource
```

### Delete
```json
entityresolution:DeleteSchemaMapping,
entityresolution:GetSchemaMapping
```

### Update
```json
entityresolution:GetSchemaMapping,
entityresolution:UpdateSchemaMapping,
entityresolution:ListTagsForResource,
entityresolution:TagResource,
entityresolution:UntagResource
```

