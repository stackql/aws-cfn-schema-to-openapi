---
title: CustomDataIdentifier
hide_title: false
hide_table_of_contents: false
keywords:
  - CustomDataIdentifier
  - macie
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The CustomDataIdentifier resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>macie.CustomDataIdentifier</b></span><br />
<span>resource id:&nbsp;<b>macie:CustomDataIdentifier</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>macie.CustomDataIdentifier</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>macie:CustomDataIdentifier</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>Name of custom data identifier.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>Description of custom data identifier.</td></tr><tr><td><code>Regex</code></td><td><code>string</code></td><td>Regular expression for custom data identifier.</td></tr><tr><td><code>MaximumMatchDistance</code></td><td><code>integer</code></td><td>Maximum match distance.</td></tr><tr><td><code>Keywords</code></td><td><code>array</code></td><td>Keywords to be matched against.</td></tr><tr><td><code>IgnoreWords</code></td><td><code>array</code></td><td>Words to be ignored.</td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td>Custom data identifier ID.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Custom data identifier ARN.</td></tr>
</tbody></table>