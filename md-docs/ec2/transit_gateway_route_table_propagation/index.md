---
title: transit_gateway_route_table_propagation
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_route_table_propagation
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
Gets an individual <code>transit_gateway_route_table_propagation</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_route_table_propagation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.transit_gateway_route_table_propagation</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TransitGatewayRouteTableId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TransitGatewayAttachmentId</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.transit_gateway_route_table_propagation
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>
