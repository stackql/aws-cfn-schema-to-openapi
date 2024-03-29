---
title: data_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sets
  - quicksight
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>data_sets</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>data_sets</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.quicksight.data_sets</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>aws_account_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>data_set_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
aws_account_id,
data_set_id
FROM awscc.quicksight.data_sets
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>data_sets</code> resource, the following permissions are required:

### Create
```json
quicksight:DescribeDataSet,
quicksight:DescribeDataSetPermissions,
quicksight:DescribeIngestion,
quicksight:ListIngestions,
quicksight:CreateDataSet,
quicksight:PassDataSource,
quicksight:PassDataSet,
quicksight:TagResource,
quicksight:ListTagsForResource,
quicksight:DescribeDataSetRefreshProperties,
quicksight:PutDataSetRefreshProperties
```

### List
```json
quicksight:DescribeDataSet,
quicksight:ListDataSets
```

