---
title: ip_set
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_set
  - guardduty
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>ip_set</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ip_set</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>ip_set</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.guardduty.ip_set</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>format</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>activate</code></td><td><code>boolean</code></td><td></td></tr>
<tr><td><code>detector_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>location</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
id,
format,
activate,
detector_id,
name,
location,
tags
FROM awscc.guardduty.ip_set
WHERE data__Identifier = '<Id>|<DetectorId>';
```

## Permissions

To operate on the <code>ip_set</code> resource, the following permissions are required:

### Read
```json
guardduty:GetIPSet
```

### Delete
```json
guardduty:GetDetector,
guardduty:ListDetectors,
guardduty:ListIPSets,
guardduty:GetIPSet,
guardduty:DeleteIPSet,
iam:DeleteRolePolicy
```

### Update
```json
guardduty:UpdateIPSet,
guardduty:GetIPSet,
guardduty:ListIPSets,
iam:PutRolePolicy
```

