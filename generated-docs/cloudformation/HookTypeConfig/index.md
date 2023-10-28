---
title: HookTypeConfig
hide_title: false
hide_table_of_contents: false
keywords:
  - HookTypeConfig
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
The HookTypeConfig resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>cloudformation.HookTypeConfig</b></span><br />
<span>resource id:&nbsp;<b>cloudformation:HookTypeConfig</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cloudformation.HookTypeConfig</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>cloudformation:HookTypeConfig</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>TypeArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the type without version number.</td></tr><tr><td><code>TypeName</code></td><td><code>string</code></td><td>The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.</td></tr><tr><td><code>ConfigurationArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) for the configuration data, in this account and region.</td></tr><tr><td><code>Configuration</code></td><td><code>string</code></td><td>The configuration data for the extension, in this account and region.</td></tr><tr><td><code>ConfigurationAlias</code></td><td><code>string</code></td><td>An alias by which to refer to this extension configuration data.</td></tr>
</tbody></table>