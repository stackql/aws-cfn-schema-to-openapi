---
title: WirelessGateway
hide_title: false
hide_table_of_contents: false
keywords:
  - WirelessGateway
  - iot
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The WirelessGateway resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iot.WirelessGateway</b></span><br />
<span>resource id:&nbsp;<b>iot:WirelessGateway</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iot.WirelessGateway</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iot:WirelessGateway</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>Name of Wireless Gateway.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>Description of Wireless Gateway.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the gateway.</td></tr><tr><td><code>LoRaWAN</code></td><td><code>undefined</code></td><td>The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Arn for Wireless Gateway. Returned upon successful create.</td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td>Id for Wireless Gateway. Returned upon successful create.</td></tr><tr><td><code>ThingArn</code></td><td><code>string</code></td><td>Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.</td></tr><tr><td><code>ThingName</code></td><td><code>string</code></td><td>Thing Name. If there is a Thing created, this can be returned with a Get call.</td></tr><tr><td><code>LastUplinkReceivedAt</code></td><td><code>string</code></td><td>The date and time when the most recent uplink was received.</td></tr>
</tbody></table>