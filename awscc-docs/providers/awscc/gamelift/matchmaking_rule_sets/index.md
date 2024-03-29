---
title: matchmaking_rule_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - matchmaking_rule_sets
  - gamelift
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>matchmaking_rule_sets</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>matchmaking_rule_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>matchmaking_rule_sets</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.gamelift.matchmaking_rule_sets</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>A unique identifier for the matchmaking rule set.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
name
FROM awscc.gamelift.matchmaking_rule_sets
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>matchmaking_rule_sets</code> resource, the following permissions are required:

### Create
```json
gamelift:CreateMatchmakingRuleSet,
gamelift:DescribeMatchmakingRuleSets,
gamelift:ValidateMatchmakingRuleSet,
gamelift:ListTagsForResource,
gamelift:TagResource
```

### List
```json
gamelift:DescribeMatchmakingRuleSets
```

