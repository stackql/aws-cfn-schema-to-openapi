---
title: Entity
hide_title: false
hide_table_of_contents: false
keywords:
  - Entity
  - iot
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Entity resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iot.Entity</b></span><br />
<span>resource id:&nbsp;<b>iot:Entity</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iot.Entity</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iot:Entity</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>EntityId</code></td><td><code>string</code></td><td>The ID of the entity.</td></tr><tr><td><code>EntityName</code></td><td><code>string</code></td><td>The name of the entity.</td></tr><tr><td><code>Status</code></td><td><code>undefined</code></td><td>The current status of the entity.</td></tr><tr><td><code>HasChildEntities</code></td><td><code>boolean</code></td><td>A Boolean value that specifies whether the entity has child entities or not.</td></tr><tr><td><code>ParentEntityId</code></td><td><code>string</code></td><td>The ID of the parent entity.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The ARN of the entity.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>The description of the entity.</td></tr><tr><td><code>CreationDateTime</code></td><td><code>undefined</code></td><td>The date and time when the entity was created.</td></tr><tr><td><code>UpdateDateTime</code></td><td><code>undefined</code></td><td>The last date and time when the entity was updated.</td></tr><tr><td><code>Tags</code></td><td><code>object</code></td><td>A key-value pair to associate with a resource.</td></tr><tr><td><code>WorkspaceId</code></td><td><code>string</code></td><td>The ID of the workspace.</td></tr><tr><td><code>Components</code></td><td><code>object</code></td><td>A map that sets information about a component type.</td></tr>
</tbody></table>