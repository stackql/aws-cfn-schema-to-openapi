---
title: RequestValidator
hide_title: false
hide_table_of_contents: false
keywords:
  - RequestValidator
  - apigateway
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The RequestValidator resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>apigateway.RequestValidator</b></span><br />
<span>resource id:&nbsp;<b>apigateway:RequestValidator</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apigateway.RequestValidator</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>apigateway:RequestValidator</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>RequestValidatorId</code></td><td><code>string</code></td><td>ID of the request validator.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>Name of the request validator.</td></tr><tr><td><code>RestApiId</code></td><td><code>string</code></td><td>The identifier of the targeted API entity.</td></tr><tr><td><code>ValidateRequestBody</code></td><td><code>boolean</code></td><td>Indicates whether to validate the request body according to the configured schema for the targeted API and method. </td></tr><tr><td><code>ValidateRequestParameters</code></td><td><code>boolean</code></td><td>Indicates whether to validate request parameters.</td></tr>
</tbody></table>