---
title: ResourcePolicy
hide_title: false
hide_table_of_contents: false
keywords:
  - ResourcePolicy
  - ssm
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The ResourcePolicy resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ssm.ResourcePolicy</b></span><br />
<span>resource id:&nbsp;<b>ssm:ResourcePolicy</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ssm.ResourcePolicy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ssm:ResourcePolicy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ResourceArn</code></td><td><code>string</code></td><td>Arn of OpsItemGroup etc.</td></tr><tr><td><code>Policy</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PolicyId</code></td><td><code>string</code></td><td>An unique identifier within the policies of a resource. </td></tr><tr><td><code>PolicyHash</code></td><td><code>string</code></td><td>A snapshot identifier for the policy over time.</td></tr>
</tbody></table>