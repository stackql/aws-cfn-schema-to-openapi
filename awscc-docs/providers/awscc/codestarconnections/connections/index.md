---
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - codestarconnections
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>connections</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>connections</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.codestarconnections.connections</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>connection_arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the  connection. The ARN is used as the connection reference when the connection is shared between AWS services.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>connections</code> resource, the following permissions are required:

### Create
<pre>
codestar-connections:CreateConnection,
codestar-connections:TagResource</pre>

### List
<pre>
codestar-connections:ListConnections,
codestar-connections:ListTagsForResource</pre>


## Example
```sql
SELECT
region,
connection_arn
FROM awscc.codestarconnections.connections
WHERE region = 'us-east-1'
```