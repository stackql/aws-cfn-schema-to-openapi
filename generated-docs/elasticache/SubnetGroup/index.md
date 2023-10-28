---
title: SubnetGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - SubnetGroup
  - elasticache
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The SubnetGroup resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>elasticache.SubnetGroup</b></span><br />
<span>resource id:&nbsp;<b>elasticache:SubnetGroup</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>elasticache.SubnetGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>elasticache:SubnetGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Description</code></td><td><code>string</code></td><td>The description for the cache subnet group.</td></tr><tr><td><code>SubnetIds</code></td><td><code>array</code></td><td>The EC2 subnet IDs for the cache subnet group.</td></tr><tr><td><code>CacheSubnetGroupName</code></td><td><code>string</code></td><td>The name for the cache subnet group. This value is stored as a lowercase string.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>