---
title: AppMonitor
hide_title: false
hide_table_of_contents: false
keywords:
  - AppMonitor
  - rum
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The AppMonitor resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>rum.AppMonitor</b></span><br />
<span>resource id:&nbsp;<b>rum:AppMonitor</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rum.AppMonitor</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>rum:AppMonitor</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td>The unique ID of the new app monitor.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>A name for the app monitor</td></tr><tr><td><code>Domain</code></td><td><code>string</code></td><td>The top-level internet domain name for which your application has administrative authority.</td></tr><tr><td><code>CwLogEnabled</code></td><td><code>boolean</code></td><td>Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false</td></tr><tr><td><code>Tags</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>AppMonitorConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>CustomEvents</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>