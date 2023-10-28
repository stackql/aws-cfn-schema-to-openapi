---
title: PreparedStatement
hide_title: false
hide_table_of_contents: false
keywords:
  - PreparedStatement
  - athena
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The PreparedStatement resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>athena.PreparedStatement</b></span><br />
<span>resource id:&nbsp;<b>athena:PreparedStatement</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>athena.PreparedStatement</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>athena:PreparedStatement</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>StatementName</code></td><td><code>string</code></td><td>The name of the prepared statement.</td></tr><tr><td><code>WorkGroup</code></td><td><code>string</code></td><td>The name of the workgroup to which the prepared statement belongs.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>The description of the prepared statement.</td></tr><tr><td><code>QueryStatement</code></td><td><code>string</code></td><td>The query string for the prepared statement.</td></tr>
</tbody></table>