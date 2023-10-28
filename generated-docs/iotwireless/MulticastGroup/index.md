---
title: MulticastGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - MulticastGroup
  - iotwireless
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The MulticastGroup resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iotwireless.MulticastGroup</b></span><br />
<span>resource id:&nbsp;<b>iotwireless:MulticastGroup</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iotwireless.MulticastGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iotwireless:MulticastGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>Name of Multicast group</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>Multicast group description</td></tr><tr><td><code>LoRaWAN</code></td><td><code>undefined</code></td><td>Multicast group LoRaWAN</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Multicast group arn. Returned after successful create.</td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td>Multicast group id. Returned after successful create.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the Multicast group.</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>Multicast group status. Returned after successful read.</td></tr><tr><td><code>AssociateWirelessDevice</code></td><td><code>string</code></td><td>Wireless device to associate. Only for update request.</td></tr><tr><td><code>DisassociateWirelessDevice</code></td><td><code>string</code></td><td>Wireless device to disassociate. Only for update request.</td></tr>
</tbody></table>