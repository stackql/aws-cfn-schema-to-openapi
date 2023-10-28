---
title: BasePathMapping
hide_title: false
hide_table_of_contents: false
keywords:
  - BasePathMapping
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
The BasePathMapping resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>apigateway.BasePathMapping</b></span><br />
<span>resource id:&nbsp;<b>apigateway:BasePathMapping</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apigateway.BasePathMapping</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>apigateway:BasePathMapping</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>BasePath</code></td><td><code>string</code></td><td>The base path name that callers of the API must provide in the URL after the domain name.</td></tr><tr><td><code>DomainName</code></td><td><code>string</code></td><td>The DomainName of an AWS::ApiGateway::DomainName resource.</td></tr><tr><td><code>RestApiId</code></td><td><code>string</code></td><td>The ID of the API.</td></tr><tr><td><code>Stage</code></td><td><code>string</code></td><td>The name of the API's stage.</td></tr>
</tbody></table>