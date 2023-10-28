---
title: SignalingChannel
hide_title: false
hide_table_of_contents: false
keywords:
  - SignalingChannel
  - kinesis
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The SignalingChannel resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>kinesis.SignalingChannel</b></span><br />
<span>resource id:&nbsp;<b>kinesis:SignalingChannel</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>kinesis.SignalingChannel</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>kinesis:SignalingChannel</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Kinesis Video Signaling Channel.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>The name of the Kinesis Video Signaling Channel.</td></tr><tr><td><code>Type</code></td><td><code>string</code></td><td>The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type.</td></tr><tr><td><code>MessageTtlSeconds</code></td><td><code>integer</code></td><td>The period of time a signaling channel retains undelivered messages before they are discarded.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>