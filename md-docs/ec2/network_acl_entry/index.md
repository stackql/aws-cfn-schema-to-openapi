---
title: network_acl_entry
hide_title: false
hide_table_of_contents: false
keywords:
  - network_acl_entry
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
Gets an individual <code>network_acl_entry</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>network_acl_entry</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.network_acl_entry</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PortRange</code></td><td><code>undefined</code></td><td>The IPv4 network range to allow or deny, in CIDR notation (for example 172.16.0.0/24). We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18</td></tr><tr><td><code>NetworkAclId</code></td><td><code>string</code></td><td>The ID of the network ACL</td></tr><tr><td><code>RuleAction</code></td><td><code>string</code></td><td>Indicates whether to allow or deny the traffic that matches the rule</td></tr><tr><td><code>CidrBlock</code></td><td><code>string</code></td><td>The IPv4 CIDR range to allow or deny, in CIDR notation (for example, 172.16.0.0/24). Requirement is conditional: You must specify the CidrBlock or Ipv6CidrBlock property</td></tr><tr><td><code>Egress</code></td><td><code>boolean</code></td><td>Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet)</td></tr><tr><td><code>RuleNumber</code></td><td><code>integer</code></td><td>Rule number to assign to the entry, such as 100. ACL entries are processed in ascending order by rule number. Entries can't use the same rule number unless one is an egress rule and the other is an ingress rule</td></tr><tr><td><code>Ipv6CidrBlock</code></td><td><code>string</code></td><td>The IPv6 network range to allow or deny, in CIDR notation (for example 2001:db8:1234:1a00::/64)</td></tr><tr><td><code>Protocol</code></td><td><code>integer</code></td><td>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is allowed, regardless of any ports or ICMP types or codes that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv6 CIDR block, you must specify an ICMP type and code</td></tr><tr><td><code>Icmp</code></td><td><code>undefined</code></td><td>The Internet Control Message Protocol (ICMP) code and type. Requirement is conditional: Required if specifying 1 (ICMP) for the protocol parameter</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.network_acl_entry
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>
