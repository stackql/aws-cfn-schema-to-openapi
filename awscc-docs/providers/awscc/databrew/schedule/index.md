---
title: schedule
hide_title: false
hide_table_of_contents: false
keywords:
  - schedule
  - databrew
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>schedule</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schedule</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>schedule</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.databrew.schedule</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>job_names</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>cron_expression</code></td><td><code>string</code></td><td>Schedule cron</td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>Schedule Name</td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
job_names,
cron_expression,
name,
tags
FROM awscc.databrew.schedule
WHERE data__Identifier = '<Name>';
```

## Permissions

To operate on the <code>schedule</code> resource, the following permissions are required:

### Read
```json
databrew:DescribeSchedule,
databrew:ListTagsForResource,
iam:ListRoles
```

### Update
```json
databrew:UpdateSchedule
```

### Delete
```json
databrew:DeleteSchedule
```

