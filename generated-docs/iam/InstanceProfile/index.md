---
title: InstanceProfile
hide_title: false
hide_table_of_contents: false
keywords:
  - InstanceProfile
  - iam
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The InstanceProfile resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iam.InstanceProfile</b></span><br />
<span>resource id:&nbsp;<b>iam:InstanceProfile</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iam.InstanceProfile</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iam:InstanceProfile</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Path</code></td><td><code>string</code></td><td>The path to the instance profile.</td></tr><tr><td><code>Roles</code></td><td><code>array</code></td><td>The name of the role to associate with the instance profile. Only one role can be assigned to an EC2 instance at a time, and all applications on the instance share the same role and permissions.</td></tr><tr><td><code>InstanceProfileName</code></td><td><code>string</code></td><td>The name of the instance profile to create.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the instance profile.</td></tr>
</tbody></table>