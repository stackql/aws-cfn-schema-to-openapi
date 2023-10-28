---
title: EnabledControl
hide_title: false
hide_table_of_contents: false
keywords:
  - EnabledControl
  - controltower
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The EnabledControl resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>controltower.EnabledControl</b></span><br />
<span>resource id:&nbsp;<b>controltower:EnabledControl</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>controltower.EnabledControl</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>controltower:EnabledControl</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ControlIdentifier</code></td><td><code>string</code></td><td>Arn of the control.</td></tr><tr><td><code>TargetIdentifier</code></td><td><code>string</code></td><td>Arn for Organizational unit to which the control needs to be applied</td></tr>
</tbody></table>