---
title: DHCPOptions
hide_title: false
hide_table_of_contents: false
keywords:
  - DHCPOptions
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
The DHCPOptions resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>DHCPOptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.DHCPOptions</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>DhcpOptionsId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DomainName</code></td><td><code>string</code></td><td>This value is used to complete unqualified DNS hostnames.</td></tr><tr><td><code>DomainNameServers</code></td><td><code>array</code></td><td>The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS.</td></tr><tr><td><code>NetbiosNameServers</code></td><td><code>array</code></td><td>The IPv4 addresses of up to four NetBIOS name servers.</td></tr><tr><td><code>NetbiosNodeType</code></td><td><code>integer</code></td><td>The NetBIOS node type (1, 2, 4, or 8).</td></tr><tr><td><code>NtpServers</code></td><td><code>array</code></td><td>The IPv4 addresses of up to four Network Time Protocol (NTP) servers.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>Any tags assigned to the DHCP options set.</td></tr>
</tbody></table>