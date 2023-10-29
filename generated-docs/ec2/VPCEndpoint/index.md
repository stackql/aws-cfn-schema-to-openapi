---
title: VPCEndpoint
hide_title: false
hide_table_of_contents: false
keywords:
  - VPCEndpoint
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
The VPCEndpoint resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>VPCEndpoint</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.VPCEndpoint</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>CreationTimestamp</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DnsEntries</code></td><td><code>array</code></td><td></td></tr><tr><td><code>NetworkInterfaceIds</code></td><td><code>array</code></td><td></td></tr><tr><td><code>PolicyDocument</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PrivateDnsEnabled</code></td><td><code>boolean</code></td><td>Indicate whether to associate a private hosted zone with the specified VPC.</td></tr><tr><td><code>RouteTableIds</code></td><td><code>array</code></td><td>One or more route table IDs.</td></tr><tr><td><code>SecurityGroupIds</code></td><td><code>array</code></td><td>The ID of one or more security groups to associate with the endpoint network interface.</td></tr><tr><td><code>ServiceName</code></td><td><code>string</code></td><td>The service name.</td></tr><tr><td><code>SubnetIds</code></td><td><code>array</code></td><td>The ID of one or more subnets in which to create an endpoint network interface.</td></tr><tr><td><code>VpcEndpointType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>VpcId</code></td><td><code>string</code></td><td>The ID of the VPC in which the endpoint will be used.</td></tr>
</tbody></table>