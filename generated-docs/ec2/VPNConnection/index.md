---
title: VPNConnection
hide_title: false
hide_table_of_contents: false
keywords:
  - VPNConnection
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
The VPNConnection resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>VPNConnection</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.VPNConnection</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>VpnConnectionId</code></td><td><code>string</code></td><td>The provider-assigned unique ID for this managed resource</td></tr><tr><td><code>CustomerGatewayId</code></td><td><code>string</code></td><td>The ID of the customer gateway at your end of the VPN connection.</td></tr><tr><td><code>StaticRoutesOnly</code></td><td><code>boolean</code></td><td>Indicates whether the VPN connection uses static routes only.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>Any tags assigned to the VPN connection.</td></tr><tr><td><code>TransitGatewayId</code></td><td><code>string</code></td><td>The ID of the transit gateway associated with the VPN connection.</td></tr><tr><td><code>Type</code></td><td><code>string</code></td><td>The type of VPN connection.</td></tr><tr><td><code>VpnGatewayId</code></td><td><code>string</code></td><td>The ID of the virtual private gateway at the AWS side of the VPN connection.</td></tr><tr><td><code>VpnTunnelOptionsSpecifications</code></td><td><code>array</code></td><td>The tunnel options for the VPN connection.</td></tr>
</tbody></table>