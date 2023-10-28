---
title: ModuleDefaultVersion
hide_title: false
hide_table_of_contents: false
keywords:
  - ModuleDefaultVersion
  - cloudformation
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The ModuleDefaultVersion resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>cloudformation.ModuleDefaultVersion</b></span><br />
<span>resource id:&nbsp;<b>cloudformation:ModuleDefaultVersion</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cloudformation.ModuleDefaultVersion</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>cloudformation:ModuleDefaultVersion</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the module version to set as the default version.</td></tr><tr><td><code>ModuleName</code></td><td><code>string</code></td><td>The name of a module existing in the registry.</td></tr><tr><td><code>VersionId</code></td><td><code>string</code></td><td>The ID of an existing version of the named module to set as the default.</td></tr>
</tbody></table>