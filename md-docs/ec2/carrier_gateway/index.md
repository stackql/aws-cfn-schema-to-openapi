---
title: carrier_gateway
hide_title: false
hide_table_of_contents: false
keywords:
  - carrier_gateway
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
Gets an individual <code>carrier_gateway</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>carrier_gateway</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.carrier_gateway</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>CarrierGatewayId</code></td><td><code>string</code></td><td>The ID of the carrier gateway.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of the carrier gateway.</td></tr><tr><td><code>VpcId</code></td><td><code>string</code></td><td>The ID of the VPC.</td></tr><tr><td><code>OwnerId</code></td><td><code>string</code></td><td>The ID of the owner.</td></tr><tr><td><code>Tags</code></td><td><code>undefined</code></td><td>The tags for the carrier gateway.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.carrier_gateway
WHERE region = 'us-east-1' AND data__Identifier = '<CarrierGatewayId>'
</pre>
