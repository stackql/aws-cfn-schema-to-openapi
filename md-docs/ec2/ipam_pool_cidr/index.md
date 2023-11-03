---
title: ipam_pool_cidr
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_pool_cidr
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
Gets an individual <code>ipam_pool_cidr</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ipam_pool_cidr</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.ipam_pool_cidr</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>IpamPoolCidrId</code></td><td><code>string</code></td><td>Id of the IPAM Pool Cidr.</td></tr><tr><td><code>IpamPoolId</code></td><td><code>string</code></td><td>Id of the IPAM Pool.</td></tr><tr><td><code>Cidr</code></td><td><code>string</code></td><td>Represents a single IPv4 or IPv6 CIDR</td></tr><tr><td><code>NetmaskLength</code></td><td><code>integer</code></td><td>The desired netmask length of the provision. If set, IPAM will choose a block of free space with this size and return the CIDR representing it.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>Provisioned state of the cidr.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.ipam_pool_cidr
WHERE region = 'us-east-1' AND data__Identifier = '<IpamPoolId>' AND data__Identifier = '<IpamPoolCidrId>'
</pre>
