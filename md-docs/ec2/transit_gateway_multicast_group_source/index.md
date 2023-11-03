---
title: transit_gateway_multicast_group_source
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_group_source
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
Gets an individual <code>transit_gateway_multicast_group_source</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_multicast_group_source</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.transit_gateway_multicast_group_source</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>GroupIpAddress</code></td><td><code>string</code></td><td>The IP address assigned to the transit gateway multicast group.</td></tr><tr><td><code>TransitGatewayAttachmentId</code></td><td><code>string</code></td><td>The ID of the transit gateway attachment.</td></tr><tr><td><code>TransitGatewayMulticastDomainId</code></td><td><code>string</code></td><td>The ID of the transit gateway multicast domain.</td></tr><tr><td><code>SubnetId</code></td><td><code>string</code></td><td>The ID of the subnet.</td></tr><tr><td><code>ResourceId</code></td><td><code>string</code></td><td>The ID of the resource.</td></tr><tr><td><code>ResourceType</code></td><td><code>string</code></td><td>The type of resource, for example a VPC attachment.</td></tr><tr><td><code>NetworkInterfaceId</code></td><td><code>string</code></td><td>The ID of the transit gateway attachment.</td></tr><tr><td><code>GroupMember</code></td><td><code>boolean</code></td><td>Indicates that the resource is a transit gateway multicast group member.</td></tr><tr><td><code>GroupSource</code></td><td><code>boolean</code></td><td>Indicates that the resource is a transit gateway multicast group member.</td></tr><tr><td><code>MemberType</code></td><td><code>string</code></td><td>The member type (for example, static).</td></tr><tr><td><code>SourceType</code></td><td><code>string</code></td><td>The source type.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.transit_gateway_multicast_group_source
WHERE region = 'us-east-1' AND data__Identifier = '<TransitGatewayMulticastDomainId>' AND data__Identifier = '<GroupIpAddress>' AND data__Identifier = '<NetworkInterfaceId>'
</pre>
