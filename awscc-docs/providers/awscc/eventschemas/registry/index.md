---
title: registry
hide_title: false
hide_table_of_contents: false
keywords:
  - registry
  - eventschemas
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>registry</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>registry</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>registry</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.eventschemas.registry</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>registry_name</code></td><td><code>string</code></td><td>The name of the schema registry.</td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td>A description of the registry to be created.</td></tr>
<tr><td><code>registry_arn</code></td><td><code>string</code></td><td>The ARN of the registry.</td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>Tags associated with the resource.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>registry</code> resource, the following permissions are required:

### Read
<pre>
schemas:DescribeRegistry</pre>

### Update
<pre>
schemas:DescribeRegistry,
schemas:UpdateRegistry,
schemas:TagResource,
schemas:UntagResource,
schemas:ListTagsForResource</pre>

### Delete
<pre>
schemas:DescribeRegistry,
schemas:DeleteRegistry</pre>


## Example
```sql
SELECT
region,
registry_name,
description,
registry_arn,
tags
FROM awscc.eventschemas.registry
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;RegistryArn&gt;'
```