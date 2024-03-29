---
title: mitigation_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - mitigation_actions
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
Retrieves a list of <code>mitigation_actions</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>mitigation_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>mitigation_actions</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.iot.mitigation_actions</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>action_name</code></td><td><code>string</code></td><td>A unique identifier for the mitigation action.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
action_name
FROM awscc.iot.mitigation_actions
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>mitigation_actions</code> resource, the following permissions are required:

### Create
```json
iot:CreateMitigationAction,
iot:DescribeMitigationAction,
iot:TagResource,
iam:PassRole
```

### List
```json
iot:ListMitigationActions
```

