---
title: subnet_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - subnet_tags
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Expands all tag keys and values for <code>subnets</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>subnet_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a subnet for the specified VPC.<br />For an IPv4 only subnet, specify an IPv4 CIDR block. If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead. For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both an IPv4 CIDR block and an IPv6 CIDR block.<br />For more information, see &#91;Subnets for your VPC&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html) in the *Amazon VPC User Guide*.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.subnet_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="assign_ipv6_address_on_creation" /></td><td><code>boolean</code></td><td>Indicates whether a network interface created in this subnet receives an IPv6 address. The default value is <code>false</code>.<br />If you specify <code>AssignIpv6AddressOnCreation</code>, you must also specify an IPv6 CIDR block.</td></tr>
<tr><td><CopyableCode code="vpc_id" /></td><td><code>string</code></td><td>The ID of the VPC the subnet is in.<br />If you update this property, you must also update the <code>CidrBlock</code> property.</td></tr>
<tr><td><CopyableCode code="map_public_ip_on_launch" /></td><td><code>boolean</code></td><td>Indicates whether instances launched in this subnet receive a public IPv4 address. The default value is <code>false</code>.<br />AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the &#91;VPC pricing page&#93;(https://docs.aws.amazon.com/vpc/pricing/).</td></tr>
<tr><td><CopyableCode code="enable_lni_at_device_index" /></td><td><code>integer</code></td><td>Indicates the device position for local network interfaces in this subnet. For example, <code>1</code> indicates local network interfaces in this subnet are the secondary network interface (eth1).</td></tr>
<tr><td><CopyableCode code="network_acl_association_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="availability_zone" /></td><td><code>string</code></td><td>The Availability Zone of the subnet.<br />If you update this property, you must also update the <code>CidrBlock</code> property.</td></tr>
<tr><td><CopyableCode code="availability_zone_id" /></td><td><code>string</code></td><td>The AZ ID of the subnet.</td></tr>
<tr><td><CopyableCode code="cidr_block" /></td><td><code>string</code></td><td>The IPv4 CIDR block assigned to the subnet.<br />If you update this property, we create a new subnet, and then delete the existing one.</td></tr>
<tr><td><CopyableCode code="subnet_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="ipv6_cidr_blocks" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="ipv6_cidr_block" /></td><td><code>string</code></td><td>The IPv6 CIDR block.<br />If you specify <code>AssignIpv6AddressOnCreation</code>, you must also specify an IPv6 CIDR block.</td></tr>
<tr><td><CopyableCode code="outpost_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Outpost.</td></tr>
<tr><td><CopyableCode code="ipv6_native" /></td><td><code>boolean</code></td><td>Indicates whether this is an IPv6 only subnet. For more information, see &#91;Subnet basics&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#subnet-basics) in the *User Guide*.</td></tr>
<tr><td><CopyableCode code="enable_dns64" /></td><td><code>boolean</code></td><td>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.<br />You must first configure a NAT gateway in a public subnet (separate from the subnet containing the IPv6-only workloads). For example, the subnet containing the NAT gateway should have a <code>0.0.0.0/0</code> route pointing to the internet gateway. For more information, see &#91;Configure DNS64 and NAT64&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-nat64-dns64.html#nat-gateway-nat64-dns64-walkthrough) in the *User Guide*.</td></tr>
<tr><td><CopyableCode code="private_dns_name_options_on_launch" /></td><td><code>object</code></td><td>The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled. For more information, see &#91;Amazon EC2 instance hostname types&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *User Guide*.<br />Available options:<br />+ EnableResourceNameDnsAAAARecord (true | false)<br />+ EnableResourceNameDnsARecord (true | false)<br />+ HostnameType (ip-name | resource-name)</td></tr>
<tr><td><CopyableCode code="ipv4_ipam_pool_id" /></td><td><code>string</code></td><td>An IPv4 IPAM pool ID for the subnet.</td></tr>
<tr><td><CopyableCode code="ipv4_netmask_length" /></td><td><code>integer</code></td><td>An IPv4 netmask length for the subnet.</td></tr>
<tr><td><CopyableCode code="ipv6_ipam_pool_id" /></td><td><code>string</code></td><td>An IPv6 IPAM pool ID for the subnet.</td></tr>
<tr><td><CopyableCode code="ipv6_netmask_length" /></td><td><code>integer</code></td><td>An IPv6 netmask length for the subnet.</td></tr>
<tr><td><CopyableCode code="tag_key" /></td><td><code>string</code></td><td>Tag key.</td></tr>
<tr><td><CopyableCode code="tag_value" /></td><td><code>string</code></td><td>Tag value.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

## Methods

<table><tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>

## `SELECT` examples
Expands tags for all <code>subnets</code> in a region.
```sql
SELECT
region,
assign_ipv6_address_on_creation,
vpc_id,
map_public_ip_on_launch,
enable_lni_at_device_index,
network_acl_association_id,
availability_zone,
availability_zone_id,
cidr_block,
subnet_id,
ipv6_cidr_blocks,
ipv6_cidr_block,
outpost_arn,
ipv6_native,
enable_dns64,
private_dns_name_options_on_launch,
ipv4_ipam_pool_id,
ipv4_netmask_length,
ipv6_ipam_pool_id,
ipv6_netmask_length,
tag_key,
tag_value
FROM aws.ec2.subnet_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>subnet_tags</code> resource, see <a href="/providers/aws/ec2/subnets/#permissions"><code>subnets</code></a>

