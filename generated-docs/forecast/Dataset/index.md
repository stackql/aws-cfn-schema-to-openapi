---
title: Dataset
hide_title: false
hide_table_of_contents: false
keywords:
  - Dataset
  - forecast
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The Dataset resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>forecast.Dataset</b></span><br />
<span>resource id:&nbsp;<b>forecast:Dataset</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>forecast.Dataset</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>forecast:Dataset</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DatasetName</code></td><td><code>string</code></td><td>A name for the dataset</td></tr><tr><td><code>DatasetType</code></td><td><code>string</code></td><td>The dataset type</td></tr><tr><td><code>DataFrequency</code></td><td><code>string</code></td><td>Frequency of data collection. This parameter is required for RELATED_TIME_SERIES</td></tr><tr><td><code>Domain</code></td><td><code>string</code></td><td>The domain associated with the dataset</td></tr><tr><td><code>EncryptionConfig</code></td><td><code>object</code></td><td></td></tr><tr><td><code>Schema</code></td><td><code>object</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>