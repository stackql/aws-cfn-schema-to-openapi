---
title: scripts
hide_title: false
hide_table_of_contents: false
keywords:
  - scripts
  - gamelift
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>scripts</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>scripts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>scripts</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.gamelift.scripts</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td>A unique identifier for the Realtime script</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>scripts</code> resource, the following permissions are required:

### Create
<pre>
gamelift:CreateScript,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:DescribeScript,
iam:PassRole</pre>

### List
<pre>
gamelift:ListScripts,
gamelift:DescribeScript</pre>


## Example
```sql
SELECT
region,
id
FROM awscc.gamelift.scripts
WHERE region = 'us-east-1'
```