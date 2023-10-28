---
title: App
hide_title: false
hide_table_of_contents: false
keywords:
  - App
  - sagemaker
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The App resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>sagemaker.App</b></span><br />
<span>resource id:&nbsp;<b>sagemaker:App</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sagemaker.App</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>sagemaker:App</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>AppArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the app.</td></tr><tr><td><code>AppName</code></td><td><code>string</code></td><td>The name of the app.</td></tr><tr><td><code>AppType</code></td><td><code>string</code></td><td>The type of app.</td></tr><tr><td><code>DomainId</code></td><td><code>string</code></td><td>The domain ID.</td></tr><tr><td><code>ResourceSpec</code></td><td><code>undefined</code></td><td>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of tags to apply to the app.</td></tr><tr><td><code>UserProfileName</code></td><td><code>string</code></td><td>The user profile name.</td></tr>
</tbody></table>