---
title: InstanceAccessControlAttributeConfiguration
hide_title: false
hide_table_of_contents: false
keywords:
  - InstanceAccessControlAttributeConfiguration
  - sso
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The InstanceAccessControlAttributeConfiguration resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>sso.InstanceAccessControlAttributeConfiguration</b></span><br />
<span>resource id:&nbsp;<b>sso:InstanceAccessControlAttributeConfiguration</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sso.InstanceAccessControlAttributeConfiguration</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>sso:InstanceAccessControlAttributeConfiguration</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>InstanceArn</code></td><td><code>string</code></td><td>The ARN of the AWS SSO instance under which the operation will be executed.</td></tr><tr><td><code>InstanceAccessControlAttributeConfiguration</code></td><td><code>object</code></td><td>The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use  AccessControlAttributes property instead.</td></tr><tr><td><code>AccessControlAttributes</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>