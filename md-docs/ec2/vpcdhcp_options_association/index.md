---
title: vpcdhcp_options_association
hide_title: false
hide_table_of_contents: false
keywords:
  - vpcdhcp_options_association
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
Gets an individual <code>vpcdhcp_options_association</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpcdhcp_options_association</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.vpcdhcp_options_association</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>DhcpOptionsId</code></td><td><code>string</code></td><td>The ID of the DHCP options set, or default to associate no DHCP options with the VPC.</td></tr><tr><td><code>VpcId</code></td><td><code>string</code></td><td>The ID of the VPC.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.vpcdhcp_options_association
WHERE region = 'us-east-1' AND data__Identifier = '<DhcpOptionsId>' AND data__Identifier = '<VpcId>'
</pre>
