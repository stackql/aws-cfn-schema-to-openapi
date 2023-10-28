---
title: Plan
hide_title: false
hide_table_of_contents: false
keywords:
  - Plan
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
The Plan resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ssm.Plan</b></span><br />
<span>resource id:&nbsp;<b>ssm:Plan</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ssm.Plan</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ssm:Plan</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ContactId</code></td><td><code>string</code></td><td>Contact ID for the AWS SSM Incident Manager Contact to associate the plan.</td></tr><tr><td><code>Stages</code></td><td><code>array</code></td><td>The stages that an escalation plan or engagement plan engages contacts and contact methods in.</td></tr><tr><td><code>RotationIds</code></td><td><code>array</code></td><td>Rotation Ids to associate with Oncall Contact for engagement.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the contact.</td></tr>
</tbody></table>