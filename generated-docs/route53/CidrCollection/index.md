---
title: CidrCollection
hide_title: false
hide_table_of_contents: false
keywords:
  - CidrCollection
  - route53
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The CidrCollection resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>route53.CidrCollection</b></span><br />
<span>resource id:&nbsp;<b>route53:CidrCollection</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>route53.CidrCollection</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>route53:CidrCollection</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td>UUID of the CIDR collection.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>A unique name for the CIDR collection.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon resource name (ARN) to uniquely identify the AWS resource.</td></tr><tr><td><code>Locations</code></td><td><code>array</code></td><td>A complex type that contains information about the list of CIDR locations.</td></tr>
</tbody></table>