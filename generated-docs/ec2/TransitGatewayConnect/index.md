---
title: TransitGatewayConnect
hide_title: false
hide_table_of_contents: false
keywords:
  - TransitGatewayConnect
  - ec2
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The TransitGatewayConnect resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ec2.TransitGatewayConnect</b></span><br />
<span>resource id:&nbsp;<b>ec2:TransitGatewayConnect</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2.TransitGatewayConnect</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ec2:TransitGatewayConnect</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>TransitGatewayAttachmentId</code></td><td><code>string</code></td><td>The ID of the Connect attachment.</td></tr><tr><td><code>TransportTransitGatewayAttachmentId</code></td><td><code>string</code></td><td>The ID of the attachment from which the Connect attachment was created.</td></tr><tr><td><code>TransitGatewayId</code></td><td><code>string</code></td><td>The ID of the transit gateway.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of the attachment.</td></tr><tr><td><code>CreationTime</code></td><td><code>string</code></td><td>The creation time.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags for the attachment.</td></tr><tr><td><code>Options</code></td><td><code>undefined</code></td><td>The Connect attachment options.</td></tr>
</tbody></table>