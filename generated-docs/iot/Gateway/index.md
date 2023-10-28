---
title: Gateway
hide_title: false
hide_table_of_contents: false
keywords:
  - Gateway
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
The Gateway resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iot.Gateway</b></span><br />
<span>resource id:&nbsp;<b>iot:Gateway</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iot.Gateway</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iot:Gateway</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>GatewayName</code></td><td><code>string</code></td><td>A unique, friendly name for the gateway.</td></tr><tr><td><code>GatewayPlatform</code></td><td><code>undefined</code></td><td>The gateway's platform. You can only specify one platform in a gateway.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the gateway.</td></tr><tr><td><code>GatewayId</code></td><td><code>string</code></td><td>The ID of the gateway device.</td></tr><tr><td><code>GatewayCapabilitySummaries</code></td><td><code>array</code></td><td>A list of gateway capability summaries that each contain a namespace and status.</td></tr>
</tbody></table>