---
title: Asset
hide_title: false
hide_table_of_contents: false
keywords:
  - Asset
  - mediapackage
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Asset resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>mediapackage.Asset</b></span><br />
<span>resource id:&nbsp;<b>mediapackage:Asset</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>mediapackage.Asset</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>mediapackage:Asset</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td>The ARN of the Asset.</td></tr><tr><td><code>CreatedAt</code></td><td><code>string</code></td><td>The time the Asset was initially submitted for Ingest.</td></tr><tr><td><code>EgressEndpoints</code></td><td><code>array</code></td><td>The list of egress endpoints available for the Asset.</td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td>The unique identifier for the Asset.</td></tr><tr><td><code>PackagingGroupId</code></td><td><code>string</code></td><td>The ID of the PackagingGroup for the Asset.</td></tr><tr><td><code>ResourceId</code></td><td><code>string</code></td><td>The resource ID to include in SPEKE key requests.</td></tr><tr><td><code>SourceArn</code></td><td><code>string</code></td><td>ARN of the source object in S3.</td></tr><tr><td><code>SourceRoleArn</code></td><td><code>string</code></td><td>The IAM role_arn used to access the source S3 bucket.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A collection of tags associated with a resource</td></tr>
</tbody></table>