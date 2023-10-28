---
title: RecoveryGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - RecoveryGroup
  - route53
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The RecoveryGroup resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>route53.RecoveryGroup</b></span><br />
<span>resource id:&nbsp;<b>route53:RecoveryGroup</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>route53.RecoveryGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>route53:RecoveryGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>RecoveryGroupName</code></td><td><code>string</code></td><td>The name of the recovery group to create.</td></tr><tr><td><code>Cells</code></td><td><code>array</code></td><td>A list of the cell Amazon Resource Names (ARNs) in the recovery group.</td></tr><tr><td><code>RecoveryGroupArn</code></td><td><code>string</code></td><td>A collection of tags associated with a resource.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A collection of tags associated with a resource.</td></tr>
</tbody></table>