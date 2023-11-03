---
title: transit_gateway_multicast_domain
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_domain
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
Gets an individual <code>transit_gateway_multicast_domain</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_multicast_domain</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.transit_gateway_multicast_domain</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>TransitGatewayMulticastDomainId</code></td><td><code>string</code></td><td>The ID of the transit gateway multicast domain.</td></tr><tr><td><code>TransitGatewayMulticastDomainArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the transit gateway multicast domain.</td></tr><tr><td><code>TransitGatewayId</code></td><td><code>string</code></td><td>The ID of the transit gateway.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of the transit gateway multicast domain.</td></tr><tr><td><code>CreationTime</code></td><td><code>string</code></td><td>The time the transit gateway multicast domain was created.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags for the transit gateway multicast domain.</td></tr><tr><td><code>Options</code></td><td><code>object</code></td><td>The options for the transit gateway multicast domain.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.transit_gateway_multicast_domain
WHERE region = 'us-east-1' AND data__Identifier = '<TransitGatewayMulticastDomainId>'
</pre>
