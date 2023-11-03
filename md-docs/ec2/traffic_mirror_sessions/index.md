---
title: traffic_mirror_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_mirror_sessions
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
Retrieves a list of <code>traffic_mirror_sessions</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>traffic_mirror_sessions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.traffic_mirror_sessions</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TrafficMirrorTargetId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SessionNumber</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>VirtualNetworkId</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>PacketLength</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>NetworkInterfaceId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TrafficMirrorFilterId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.traffic_mirror_sessions
WHERE region = 'us-east-1'
</pre>
