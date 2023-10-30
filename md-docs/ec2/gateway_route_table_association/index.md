---
title: gateway_route_table_association
hide_title: false
hide_table_of_contents: false
keywords:
  - gateway_route_table_association
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
The gateway_route_table_association resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>gateway_route_table_association</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.gateway_route_table_association</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>RouteTableId</code></td><td><code>string</code></td><td>The ID of the route table.</td></tr><tr><td><code>GatewayId</code></td><td><code>string</code></td><td>The ID of the gateway.</td></tr><tr><td><code>AssociationId</code></td><td><code>string</code></td><td>The route table association ID.</td></tr>
</tbody></table>