---
title: TagAssociation
hide_title: false
hide_table_of_contents: false
keywords:
  - TagAssociation
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
The TagAssociation resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>lakeformation.TagAssociation</b></span><br />
<span>resource id:&nbsp;<b>lakeformation:TagAssociation</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>lakeformation.TagAssociation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>lakeformation:TagAssociation</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Resource</code></td><td><code>undefined</code></td><td>Resource to tag with the Lake Formation Tags</td></tr><tr><td><code>LFTags</code></td><td><code>undefined</code></td><td>List of Lake Formation Tags to associate with the Lake Formation Resource</td></tr><tr><td><code>ResourceIdentifier</code></td><td><code>string</code></td><td>Unique string identifying the resource. Used as primary identifier, which ideally should be a string</td></tr><tr><td><code>TagsIdentifier</code></td><td><code>string</code></td><td>Unique string identifying the resource's tags. Used as primary identifier, which ideally should be a string</td></tr>
</tbody></table>