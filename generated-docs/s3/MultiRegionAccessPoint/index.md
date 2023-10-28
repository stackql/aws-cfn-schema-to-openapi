---
title: MultiRegionAccessPoint
hide_title: false
hide_table_of_contents: false
keywords:
  - MultiRegionAccessPoint
  - s3
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The MultiRegionAccessPoint resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>s3.MultiRegionAccessPoint</b></span><br />
<span>resource id:&nbsp;<b>s3:MultiRegionAccessPoint</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>s3.MultiRegionAccessPoint</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>s3:MultiRegionAccessPoint</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>The name you want to assign to this Multi Region Access Point.</td></tr><tr><td><code>Alias</code></td><td><code>string</code></td><td>The alias is a unique identifier to, and is part of the public DNS name for this Multi Region Access Point</td></tr><tr><td><code>CreatedAt</code></td><td><code>string</code></td><td>The timestamp of the when the Multi Region Access Point is created</td></tr><tr><td><code>PublicAccessBlockConfiguration</code></td><td><code>undefined</code></td><td>The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.</td></tr><tr><td><code>Regions</code></td><td><code>array</code></td><td>The list of buckets that you want to associate this Multi Region Access Point with.</td></tr>
</tbody></table>