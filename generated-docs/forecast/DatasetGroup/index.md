---
title: DatasetGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - DatasetGroup
  - forecast
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The DatasetGroup resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>forecast.DatasetGroup</b></span><br />
<span>resource id:&nbsp;<b>forecast:DatasetGroup</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>forecast.DatasetGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>forecast:DatasetGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>DatasetArns</code></td><td><code>array</code></td><td>An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.</td></tr><tr><td><code>DatasetGroupName</code></td><td><code>string</code></td><td>A name for the dataset group.</td></tr><tr><td><code>Domain</code></td><td><code>string</code></td><td>The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDataset operation must match.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags of Application Insights application.</td></tr><tr><td><code>DatasetGroupArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the dataset group to delete.</td></tr>
</tbody></table>