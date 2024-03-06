---
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - greengrassv2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>deployments</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>deployments</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.greengrassv2.deployments</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>deployment_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>deployments</code> resource, the following permissions are required:

### Create
<pre>
greengrass:CreateDeployment,
greengrass:GetDeployment,
greengrass:TagResource,
iot:CancelJob,
iot:CreateJob,
iot:DeleteThingShadow,
iot:DescribeJob,
iot:DescribeThing,
iot:DescribeThingGroup,
iot:GetThingShadow,
iot:UpdateJob,
iot:UpdateThingShadow</pre>

### List
<pre>
greengrass:ListDeployments,
iot:DescribeJob,
iot:DescribeThing,
iot:DescribeThingGroup,
iot:GetThingShadow</pre>


## Example
```sql
SELECT
region,
deployment_id
FROM awscc.greengrassv2.deployments
WHERE region = 'us-east-1'
```