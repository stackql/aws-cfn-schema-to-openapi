---
title: VpcEndpoint
hide_title: false
hide_table_of_contents: false
keywords:
  - VpcEndpoint
  - opensearchserverless
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The VpcEndpoint resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>opensearchserverless.VpcEndpoint</b></span><br />
<span>resource id:&nbsp;<b>opensearchserverless:VpcEndpoint</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>opensearchserverless.VpcEndpoint</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>opensearchserverless:VpcEndpoint</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td>The identifier of the VPC Endpoint</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>The name of the VPC Endpoint</td></tr><tr><td><code>SecurityGroupIds</code></td><td><code>array</code></td><td>The ID of one or more security groups to associate with the endpoint network interface</td></tr><tr><td><code>SubnetIds</code></td><td><code>array</code></td><td>The ID of one or more subnets in which to create an endpoint network interface</td></tr><tr><td><code>VpcId</code></td><td><code>string</code></td><td>The ID of the VPC in which the endpoint will be used.</td></tr>
</tbody></table>