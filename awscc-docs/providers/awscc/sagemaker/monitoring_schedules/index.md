---
title: monitoring_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_schedules
  - sagemaker
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>monitoring_schedules</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>monitoring_schedules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>monitoring_schedules</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.sagemaker.monitoring_schedules</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>monitoring_schedule_arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the monitoring schedule.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>monitoring_schedules</code> resource, the following permissions are required:

### Create
<pre>
sagemaker:CreateMonitoringSchedule,
sagemaker:DescribeMonitoringSchedule,
iam:PassRole</pre>

### List
<pre>
sagemaker:ListMonitoringSchedule</pre>


## Example
```sql
SELECT
region,
monitoring_schedule_arn
FROM awscc.sagemaker.monitoring_schedules
WHERE region = 'us-east-1'
```