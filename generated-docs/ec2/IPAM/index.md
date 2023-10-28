---
title: IPAM
hide_title: false
hide_table_of_contents: false
keywords:
  - IPAM
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The IPAM resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ec2.IPAM</b></span><br />
<span>resource id:&nbsp;<b>ec2:IPAM</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2.IPAM</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ec2:IPAM</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>IpamId</code></td><td><code>string</code></td><td>Id of the IPAM.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the IPAM.</td></tr><tr><td><code>DefaultResourceDiscoveryId</code></td><td><code>string</code></td><td>The Id of the default resource discovery, created with this IPAM.</td></tr><tr><td><code>DefaultResourceDiscoveryAssociationId</code></td><td><code>string</code></td><td>The Id of the default association to the default resource discovery, created with this IPAM.</td></tr><tr><td><code>ResourceDiscoveryAssociationCount</code></td><td><code>integer</code></td><td>The count of resource discoveries associated with this IPAM.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PublicDefaultScopeId</code></td><td><code>string</code></td><td>The Id of the default scope for publicly routable IP space, created with this IPAM.</td></tr><tr><td><code>PrivateDefaultScopeId</code></td><td><code>string</code></td><td>The Id of the default scope for publicly routable IP space, created with this IPAM.</td></tr><tr><td><code>ScopeCount</code></td><td><code>integer</code></td><td>The number of scopes that currently exist in this IPAM.</td></tr><tr><td><code>OperatingRegions</code></td><td><code>array</code></td><td>The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>