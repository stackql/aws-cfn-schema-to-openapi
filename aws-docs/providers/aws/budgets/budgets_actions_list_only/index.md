---
title: budgets_actions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - budgets_actions_list_only
  - budgets
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Lists <code>budgets_actions</code> in a region or regions, for all properties use <a href="/providers/aws/serviceName/budgets_actions/"><code>budgets_actions</code></a>

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>budgets_actions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.budgets.budgets_actions_list_only" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="action_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="budget_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

## Methods

<table><tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>

## `SELECT` examples
Lists all <code>budgets_actions</code> in a region.
```sql
SELECT
region,
action_id,
budget_name
FROM aws.budgets.budgets_actions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>budgets_actions_list_only</code> resource, see <a href="/providers/aws/budgets/budgets_actions/#permissions"><code>budgets_actions</code></a>

