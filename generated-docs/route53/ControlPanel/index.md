---
title: ControlPanel
hide_title: false
hide_table_of_contents: false
keywords:
  - ControlPanel
  - route53
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The ControlPanel resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>route53.ControlPanel</b></span><br />
<span>resource id:&nbsp;<b>route53:ControlPanel</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>route53.ControlPanel</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>route53:ControlPanel</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ClusterArn</code></td><td><code>string</code></td><td>Cluster to associate with the Control Panel</td></tr><tr><td><code>ControlPanelArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the cluster.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>The name of the control panel. You can use any non-white space character in the name.</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</td></tr><tr><td><code>DefaultControlPanel</code></td><td><code>boolean</code></td><td>A flag that Amazon Route 53 Application Recovery Controller sets to true to designate the default control panel for a cluster. When you create a cluster, Amazon Route 53 Application Recovery Controller creates a control panel, and sets this flag for that control panel. If you create a control panel yourself, this flag is set to false.</td></tr><tr><td><code>RoutingControlCount</code></td><td><code>integer</code></td><td>Count of associated routing controls</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A collection of tags associated with a resource</td></tr>
</tbody></table>