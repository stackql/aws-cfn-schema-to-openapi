---
title: StudioSessionMapping
hide_title: false
hide_table_of_contents: false
keywords:
  - StudioSessionMapping
  - emr
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The StudioSessionMapping resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>emr.StudioSessionMapping</b></span><br />
<span>resource id:&nbsp;<b>emr:StudioSessionMapping</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>emr.StudioSessionMapping</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>emr:StudioSessionMapping</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>IdentityName</code></td><td><code>string</code></td><td>The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.</td></tr><tr><td><code>IdentityType</code></td><td><code>string</code></td><td>Specifies whether the identity to map to the Studio is a user or a group.</td></tr><tr><td><code>SessionPolicyArn</code></td><td><code>undefined</code></td><td>The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. Session policies refine Studio user permissions without the need to use multiple IAM user roles.</td></tr><tr><td><code>StudioId</code></td><td><code>string</code></td><td>The ID of the Amazon EMR Studio to which the user or group will be mapped.</td></tr>
</tbody></table>