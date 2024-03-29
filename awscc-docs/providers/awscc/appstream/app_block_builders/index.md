---
title: app_block_builders
hide_title: false
hide_table_of_contents: false
keywords:
  - app_block_builders
  - appstream
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>app_block_builders</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>app_block_builders</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>app_block_builders</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.appstream.app_block_builders</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
name
FROM awscc.appstream.app_block_builders
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>app_block_builders</code> resource, the following permissions are required:

### Create
```json
appstream:CreateAppBlockBuilder,
appstream:DescribeAppBlockBuilders,
appstream:StartAppBlockBuilder,
appstream:AssociateAppBlockBuilderAppBlock,
appstream:DescribeAppBlockBuilderAppBlockAssociations,
appstream:TagResource,
iam:PassRole
```

### List
```json
appstream:DescribeAppBlockBuilders
```

