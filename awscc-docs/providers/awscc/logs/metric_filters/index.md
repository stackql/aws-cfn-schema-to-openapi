---
title: metric_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_filters
  - logs
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>metric_filters</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>metric_filters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>metric_filters</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.logs.metric_filters</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>log_group_name</code></td><td><code>string</code></td><td>Existing log group that you want to associate with this filter.</td></tr>
<tr><td><code>filter_name</code></td><td><code>string</code></td><td>A name for the metric filter.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
log_group_name,
filter_name
FROM awscc.logs.metric_filters
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>metric_filters</code> resource, the following permissions are required:

### Create
```json
logs:PutMetricFilter,
logs:DescribeMetricFilters
```

### List
```json
logs:DescribeMetricFilters
```

