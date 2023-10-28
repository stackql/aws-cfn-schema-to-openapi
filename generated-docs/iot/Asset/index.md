---
title: Asset
hide_title: false
hide_table_of_contents: false
keywords:
  - Asset
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
The Asset resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iot.Asset</b></span><br />
<span>resource id:&nbsp;<b>iot:Asset</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iot.Asset</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iot:Asset</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>AssetId</code></td><td><code>string</code></td><td>The ID of the asset</td></tr><tr><td><code>AssetModelId</code></td><td><code>string</code></td><td>The ID of the asset model from which to create the asset.</td></tr><tr><td><code>AssetArn</code></td><td><code>string</code></td><td>The ARN of the asset</td></tr><tr><td><code>AssetName</code></td><td><code>string</code></td><td>A unique, friendly name for the asset.</td></tr><tr><td><code>AssetDescription</code></td><td><code>string</code></td><td>A description for the asset</td></tr><tr><td><code>AssetProperties</code></td><td><code>array</code></td><td></td></tr><tr><td><code>AssetHierarchies</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the asset.</td></tr>
</tbody></table>