---
title: schedule_group
hide_title: false
hide_table_of_contents: false
keywords:
  - schedule_group
  - scheduler
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>schedule_group</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schedule_group</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>schedule_group</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.scheduler.schedule_group</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the schedule group.</td></tr>
<tr><td><code>creation_date</code></td><td><code>string</code></td><td>The time at which the schedule group was created.</td></tr>
<tr><td><code>last_modification_date</code></td><td><code>string</code></td><td>The time at which the schedule group was last modified.</td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>state</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>The list of tags to associate with the schedule group.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn,
creation_date,
last_modification_date,
name,
state,
tags
FROM awscc.scheduler.schedule_group
WHERE data__Identifier = '<Name>';
```

## Permissions

To operate on the <code>schedule_group</code> resource, the following permissions are required:

### Read
```json
scheduler:GetScheduleGroup,
scheduler:ListTagsForResource
```

### Update
```json
scheduler:TagResource,
scheduler:UntagResource,
scheduler:ListTagsForResource,
scheduler:GetScheduleGroup
```

### Delete
```json
scheduler:DeleteScheduleGroup,
scheduler:GetScheduleGroup,
scheduler:DeleteSchedule
```

