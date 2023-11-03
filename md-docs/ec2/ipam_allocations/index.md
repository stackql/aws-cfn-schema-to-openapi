---
title: ipam_allocations
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_allocations
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
Retrieves a list of <code>ipam_allocations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ipam_allocations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.ipam_allocations</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>IpamPoolAllocationId</code></td><td><code>string</code></td><td>Id of the allocation.</td></tr><tr><td><code>IpamPoolId</code></td><td><code>string</code></td><td>Id of the IPAM Pool.</td></tr><tr><td><code>Cidr</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>NetmaskLength</code></td><td><code>integer</code></td><td>The desired netmask length of the allocation. If set, IPAM will choose a block of free space with this size and return the CIDR representing it.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.ipam_allocations
WHERE region = 'us-east-1'
</pre>
