---
title: transit_gateway_multicast_domain_association
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_domain_association
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
Gets an individual <code>transit_gateway_multicast_domain_association</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_multicast_domain_association</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.transit_gateway_multicast_domain_association</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>TransitGatewayMulticastDomainId</code></td><td><code>string</code></td><td>The ID of the transit gateway multicast domain.</td></tr><tr><td><code>TransitGatewayAttachmentId</code></td><td><code>string</code></td><td>The ID of the transit gateway attachment.</td></tr><tr><td><code>ResourceId</code></td><td><code>string</code></td><td>The ID of the resource.</td></tr><tr><td><code>ResourceType</code></td><td><code>string</code></td><td>The type of resource, for example a VPC attachment.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of the subnet association.</td></tr><tr><td><code>SubnetId</code></td><td><code>string</code></td><td>The IDs of the subnets to associate with the transit gateway multicast domain.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.transit_gateway_multicast_domain_association
WHERE region = 'us-east-1' AND data__Identifier = '<TransitGatewayMulticastDomainId>' AND data__Identifier = '<TransitGatewayAttachmentId>' AND data__Identifier = '<SubnetId>'
</pre>
