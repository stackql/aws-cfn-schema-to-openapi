---
title: LocationS3
hide_title: false
hide_table_of_contents: false
keywords:
  - LocationS3
  - datasync
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The LocationS3 resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>datasync.LocationS3</b></span><br />
<span>resource id:&nbsp;<b>datasync:LocationS3</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>datasync.LocationS3</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>datasync:LocationS3</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>S3Config</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>S3BucketArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Amazon S3 bucket.</td></tr><tr><td><code>Subdirectory</code></td><td><code>string</code></td><td>A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.</td></tr><tr><td><code>S3StorageClass</code></td><td><code>string</code></td><td>The Amazon S3 storage class you want to store your files in when this location is used as a task destination.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr><tr><td><code>LocationArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Amazon S3 bucket location.</td></tr><tr><td><code>LocationUri</code></td><td><code>string</code></td><td>The URL of the S3 location that was described.</td></tr>
</tbody></table>