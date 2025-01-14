---
title: channel_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_tags
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Expands all tag keys and values for <code>channels</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>channel_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><p>Represents an entry point into AWS Elemental MediaPackage for an ABR video content stream sent from an upstream encoder such as AWS Elemental MediaLive. The channel continuously analyzes the content that it receives and prepares it to be distributed to consumers via one or more origin endpoints.</p></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackagev2.channel_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td><p>The Amazon Resource Name (ARN) associated with the resource.</p></td></tr>
<tr><td><CopyableCode code="channel_group_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="channel_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td><p>The date and time the channel was created.</p></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td><p>Enter any descriptive text that helps you to identify the channel.</p></td></tr>
<tr><td><CopyableCode code="ingest_endpoints" /></td><td><code>array</code></td><td><p>The list of ingest endpoints.</p></td></tr>
<tr><td><CopyableCode code="input_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="modified_at" /></td><td><code>string</code></td><td><p>The date and time the channel was modified.</p></td></tr>
<tr><td><CopyableCode code="ingest_endpoint_urls" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="tag_key" /></td><td><code>string</code></td><td>Tag key.</td></tr>
<tr><td><CopyableCode code="tag_value" /></td><td><code>string</code></td><td>Tag value.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

## Methods

<table><tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>

## `SELECT` examples
Expands tags for all <code>channels</code> in a region.
```sql
SELECT
region,
arn,
channel_group_name,
channel_name,
created_at,
description,
ingest_endpoints,
input_type,
modified_at,
ingest_endpoint_urls,
tag_key,
tag_value
FROM aws.mediapackagev2.channel_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>channel_tags</code> resource, see <a href="/providers/aws/mediapackagev2/channels/#permissions"><code>channels</code></a>

