---
title: Analyzer
hide_title: false
hide_table_of_contents: false
keywords:
  - Analyzer
  - accessanalyzer
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Analyzer resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>accessanalyzer.Analyzer</b></span><br />
<span>resource id:&nbsp;<b>accessanalyzer:Analyzer</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>accessanalyzer.Analyzer</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>accessanalyzer:Analyzer</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>AnalyzerName</code></td><td><code>string</code></td><td>Analyzer name</td></tr><tr><td><code>ArchiveRules</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Amazon Resource Name (ARN) of the analyzer</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr><tr><td><code>Type</code></td><td><code>string</code></td><td>The type of the analyzer, must be ACCOUNT or ORGANIZATION</td></tr>
</tbody></table>