---
title: flow_entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_entitlements
  - mediaconnect
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>flow_entitlements</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>flow_entitlements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>flow_entitlements</td></tr>
<tr><td><b>Id</b></td><td><code>aws.mediaconnect.flow_entitlements</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>entitlement_arn</code></td><td><code>string</code></td><td>The ARN of the entitlement.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
entitlement_arn
FROM aws.mediaconnect.flow_entitlements
WHERE region = 'us-east-1'
```