---
title: Destination
hide_title: false
hide_table_of_contents: false
keywords:
  - Destination
  - iot
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Destination resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iot.Destination</b></span><br />
<span>resource id:&nbsp;<b>iot:Destination</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iot.Destination</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iot:Destination</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>Unique name of destination</td></tr><tr><td><code>Expression</code></td><td><code>string</code></td><td>Destination expression</td></tr><tr><td><code>ExpressionType</code></td><td><code>string</code></td><td>Must be RuleName</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>Destination description</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the destination.</td></tr><tr><td><code>RoleArn</code></td><td><code>string</code></td><td>AWS role ARN that grants access</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Destination arn. Returned after successful create.</td></tr>
</tbody></table>