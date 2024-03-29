---
title: launch
hide_title: false
hide_table_of_contents: false
keywords:
  - launch
  - evidently
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>launch</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>launch</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>launch</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.evidently.launch</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>project</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>randomization_salt</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>scheduled_splits_config</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>groups</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>metric_monitors</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><code>execution_status</code></td><td><code>object</code></td><td>Start or Stop Launch Launch. Default is not started.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn,
name,
project,
description,
randomization_salt,
scheduled_splits_config,
groups,
metric_monitors,
tags,
execution_status
FROM awscc.evidently.launch
WHERE data__Identifier = '<Arn>';
```

## Permissions

To operate on the <code>launch</code> resource, the following permissions are required:

### Read
```json
evidently:GetLaunch,
evidently:ListTagsForResource
```

### Update
```json
evidently:UpdateLaunch,
evidently:ListTagsForResource,
evidently:TagResource,
evidently:UntagResource,
evidently:GetLaunch,
evidently:StartLaunch,
evidently:StopLaunch
```

### Delete
```json
evidently:DeleteLaunch,
evidently:UntagResource,
evidently:GetLaunch
```

