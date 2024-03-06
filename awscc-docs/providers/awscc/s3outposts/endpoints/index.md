---
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - s3outposts
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>endpoints</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>endpoints</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.s3outposts.endpoints</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the endpoint.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>endpoints</code> resource, the following permissions are required:

### Create
<pre>
s3-outposts:CreateEndpoint</pre>

### List
<pre>
s3-outposts:ListEndpoints</pre>


## Example
```sql
SELECT
region,
arn
FROM awscc.s3outposts.endpoints
WHERE region = 'us-east-1'
```