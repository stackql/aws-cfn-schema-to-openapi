---
title: component_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - component_versions
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
Retrieves a list of <code>component_versions</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>component_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>component_versions</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.greengrassv2.component_versions</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn
FROM awscc.greengrassv2.component_versions
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>component_versions</code> resource, the following permissions are required:

### Create
```json
greengrass:CreateComponentVersion,
greengrass:DescribeComponent,
greengrass:ListTagsForResource,
greengrass:TagResource,
lambda:GetFunction,
s3:GetObject
```

### List
```json
greengrass:ListComponentVersions
```

