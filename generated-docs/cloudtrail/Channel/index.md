---
title: Channel
hide_title: false
hide_table_of_contents: false
keywords:
  - Channel
  - cloudtrail
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Channel resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>cloudtrail.Channel</b></span><br />
<span>resource id:&nbsp;<b>cloudtrail:Channel</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cloudtrail.Channel</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>cloudtrail:Channel</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Source</code></td><td><code>string</code></td><td>The ARN of an on-premises storage solution or application, or a partner event source.</td></tr><tr><td><code>Destinations</code></td><td><code>array</code></td><td>One or more resources to which events arriving through a channel are logged and stored.</td></tr><tr><td><code>ChannelArn</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>