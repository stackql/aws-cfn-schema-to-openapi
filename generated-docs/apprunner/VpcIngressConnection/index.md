---
title: VpcIngressConnection
hide_title: false
hide_table_of_contents: false
keywords:
  - VpcIngressConnection
  - apprunner
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The VpcIngressConnection resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>apprunner.VpcIngressConnection</b></span><br />
<span>resource id:&nbsp;<b>apprunner:VpcIngressConnection</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apprunner.VpcIngressConnection</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>apprunner:VpcIngressConnection</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>VpcIngressConnectionArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the VpcIngressConnection.</td></tr><tr><td><code>VpcIngressConnectionName</code></td><td><code>string</code></td><td>The customer-provided Vpc Ingress Connection name.</td></tr><tr><td><code>ServiceArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the service.</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>The current status of the VpcIngressConnection.</td></tr><tr><td><code>DomainName</code></td><td><code>string</code></td><td>The Domain name associated with the VPC Ingress Connection.</td></tr><tr><td><code>IngressVpcConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>