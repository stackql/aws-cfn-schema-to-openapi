---
title: mission_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - mission_profiles
  - groundstation
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>mission_profiles</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>mission_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>mission_profiles</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.groundstation.mission_profiles</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
id,
arn
FROM awscc.groundstation.mission_profiles
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>mission_profiles</code> resource, the following permissions are required:

### Create
```json
groundstation:CreateMissionProfile,
groundstation:GetMissionProfile,
groundstation:TagResource,
iam:PassRole,
kms:DescribeKey,
kms:CreateGrant
```

### List
```json
groundstation:ListMissionProfiles
```

