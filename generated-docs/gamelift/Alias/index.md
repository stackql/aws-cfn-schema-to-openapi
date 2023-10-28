---
title: Alias
hide_title: false
hide_table_of_contents: false
keywords:
  - Alias
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
The Alias resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>gamelift.Alias</b></span><br />
<span>resource id:&nbsp;<b>gamelift:Alias</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>gamelift.Alias</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>gamelift:Alias</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Description</code></td><td><code>string</code></td><td>A human-readable description of the alias.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>A descriptive label that is associated with an alias. Alias names do not need to be unique.</td></tr><tr><td><code>RoutingStrategy</code></td><td><code>undefined</code></td><td>A routing configuration that specifies where traffic is directed for this alias, such as to a fleet or to a message.</td></tr><tr><td><code>AliasId</code></td><td><code>string</code></td><td>Unique alias ID</td></tr>
</tbody></table>