---
title: TransitGatewayPeering
hide_title: false
hide_table_of_contents: false
keywords:
  - TransitGatewayPeering
  - networkmanager
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The TransitGatewayPeering resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>networkmanager.TransitGatewayPeering</b></span><br />
<span>resource id:&nbsp;<b>networkmanager:TransitGatewayPeering</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>networkmanager.TransitGatewayPeering</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>networkmanager:TransitGatewayPeering</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>CoreNetworkId</code></td><td><code>string</code></td><td>The Id of the core network that you want to peer a transit gateway to.</td></tr><tr><td><code>CoreNetworkArn</code></td><td><code>string</code></td><td>The ARN (Amazon Resource Name) of the core network that you want to peer a transit gateway to.</td></tr><tr><td><code>TransitGatewayArn</code></td><td><code>string</code></td><td>The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network</td></tr><tr><td><code>TransitGatewayPeeringAttachmentId</code></td><td><code>string</code></td><td>The ID of the TransitGatewayPeeringAttachment</td></tr><tr><td><code>PeeringId</code></td><td><code>string</code></td><td>The Id of the transit gateway peering</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of the transit gateway peering</td></tr><tr><td><code>EdgeLocation</code></td><td><code>string</code></td><td>The location of the transit gateway peering</td></tr><tr><td><code>ResourceArn</code></td><td><code>string</code></td><td>The ARN (Amazon Resource Name) of the resource that you will peer to a core network</td></tr><tr><td><code>OwnerAccountId</code></td><td><code>string</code></td><td>Peering owner account Id</td></tr><tr><td><code>PeeringType</code></td><td><code>string</code></td><td>Peering type (TransitGatewayPeering)</td></tr><tr><td><code>CreatedAt</code></td><td><code>string</code></td><td>The creation time of the transit gateway peering</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>