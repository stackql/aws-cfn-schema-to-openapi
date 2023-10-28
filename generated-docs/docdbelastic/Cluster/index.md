---
title: Cluster
hide_title: false
hide_table_of_contents: false
keywords:
  - Cluster
  - docdbelastic
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Cluster resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>docdbelastic.Cluster</b></span><br />
<span>resource id:&nbsp;<b>docdbelastic:Cluster</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>docdbelastic.Cluster</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>docdbelastic:Cluster</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ClusterName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ClusterArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ClusterEndpoint</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AdminUserName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AdminUserPassword</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ShardCapacity</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>ShardCount</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>VpcSecurityGroupIds</code></td><td><code>array</code></td><td></td></tr><tr><td><code>SubnetIds</code></td><td><code>array</code></td><td></td></tr><tr><td><code>PreferredMaintenanceWindow</code></td><td><code>string</code></td><td></td></tr><tr><td><code>KmsKeyId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr><tr><td><code>AuthType</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>