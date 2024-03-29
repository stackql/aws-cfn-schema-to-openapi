---
title: resource_collection
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_collection
  - devopsguru
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>resource_collection</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resource_collection</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>resource_collection</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.devopsguru.resource_collection</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>resource_collection_filter</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>resource_collection_type</code></td><td><code>string</code></td><td>The type of ResourceCollection</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
resource_collection_filter,
resource_collection_type
FROM awscc.devopsguru.resource_collection
WHERE data__Identifier = '<ResourceCollectionType>';
```

## Permissions

To operate on the <code>resource_collection</code> resource, the following permissions are required:

### Read
```json
devops-guru:GetResourceCollection
```

### Delete
```json
devops-guru:UpdateResourceCollection,
devops-guru:GetResourceCollection
```

### Update
```json
devops-guru:UpdateResourceCollection,
devops-guru:GetResourceCollection
```

