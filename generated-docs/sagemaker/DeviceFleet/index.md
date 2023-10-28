---
title: DeviceFleet
hide_title: false
hide_table_of_contents: false
keywords:
  - DeviceFleet
  - sagemaker
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The DeviceFleet resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>sagemaker.DeviceFleet</b></span><br />
<span>resource id:&nbsp;<b>sagemaker:DeviceFleet</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sagemaker.DeviceFleet</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>sagemaker:DeviceFleet</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Description</code></td><td><code>string</code></td><td>Description for the edge device fleet</td></tr><tr><td><code>DeviceFleetName</code></td><td><code>string</code></td><td>The name of the edge device fleet</td></tr><tr><td><code>OutputConfig</code></td><td><code>undefined</code></td><td>S3 bucket and an ecryption key id (if available) to store outputs for the fleet</td></tr><tr><td><code>RoleArn</code></td><td><code>string</code></td><td>Role associated with the device fleet</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>Associate tags with the resource</td></tr>
</tbody></table>