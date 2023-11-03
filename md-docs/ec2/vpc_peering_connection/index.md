---
title: vpc_peering_connection
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_peering_connection
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
Gets an individual <code>vpc_peering_connection</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpc_peering_connection</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.vpc_peering_connection</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PeerOwnerId</code></td><td><code>string</code></td><td>The AWS account ID of the owner of the accepter VPC.</td></tr><tr><td><code>PeerRegion</code></td><td><code>string</code></td><td>The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.</td></tr><tr><td><code>PeerRoleArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account.</td></tr><tr><td><code>PeerVpcId</code></td><td><code>string</code></td><td>The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request.</td></tr><tr><td><code>VpcId</code></td><td><code>string</code></td><td>The ID of the VPC.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.vpc_peering_connection
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>
