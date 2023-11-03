---
title: transit_gateway
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway
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
Gets an individual <code>transit_gateway</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.transit_gateway</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>DefaultRouteTablePropagation</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AutoAcceptSharedAttachments</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DefaultRouteTableAssociation</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>VpnEcmpSupport</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DnsSupport</code></td><td><code>string</code></td><td></td></tr><tr><td><code>MulticastSupport</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AmazonSideAsn</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>TransitGatewayCidrBlocks</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr><tr><td><code>AssociationDefaultRouteTableId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PropagationDefaultRouteTableId</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.transit_gateway
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>
