---
title: security_group_ingresses
hide_title: false
hide_table_of_contents: false
keywords:
  - security_group_ingresses
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
Retrieves a list of <code>security_group_ingresses</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_group_ingresses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.security_group_ingresses</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>CidrIp</code></td><td><code>string</code></td><td></td></tr><tr><td><code>CidrIpv6</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>FromPort</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>GroupId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>GroupName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>IpProtocol</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SourcePrefixListId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SourceSecurityGroupId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SourceSecurityGroupName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SourceSecurityGroupOwnerId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ToPort</code></td><td><code>integer</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.security_group_ingresses
WHERE region = 'us-east-1'
</pre>