---
title: ResourceDefaultVersion
hide_title: false
hide_table_of_contents: false
keywords:
  - ResourceDefaultVersion
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
The ResourceDefaultVersion resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>cloudformation.ResourceDefaultVersion</b></span><br />
<span>resource id:&nbsp;<b>cloudformation:ResourceDefaultVersion</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cloudformation.ResourceDefaultVersion</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>cloudformation:ResourceDefaultVersion</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>TypeVersionArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the type version.</td></tr><tr><td><code>TypeName</code></td><td><code>string</code></td><td>The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a ResourceDefaultVersion</td></tr><tr><td><code>VersionId</code></td><td><code>string</code></td><td>The ID of an existing version of the resource to set as the default.</td></tr>
</tbody></table>