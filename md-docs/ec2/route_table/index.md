---
title: route_table
hide_title: false
hide_table_of_contents: false
keywords:
  - route_table
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
The route_table resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>route_table</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.route_table</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>RouteTableId</code></td><td><code>string</code></td><td>The route table ID.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>Any tags assigned to the route table.</td></tr><tr><td><code>VpcId</code></td><td><code>string</code></td><td>The ID of the VPC.</td></tr>
</tbody></table>