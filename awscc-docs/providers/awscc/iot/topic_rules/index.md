---
title: topic_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_rules
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
Retrieves a list of <code>topic_rules</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>topic_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>topic_rules</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.iot.topic_rules</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>rule_name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
rule_name
FROM awscc.iot.topic_rules
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>topic_rules</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
iot:CreateTopicRule,
iot:GetTopicRule,
iot:TagResource,
iot:ListTagsForResource
```

### List
```json
iot:ListTopicRules
```

