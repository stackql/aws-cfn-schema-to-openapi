---
title: UserGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - UserGroup
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
The UserGroup resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>elasticache.UserGroup</b></span><br />
<span>resource id:&nbsp;<b>elasticache:UserGroup</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>elasticache.UserGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>elasticache:UserGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Status</code></td><td><code>string</code></td><td>Indicates user group status. Can be "creating", "active", "modifying", "deleting".</td></tr><tr><td><code>UserGroupId</code></td><td><code>string</code></td><td>The ID of the user group.</td></tr><tr><td><code>Engine</code></td><td><code>string</code></td><td>Must be redis.</td></tr><tr><td><code>UserIds</code></td><td><code>array</code></td><td>List of users associated to this user group.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the user account.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this user.</td></tr>
</tbody></table>