---
title: Rule
hide_title: false
hide_table_of_contents: false
keywords:
  - Rule
  - connect
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Rule resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>connect.Rule</b></span><br />
<span>resource id:&nbsp;<b>connect:Rule</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connect.Rule</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>connect:Rule</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>The name of the rule.</td></tr><tr><td><code>RuleArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the rule.</td></tr><tr><td><code>InstanceArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the instance.</td></tr><tr><td><code>TriggerEventSource</code></td><td><code>undefined</code></td><td>The event source that triggers the rule.</td></tr><tr><td><code>Function</code></td><td><code>string</code></td><td>The conditions of a rule.</td></tr><tr><td><code>Actions</code></td><td><code>undefined</code></td><td>The list of actions that will be executed when a rule is triggered.</td></tr><tr><td><code>PublishStatus</code></td><td><code>string</code></td><td>The publish status of a rule, either draft or published.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>One or more tags.</td></tr>
</tbody></table>