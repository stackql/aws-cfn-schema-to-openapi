---
title: resource_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_collections
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
Retrieves a list of <code>resource_collections</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resource_collections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>resource_collections</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.devopsguru.resource_collections</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>resource_collection_type</code></td><td><code>string</code></td><td>The type of ResourceCollection</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>resource_collections</code> resource, the following permissions are required:

### Create
<pre>
devops-guru:UpdateResourceCollection,
devops-guru:GetResourceCollection</pre>

### List
<pre>
devops-guru:GetResourceCollection</pre>


## Example
```sql
SELECT
region,
resource_collection_type
FROM awscc.devopsguru.resource_collections
WHERE region = 'us-east-1'
```