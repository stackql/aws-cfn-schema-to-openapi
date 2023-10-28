---
title: NetworkAnalyzerConfiguration
hide_title: false
hide_table_of_contents: false
keywords:
  - NetworkAnalyzerConfiguration
  - iot
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The NetworkAnalyzerConfiguration resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iot.NetworkAnalyzerConfiguration</b></span><br />
<span>resource id:&nbsp;<b>iot:NetworkAnalyzerConfiguration</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iot.NetworkAnalyzerConfiguration</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iot:NetworkAnalyzerConfiguration</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>Name of the network analyzer configuration</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>The description of the new resource</td></tr><tr><td><code>TraceContent</code></td><td><code>object</code></td><td>Trace content for your wireless gateway and wireless device resources</td></tr><tr><td><code>WirelessDevices</code></td><td><code>array</code></td><td>List of wireless gateway resources that have been added to the network analyzer configuration</td></tr><tr><td><code>WirelessGateways</code></td><td><code>array</code></td><td>List of wireless gateway resources that have been added to the network analyzer configuration</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Arn for network analyzer configuration, Returned upon successful create.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>