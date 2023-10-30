---
title: transit_gateway_peering_attachment
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_peering_attachment
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
The transit_gateway_peering_attachment resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_peering_attachment</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.transit_gateway_peering_attachment</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Status</code></td><td><code>undefined</code></td><td>The status of the transit gateway peering attachment.</td></tr><tr><td><code>TransitGatewayId</code></td><td><code>string</code></td><td>The ID of the transit gateway.</td></tr><tr><td><code>PeerTransitGatewayId</code></td><td><code>string</code></td><td>The ID of the peer transit gateway.</td></tr><tr><td><code>PeerAccountId</code></td><td><code>string</code></td><td>The ID of the peer account</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of the transit gateway peering attachment. Note that the initiating state has been deprecated.</td></tr><tr><td><code>CreationTime</code></td><td><code>string</code></td><td>The time the transit gateway peering attachment was created.</td></tr><tr><td><code>PeerRegion</code></td><td><code>string</code></td><td>Peer Region</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags for the transit gateway peering attachment.</td></tr><tr><td><code>TransitGatewayAttachmentId</code></td><td><code>string</code></td><td>The ID of the transit gateway peering attachment.</td></tr>
</tbody></table>