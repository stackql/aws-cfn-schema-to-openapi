---
title: delivery_channel
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_channel
  - config
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>delivery_channel</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>delivery_channel</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.config.delivery_channel</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>S3KeyPrefix</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ConfigSnapshotDeliveryProperties</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>S3BucketName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SnsTopicARN</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>S3KmsKeyArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.config.delivery_channel
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>