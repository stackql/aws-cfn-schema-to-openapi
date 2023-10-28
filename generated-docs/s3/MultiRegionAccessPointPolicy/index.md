---
title: MultiRegionAccessPointPolicy
hide_title: false
hide_table_of_contents: false
keywords:
  - MultiRegionAccessPointPolicy
  - s3
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The MultiRegionAccessPointPolicy resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>s3.MultiRegionAccessPointPolicy</b></span><br />
<span>resource id:&nbsp;<b>s3:MultiRegionAccessPointPolicy</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>s3.MultiRegionAccessPointPolicy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>s3:MultiRegionAccessPointPolicy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>MrapName</code></td><td><code>string</code></td><td>The name of the Multi Region Access Point to apply policy</td></tr><tr><td><code>Policy</code></td><td><code>object</code></td><td>Policy document to apply to a Multi Region Access Point</td></tr><tr><td><code>PolicyStatus</code></td><td><code>object</code></td><td>The Policy Status associated with this Multi Region Access Point</td></tr>
</tbody></table>