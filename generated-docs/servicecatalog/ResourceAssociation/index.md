---
title: ResourceAssociation
hide_title: false
hide_table_of_contents: false
keywords:
  - ResourceAssociation
  - servicecatalog
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The ResourceAssociation resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>servicecatalog.ResourceAssociation</b></span><br />
<span>resource id:&nbsp;<b>servicecatalog:ResourceAssociation</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>servicecatalog.ResourceAssociation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>servicecatalog:ResourceAssociation</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Application</code></td><td><code>string</code></td><td>The name or the Id of the Application.</td></tr><tr><td><code>Resource</code></td><td><code>string</code></td><td>The name or the Id of the Resource.</td></tr><tr><td><code>ResourceType</code></td><td><code>string</code></td><td>The type of the CFN Resource for now it's enum CFN_STACK.</td></tr><tr><td><code>ApplicationArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ResourceArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>