---
title: resource_set
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_set
  - fms
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>resource_set</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resource_set</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>resource_set</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.fms.resource_set</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>resource_type_list</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>resources</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
id,
name,
description,
resource_type_list,
resources,
tags
FROM awscc.fms.resource_set
WHERE data__Identifier = '<Id>';
```

## Permissions

To operate on the <code>resource_set</code> resource, the following permissions are required:

### Update
```json
fms:PutResourceSet,
fms:BatchAssociateResource,
fms:BatchDisassociateResource,
fms:GetResourceSet,
fms:ListResourceSetResources,
fms:TagResource,
fms:UntagResource,
fms:ListTagsForResource
```

### Read
```json
fms:GetResourceSet,
fms:ListResourceSetResources,
fms:ListTagsForResource
```

### Delete
```json
fms:DeleteResourceSet
```

