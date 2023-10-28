---
title: LocalGatewayRoute
hide_title: false
hide_table_of_contents: false
keywords:
  - LocalGatewayRoute
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The LocalGatewayRoute resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ec2.LocalGatewayRoute</b></span><br />
<span>resource id:&nbsp;<b>ec2:LocalGatewayRoute</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2.LocalGatewayRoute</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ec2:LocalGatewayRoute</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>DestinationCidrBlock</code></td><td><code>string</code></td><td>The CIDR block used for destination matches.</td></tr><tr><td><code>LocalGatewayRouteTableId</code></td><td><code>string</code></td><td>The ID of the local gateway route table.</td></tr><tr><td><code>LocalGatewayVirtualInterfaceGroupId</code></td><td><code>string</code></td><td>The ID of the virtual interface group.</td></tr><tr><td><code>NetworkInterfaceId</code></td><td><code>string</code></td><td>The ID of the network interface.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of the route.</td></tr><tr><td><code>Type</code></td><td><code>string</code></td><td>The route type.</td></tr>
</tbody></table>