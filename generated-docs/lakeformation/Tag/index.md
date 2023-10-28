---
title: Tag
hide_title: false
hide_table_of_contents: false
keywords:
  - Tag
  - lakeformation
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Tag resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>lakeformation.Tag</b></span><br />
<span>resource id:&nbsp;<b>lakeformation:Tag</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>lakeformation.Tag</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>lakeformation:Tag</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>CatalogId</code></td><td><code>undefined</code></td><td>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.</td></tr><tr><td><code>TagKey</code></td><td><code>undefined</code></td><td>The key-name for the LF-tag.</td></tr><tr><td><code>TagValues</code></td><td><code>undefined</code></td><td>A list of possible values an attribute can take.</td></tr>
</tbody></table>