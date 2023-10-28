---
title: IPAMPool
hide_title: false
hide_table_of_contents: false
keywords:
  - IPAMPool
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
The IPAMPool resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ec2.IPAMPool</b></span><br />
<span>resource id:&nbsp;<b>ec2:IPAMPool</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2.IPAMPool</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ec2:IPAMPool</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>IpamPoolId</code></td><td><code>string</code></td><td>Id of the IPAM Pool.</td></tr><tr><td><code>AddressFamily</code></td><td><code>string</code></td><td>The address family of the address space in this pool. Either IPv4 or IPv6.</td></tr><tr><td><code>AllocationMinNetmaskLength</code></td><td><code>integer</code></td><td>The minimum allowed netmask length for allocations made from this pool.</td></tr><tr><td><code>AllocationDefaultNetmaskLength</code></td><td><code>integer</code></td><td>The default netmask length for allocations made from this pool. This value is used when the netmask length of an allocation isn't specified.</td></tr><tr><td><code>AllocationMaxNetmaskLength</code></td><td><code>integer</code></td><td>The maximum allowed netmask length for allocations made from this pool.</td></tr><tr><td><code>AllocationResourceTags</code></td><td><code>array</code></td><td>When specified, an allocation will not be allowed unless a resource has a matching set of tags.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the IPAM Pool.</td></tr><tr><td><code>AutoImport</code></td><td><code>boolean</code></td><td>Determines what to do if IPAM discovers resources that haven't been assigned an allocation. If set to true, an allocation will be made automatically.</td></tr><tr><td><code>AwsService</code></td><td><code>string</code></td><td>Limits which service in Amazon Web Services that the pool can be used in.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>IpamScopeId</code></td><td><code>string</code></td><td>The Id of the scope this pool is a part of.</td></tr><tr><td><code>IpamScopeArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the scope this pool is a part of.</td></tr><tr><td><code>IpamScopeType</code></td><td><code>string</code></td><td>Determines whether this scope contains publicly routable space or space for a private network</td></tr><tr><td><code>IpamArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the IPAM this pool is a part of.</td></tr><tr><td><code>Locale</code></td><td><code>string</code></td><td>The region of this pool. If not set, this will default to "None" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match.</td></tr><tr><td><code>PoolDepth</code></td><td><code>integer</code></td><td>The depth of this pool in the source pool hierarchy.</td></tr><tr><td><code>ProvisionedCidrs</code></td><td><code>array</code></td><td>A list of cidrs representing the address space available for allocation in this pool.</td></tr><tr><td><code>PublicIpSource</code></td><td><code>string</code></td><td>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`.</td></tr><tr><td><code>PubliclyAdvertisable</code></td><td><code>boolean</code></td><td>Determines whether or not address space from this pool is publicly advertised. Must be set if and only if the pool is IPv6.</td></tr><tr><td><code>SourceIpamPoolId</code></td><td><code>string</code></td><td>The Id of this pool's source. If set, all space provisioned in this pool must be free space provisioned in the parent pool.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of this pool. This can be one of the following values: "create-in-progress", "create-complete", "modify-in-progress", "modify-complete", "delete-in-progress", or "delete-complete"</td></tr><tr><td><code>StateMessage</code></td><td><code>string</code></td><td>An explanation of how the pool arrived at it current state.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>