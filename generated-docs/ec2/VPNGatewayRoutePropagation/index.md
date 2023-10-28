---
title: VPNGatewayRoutePropagation
hide_title: false
hide_table_of_contents: false
keywords:
  - VPNGatewayRoutePropagation
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
The VPNGatewayRoutePropagation resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ec2.VPNGatewayRoutePropagation</b></span><br />
<span>resource id:&nbsp;<b>ec2:VPNGatewayRoutePropagation</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2.VPNGatewayRoutePropagation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ec2:VPNGatewayRoutePropagation</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>RouteTableIds</code></td><td><code>array</code></td><td>The ID of the route table. The routing table must be associated with the same VPC that the virtual private gateway is attached to</td></tr><tr><td><code>VpnGatewayId</code></td><td><code>string</code></td><td>The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with</td></tr>
</tbody></table>