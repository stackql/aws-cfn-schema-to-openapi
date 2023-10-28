---
title: VPC
hide_title: false
hide_table_of_contents: false
keywords:
  - VPC
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
The VPC resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ec2.VPC</b></span><br />
<span>resource id:&nbsp;<b>ec2:VPC</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2.VPC</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ec2:VPC</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>VpcId</code></td><td><code>string</code></td><td>The Id for the model.</td></tr><tr><td><code>CidrBlock</code></td><td><code>string</code></td><td>The primary IPv4 CIDR block for the VPC.</td></tr><tr><td><code>CidrBlockAssociations</code></td><td><code>array</code></td><td>A list of IPv4 CIDR block association IDs for the VPC.</td></tr><tr><td><code>DefaultNetworkAcl</code></td><td><code>string</code></td><td>The default network ACL ID that is associated with the VPC.</td></tr><tr><td><code>DefaultSecurityGroup</code></td><td><code>string</code></td><td>The default security group ID that is associated with the VPC.</td></tr><tr><td><code>Ipv6CidrBlocks</code></td><td><code>array</code></td><td>A list of IPv6 CIDR blocks that are associated with the VPC.</td></tr><tr><td><code>EnableDnsHostnames</code></td><td><code>boolean</code></td><td>Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not. Disabled by default for nondefault VPCs.</td></tr><tr><td><code>EnableDnsSupport</code></td><td><code>boolean</code></td><td>Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is not enabled. Enabled by default.</td></tr><tr><td><code>InstanceTenancy</code></td><td><code>string</code></td><td>The allowed tenancy of instances launched into the VPC.

"default": An instance launched into the VPC runs on shared hardware by default, unless you explicitly specify a different tenancy during instance launch.

"dedicated": An instance launched into the VPC is a Dedicated Instance by default, unless you explicitly specify a tenancy of host during instance launch. You cannot specify a tenancy of default during instance launch.

Updating InstanceTenancy requires no replacement only if you are updating its value from "dedicated" to "default". Updating InstanceTenancy from "default" to "dedicated" requires replacement.</td></tr><tr><td><code>Ipv4IpamPoolId</code></td><td><code>string</code></td><td>The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR</td></tr><tr><td><code>Ipv4NetmaskLength</code></td><td><code>integer</code></td><td>The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags for the VPC.</td></tr>
</tbody></table>