---
title: fleet_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_metrics
  - iot
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>fleet_metrics</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>fleet_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>fleet_metrics</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.iot.fleet_metrics</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>metric_name</code></td><td><code>string</code></td><td>The name of the fleet metric</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
metric_name
FROM awscc.iot.fleet_metrics
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>fleet_metrics</code> resource, the following permissions are required:

### Create
```json
iot:CreateFleetMetric,
iot:DescribeFleetMetric,
iot:TagResource
```

### List
```json
iot:ListFleetMetrics
```

