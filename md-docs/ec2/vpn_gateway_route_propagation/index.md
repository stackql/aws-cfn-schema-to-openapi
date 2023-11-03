---
title: vpn_gateway_route_propagation
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_gateway_route_propagation
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
Gets an individual <code>vpn_gateway_route_propagation</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpn_gateway_route_propagation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.vpn_gateway_route_propagation</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>RouteTableIds</code></td><td><code>array</code></td><td>The ID of the route table. The routing table must be associated with the same VPC that the virtual private gateway is attached to</td></tr><tr><td><code>VpnGatewayId</code></td><td><code>string</code></td><td>The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.vpn_gateway_route_propagation
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>
