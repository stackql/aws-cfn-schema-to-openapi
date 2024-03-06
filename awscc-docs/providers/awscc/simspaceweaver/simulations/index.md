---
title: simulations
hide_title: false
hide_table_of_contents: false
keywords:
  - simulations
  - simspaceweaver
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>simulations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>simulations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>simulations</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.simspaceweaver.simulations</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>The name of the simulation.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>simulations</code> resource, the following permissions are required:

### Create
<pre>
simspaceweaver:StartSimulation,
simspaceweaver:DescribeSimulation,
iam:GetRole,
iam:PassRole</pre>

### List
<pre>
simspaceweaver:ListSimulations</pre>


## Example
```sql
SELECT
region,
name
FROM awscc.simspaceweaver.simulations
WHERE region = 'us-east-1'
```