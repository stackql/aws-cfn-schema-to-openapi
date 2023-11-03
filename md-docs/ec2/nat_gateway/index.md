---
title: nat_gateway
hide_title: false
hide_table_of_contents: false
keywords:
  - nat_gateway
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
Gets an individual <code>nat_gateway</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>nat_gateway</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.nat_gateway</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>SubnetId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>NatGatewayId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ConnectivityType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PrivateIpAddress</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr><tr><td><code>AllocationId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SecondaryAllocationIds</code></td><td><code>array</code></td><td></td></tr><tr><td><code>SecondaryPrivateIpAddresses</code></td><td><code>array</code></td><td></td></tr><tr><td><code>SecondaryPrivateIpAddressCount</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>MaxDrainDurationSeconds</code></td><td><code>integer</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.nat_gateway
WHERE region = 'us-east-1' AND data__Identifier = '<NatGatewayId>'
</pre>
