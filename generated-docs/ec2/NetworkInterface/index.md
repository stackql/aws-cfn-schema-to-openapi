---
title: NetworkInterface
hide_title: false
hide_table_of_contents: false
keywords:
  - NetworkInterface
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
The NetworkInterface resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>NetworkInterface</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.NetworkInterface</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Description</code></td><td><code>string</code></td><td>A description for the network interface.</td></tr><tr><td><code>PrivateIpAddress</code></td><td><code>string</code></td><td>Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property. </td></tr><tr><td><code>PrivateIpAddresses</code></td><td><code>array</code></td><td>Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.</td></tr><tr><td><code>SecondaryPrivateIpAddressCount</code></td><td><code>integer</code></td><td>The number of secondary private IPv4 addresses to assign to a network interface. When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses</td></tr><tr><td><code>PrimaryPrivateIpAddress</code></td><td><code>string</code></td><td>Returns the primary private IP address of the network interface.</td></tr><tr><td><code>GroupSet</code></td><td><code>array</code></td><td>A list of security group IDs associated with this network interface.</td></tr><tr><td><code>Ipv6Addresses</code></td><td><code>array</code></td><td>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.</td></tr><tr><td><code>SubnetId</code></td><td><code>string</code></td><td>The ID of the subnet to associate with the network interface.</td></tr><tr><td><code>SourceDestCheck</code></td><td><code>boolean</code></td><td>Indicates whether traffic to or from the instance is validated.</td></tr><tr><td><code>InterfaceType</code></td><td><code>string</code></td><td>Indicates the type of network interface.</td></tr><tr><td><code>SecondaryPrivateIpAddresses</code></td><td><code>array</code></td><td>Returns the secondary private IP addresses of the network interface.</td></tr><tr><td><code>Ipv6AddressCount</code></td><td><code>integer</code></td><td>The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.</td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td>Network interface id.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An arbitrary set of tags (key-value pairs) for this network interface.</td></tr>
</tbody></table>