---
title: Listener
hide_title: false
hide_table_of_contents: false
keywords:
  - Listener
  - globalaccelerator
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Listener resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>globalaccelerator.Listener</b></span><br />
<span>resource id:&nbsp;<b>globalaccelerator:Listener</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>globalaccelerator.Listener</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>globalaccelerator:Listener</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ListenerArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the listener.</td></tr><tr><td><code>AcceleratorArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the accelerator.</td></tr><tr><td><code>PortRanges</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Protocol</code></td><td><code>string</code></td><td>The protocol for the listener.</td></tr><tr><td><code>ClientAffinity</code></td><td><code>string</code></td><td>Client affinity lets you direct all requests from a user to the same endpoint.</td></tr>
</tbody></table>