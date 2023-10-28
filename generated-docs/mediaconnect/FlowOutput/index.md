---
title: FlowOutput
hide_title: false
hide_table_of_contents: false
keywords:
  - FlowOutput
  - mediaconnect
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The FlowOutput resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>mediaconnect.FlowOutput</b></span><br />
<span>resource id:&nbsp;<b>mediaconnect:FlowOutput</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>mediaconnect.FlowOutput</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>mediaconnect:FlowOutput</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>FlowArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.</td></tr><tr><td><code>OutputArn</code></td><td><code>string</code></td><td>The ARN of the output.</td></tr><tr><td><code>CidrAllowList</code></td><td><code>array</code></td><td>The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.</td></tr><tr><td><code>Encryption</code></td><td><code>undefined</code></td><td>The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>A description of the output.</td></tr><tr><td><code>Destination</code></td><td><code>string</code></td><td>The address where you want to send the output.</td></tr><tr><td><code>MaxLatency</code></td><td><code>integer</code></td><td>The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.</td></tr><tr><td><code>MinLatency</code></td><td><code>integer</code></td><td>The minimum latency in milliseconds.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>The name of the output. This value must be unique within the current flow.</td></tr><tr><td><code>Port</code></td><td><code>integer</code></td><td>The port to use when content is distributed to this output.</td></tr><tr><td><code>Protocol</code></td><td><code>string</code></td><td>The protocol that is used by the source or output.</td></tr><tr><td><code>RemoteId</code></td><td><code>string</code></td><td>The remote ID for the Zixi-pull stream.</td></tr><tr><td><code>SmoothingLatency</code></td><td><code>integer</code></td><td>The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.</td></tr><tr><td><code>StreamId</code></td><td><code>string</code></td><td>The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.</td></tr><tr><td><code>VpcInterfaceAttachment</code></td><td><code>undefined</code></td><td>The name of the VPC interface attachment to use for this output.</td></tr>
</tbody></table>