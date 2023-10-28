---
title: Stream
hide_title: false
hide_table_of_contents: false
keywords:
  - Stream
  - kinesis
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The Stream resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>kinesis.Stream</b></span><br />
<span>resource id:&nbsp;<b>kinesis:Stream</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>kinesis.Stream</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>kinesis:Stream</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Kinesis Video stream.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>The name of the Kinesis Video stream.</td></tr><tr><td><code>DataRetentionInHours</code></td><td><code>integer</code></td><td>The number of hours till which Kinesis Video will retain the data in the stream</td></tr><tr><td><code>DeviceName</code></td><td><code>string</code></td><td>The name of the device that is writing to the stream.</td></tr><tr><td><code>KmsKeyId</code></td><td><code>string</code></td><td>AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data.</td></tr><tr><td><code>MediaType</code></td><td><code>string</code></td><td>The media type of the stream. Consumers of the stream can use this information when processing the stream.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs associated with the Kinesis Video Stream.</td></tr>
</tbody></table>