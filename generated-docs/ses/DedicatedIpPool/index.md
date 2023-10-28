---
title: DedicatedIpPool
hide_title: false
hide_table_of_contents: false
keywords:
  - DedicatedIpPool
  - ses
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The DedicatedIpPool resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ses.DedicatedIpPool</b></span><br />
<span>resource id:&nbsp;<b>ses:DedicatedIpPool</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ses.DedicatedIpPool</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ses:DedicatedIpPool</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>PoolName</code></td><td><code>string</code></td><td>The name of the dedicated IP pool.</td></tr><tr><td><code>ScalingMode</code></td><td><code>string</code></td><td>Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.</td></tr>
</tbody></table>