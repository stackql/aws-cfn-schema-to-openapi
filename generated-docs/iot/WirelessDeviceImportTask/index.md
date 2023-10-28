---
title: WirelessDeviceImportTask
hide_title: false
hide_table_of_contents: false
keywords:
  - WirelessDeviceImportTask
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
The WirelessDeviceImportTask resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iot.WirelessDeviceImportTask</b></span><br />
<span>resource id:&nbsp;<b>iot:WirelessDeviceImportTask</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iot.WirelessDeviceImportTask</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iot:WirelessDeviceImportTask</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td>Id for Wireless Device Import Task, Returned upon successful start.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Arn for Wireless Device Import Task, Returned upon successful start.</td></tr><tr><td><code>DestinationName</code></td><td><code>string</code></td><td>Destination Name for import task</td></tr><tr><td><code>CreationDate</code></td><td><code>string</code></td><td>CreationDate for import task</td></tr><tr><td><code>Sidewalk</code></td><td><code>object</code></td><td>sidewalk contain file for created device and role</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>Status for import task</td></tr><tr><td><code>StatusReason</code></td><td><code>string</code></td><td>StatusReason for import task</td></tr><tr><td><code>InitializedImportedDevicesCount</code></td><td><code>integer</code></td><td>Initialized Imported Devices Count</td></tr><tr><td><code>PendingImportedDevicesCount</code></td><td><code>integer</code></td><td>Pending Imported Devices Count</td></tr><tr><td><code>OnboardedImportedDevicesCount</code></td><td><code>integer</code></td><td>Onboarded Imported Devices Count</td></tr><tr><td><code>FailedImportedDevicesCount</code></td><td><code>integer</code></td><td>Failed Imported Devices Count</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>