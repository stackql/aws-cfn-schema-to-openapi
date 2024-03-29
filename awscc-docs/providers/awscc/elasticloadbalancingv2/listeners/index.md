---
title: listeners
hide_title: false
hide_table_of_contents: false
keywords:
  - listeners
  - elasticloadbalancingv2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>listeners</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>listeners</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>listeners</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.elasticloadbalancingv2.listeners</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>listener_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
listener_arn
FROM awscc.elasticloadbalancingv2.listeners
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>listeners</code> resource, the following permissions are required:

### Create
```json
elasticloadbalancing:CreateListener,
elasticloadbalancing:DescribeListeners,
cognito-idp:DescribeUserPoolClient
```

### List
```json
elasticloadbalancing:DescribeListeners
```

