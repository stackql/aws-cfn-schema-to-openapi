---
title: subnets
hide_title: false
hide_table_of_contents: false
keywords:
  - subnets
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
Retrieves a list of <code>subnets</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>subnets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.subnets</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>AssignIpv6AddressOnCreation</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>VpcId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>MapPublicIpOnLaunch</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>NetworkAclAssociationId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AvailabilityZone</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AvailabilityZoneId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>CidrBlock</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SubnetId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Ipv6CidrBlocks</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Ipv6CidrBlock</code></td><td><code>string</code></td><td></td></tr><tr><td><code>OutpostArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Ipv6Native</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>EnableDns64</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>PrivateDnsNameOptionsOnLaunch</code></td><td><code>object</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.subnets
WHERE region = 'us-east-1'
</pre>
