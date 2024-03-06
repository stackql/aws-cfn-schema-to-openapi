---
title: channel_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_groups
  - mediapackagev2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>channel_groups</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>channel_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>channel_groups</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.mediapackagev2.channel_groups</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>&lt;p&gt;The Amazon Resource Name (ARN) associated with the resource.&lt;&#x2F;p&gt;</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>channel_groups</code> resource, the following permissions are required:

### Create
<pre>
mediapackagev2:TagResource,
mediapackagev2:CreateChannelGroup</pre>

### List
<pre>
mediapackagev2:ListChannelGroups</pre>


## Example
```sql
SELECT
region,
arn
FROM awscc.mediapackagev2.channel_groups
WHERE region = 'us-east-1'
```