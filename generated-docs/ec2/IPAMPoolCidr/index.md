---
title: IPAMPoolCidr
hide_title: false
hide_table_of_contents: false
keywords:
  - IPAMPoolCidr
  - ec2
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The IPAMPoolCidr resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ec2.IPAMPoolCidr</b></span><br />
<span>resource id:&nbsp;<b>ec2:IPAMPoolCidr</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2.IPAMPoolCidr</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ec2:IPAMPoolCidr</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>IpamPoolCidrId</code></td><td><code>string</code></td><td>Id of the IPAM Pool Cidr.</td></tr><tr><td><code>IpamPoolId</code></td><td><code>string</code></td><td>Id of the IPAM Pool.</td></tr><tr><td><code>Cidr</code></td><td><code>string</code></td><td>Represents a single IPv4 or IPv6 CIDR</td></tr><tr><td><code>NetmaskLength</code></td><td><code>integer</code></td><td>The desired netmask length of the provision. If set, IPAM will choose a block of free space with this size and return the CIDR representing it.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>Provisioned state of the cidr.</td></tr>
</tbody></table>