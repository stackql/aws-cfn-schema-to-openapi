---
title: FlowEntitlement
hide_title: false
hide_table_of_contents: false
keywords:
  - FlowEntitlement
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
The FlowEntitlement resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>mediaconnect.FlowEntitlement</b></span><br />
<span>resource id:&nbsp;<b>mediaconnect:FlowEntitlement</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>mediaconnect.FlowEntitlement</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>mediaconnect:FlowEntitlement</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>FlowArn</code></td><td><code>string</code></td><td>The ARN of the flow.</td></tr><tr><td><code>EntitlementArn</code></td><td><code>string</code></td><td>The ARN of the entitlement.</td></tr><tr><td><code>DataTransferSubscriberFeePercent</code></td><td><code>integer</code></td><td>Percentage from 0-100 of the data transfer cost to be billed to the subscriber.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>A description of the entitlement.</td></tr><tr><td><code>Encryption</code></td><td><code>undefined</code></td><td>The type of encryption that will be used on the output that is associated with this entitlement.</td></tr><tr><td><code>EntitlementStatus</code></td><td><code>string</code></td><td> An indication of whether the entitlement is enabled.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>The name of the entitlement.</td></tr><tr><td><code>Subscribers</code></td><td><code>array</code></td><td>The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.</td></tr>
</tbody></table>