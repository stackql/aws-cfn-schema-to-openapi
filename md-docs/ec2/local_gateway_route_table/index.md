---
title: local_gateway_route_table
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_route_table
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
Gets an individual <code>local_gateway_route_table</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>local_gateway_route_table</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.local_gateway_route_table</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>LocalGatewayRouteTableId</code></td><td><code>string</code></td><td>The ID of the local gateway route table.</td></tr><tr><td><code>LocalGatewayRouteTableArn</code></td><td><code>string</code></td><td>The ARN of the local gateway route table.</td></tr><tr><td><code>LocalGatewayId</code></td><td><code>string</code></td><td>The ID of the local gateway.</td></tr><tr><td><code>OutpostArn</code></td><td><code>string</code></td><td>The ARN of the outpost.</td></tr><tr><td><code>OwnerId</code></td><td><code>string</code></td><td>The owner of the local gateway route table.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of the local gateway route table.</td></tr><tr><td><code>Mode</code></td><td><code>string</code></td><td>The mode of the local gateway route table.</td></tr><tr><td><code>Tags</code></td><td><code>undefined</code></td><td>The tags for the local gateway route table.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.local_gateway_route_table
WHERE region = 'us-east-1' AND data__Identifier = '<LocalGatewayRouteTableId>'
</pre>
