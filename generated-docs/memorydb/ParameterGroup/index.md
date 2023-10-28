---
title: ParameterGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - ParameterGroup
  - memorydb
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The ParameterGroup resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>memorydb.ParameterGroup</b></span><br />
<span>resource id:&nbsp;<b>memorydb:ParameterGroup</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>memorydb.ParameterGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>memorydb:ParameterGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ParameterGroupName</code></td><td><code>string</code></td><td>The name of the parameter group.</td></tr><tr><td><code>Family</code></td><td><code>string</code></td><td>The name of the parameter group family that this parameter group is compatible with.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>A description of the parameter group.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this parameter group.</td></tr><tr><td><code>Parameters</code></td><td><code>object</code></td><td>An map of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional.</td></tr><tr><td><code>ARN</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the parameter group.</td></tr>
</tbody></table>