---
title: Room
hide_title: false
hide_table_of_contents: false
keywords:
  - Room
  - ivschat
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Room resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ivschat.Room</b></span><br />
<span>resource id:&nbsp;<b>ivschat:Room</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ivschat.Room</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ivschat:Room</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td>Room ARN is automatically generated on creation and assigned as the unique identifier.</td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td>The system-generated ID of the room.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>The name of the room. The value does not need to be unique.</td></tr><tr><td><code>LoggingConfigurationIdentifiers</code></td><td><code>array</code></td><td>Array of logging configuration identifiers attached to the room.</td></tr><tr><td><code>MaximumMessageLength</code></td><td><code>integer</code></td><td>The maximum number of characters in a single message.</td></tr><tr><td><code>MaximumMessageRatePerSecond</code></td><td><code>integer</code></td><td>The maximum number of messages per second that can be sent to the room.</td></tr><tr><td><code>MessageReviewHandler</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>