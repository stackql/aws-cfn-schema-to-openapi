---
title: StreamKey
hide_title: false
hide_table_of_contents: false
keywords:
  - StreamKey
  - ivs
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The StreamKey resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>StreamKey</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ivs.StreamKey</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td>Stream Key ARN is automatically generated on creation and assigned as the unique identifier.</td></tr><tr><td><code>ChannelArn</code></td><td><code>string</code></td><td>Channel ARN for the stream.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the asset model.</td></tr><tr><td><code>Value</code></td><td><code>string</code></td><td>Stream-key value.</td></tr>
</tbody></table>