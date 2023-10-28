---
title: Dashboard
hide_title: false
hide_table_of_contents: false
keywords:
  - Dashboard
  - iotsitewise
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Dashboard resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iotsitewise.Dashboard</b></span><br />
<span>resource id:&nbsp;<b>iotsitewise:Dashboard</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iotsitewise.Dashboard</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iotsitewise:Dashboard</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ProjectId</code></td><td><code>string</code></td><td>The ID of the project in which to create the dashboard.</td></tr><tr><td><code>DashboardId</code></td><td><code>string</code></td><td>The ID of the dashboard.</td></tr><tr><td><code>DashboardName</code></td><td><code>string</code></td><td>A friendly name for the dashboard.</td></tr><tr><td><code>DashboardDescription</code></td><td><code>string</code></td><td>A description for the dashboard.</td></tr><tr><td><code>DashboardDefinition</code></td><td><code>string</code></td><td>The dashboard definition specified in a JSON literal.</td></tr><tr><td><code>DashboardArn</code></td><td><code>string</code></td><td>The ARN of the dashboard.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the dashboard.</td></tr>
</tbody></table>