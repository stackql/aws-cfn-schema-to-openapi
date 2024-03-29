---
title: proactive_engagements
hide_title: false
hide_table_of_contents: false
keywords:
  - proactive_engagements
  - shield
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>proactive_engagements</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>proactive_engagements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>proactive_engagements</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.shield.proactive_engagements</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>account_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
account_id
FROM awscc.shield.proactive_engagements

```

## Permissions

To operate on the <code>proactive_engagements</code> resource, the following permissions are required:

### Create
```json
shield:DescribeSubscription,
shield:DescribeEmergencyContactSettings,
shield:AssociateProactiveEngagementDetails,
shield:UpdateEmergencyContactSettings,
shield:EnableProactiveEngagement
```

### List
```json
shield:DescribeSubscription,
shield:DescribeEmergencyContactSettings
```

