---
title: core_network_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - core_network_tags
  - networkmanager
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

Expands all tag keys and values for <code>core_networks</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>core_network_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::NetworkManager::CoreNetwork Resource Type Definition.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.core_network_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="global_network_id" /></td><td><code>string</code></td><td>The ID of the global network that your core network is a part of.</td></tr>
<tr><td><CopyableCode code="core_network_id" /></td><td><code>string</code></td><td>The Id of core network</td></tr>
<tr><td><CopyableCode code="core_network_arn" /></td><td><code>string</code></td><td>The ARN (Amazon resource name) of core network</td></tr>
<tr><td><CopyableCode code="policy_document" /></td><td><code>object</code></td><td>Live policy document for the core network, you must provide PolicyDocument in Json Format</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of core network</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>The creation time of core network</td></tr>
<tr><td><CopyableCode code="state" /></td><td><code>string</code></td><td>The state of core network</td></tr>
<tr><td><CopyableCode code="segments" /></td><td><code>array</code></td><td>The segments within a core network.</td></tr>
<tr><td><CopyableCode code="network_function_groups" /></td><td><code>array</code></td><td>The network function groups within a core network.</td></tr>
<tr><td><CopyableCode code="edges" /></td><td><code>array</code></td><td>The edges within a core network.</td></tr>
<tr><td><CopyableCode code="owner_account" /></td><td><code>string</code></td><td>Owner of the core network</td></tr>
<tr><td><CopyableCode code="tag_key" /></td><td><code>string</code></td><td>Tag key.</td></tr>
<tr><td><CopyableCode code="tag_value" /></td><td><code>string</code></td><td>Tag value.</td></tr>
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
Expands tags for all <code>core_networks</code> in a region.
```sql
SELECT
region,
global_network_id,
core_network_id,
core_network_arn,
policy_document,
description,
created_at,
state,
segments,
network_function_groups,
edges,
owner_account,
tag_key,
tag_value
FROM aws.networkmanager.core_network_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>core_network_tags</code> resource, see <a href="/providers/aws/networkmanager/core_networks/#permissions"><code>core_networks</code></a>

