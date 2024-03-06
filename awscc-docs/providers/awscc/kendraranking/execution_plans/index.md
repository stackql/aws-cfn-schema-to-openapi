---
title: execution_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - execution_plans
  - kendraranking
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>execution_plans</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>execution_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>execution_plans</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.kendraranking.execution_plans</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>id</code></td><td><code>undefined</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>execution_plans</code> resource, the following permissions are required:

### Create
<pre>
kendra-ranking:CreateRescoreExecutionPlan,
kendra-ranking:DescribeRescoreExecutionPlan,
kendra-ranking:UpdateRescoreExecutionPlan,
kendra-ranking:ListTagsForResource,
kendra-ranking:TagResource</pre>

### List
<pre>
kendra-ranking:ListRescoreExecutionPlans</pre>


## Example
```sql
SELECT
region,
id
FROM awscc.kendraranking.execution_plans
WHERE region = 'us-east-1'
```