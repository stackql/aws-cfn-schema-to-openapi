---
title: PlacementGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - PlacementGroup
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The PlacementGroup resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>PlacementGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.PlacementGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Strategy</code></td><td><code>string</code></td><td>The placement strategy.</td></tr><tr><td><code>GroupName</code></td><td><code>string</code></td><td>The Group Name of Placement Group.</td></tr><tr><td><code>SpreadLevel</code></td><td><code>string</code></td><td>The Spread Level of Placement Group is an enum where it accepts either host or rack when strategy is spread</td></tr><tr><td><code>PartitionCount</code></td><td><code>integer</code></td><td>The number of partitions. Valid only when **Strategy** is set to `partition`</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>