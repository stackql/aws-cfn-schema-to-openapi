---
title: recording_configuration_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - recording_configuration_tags
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Expands all tag keys and values for <code>recording_configurations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>recording_configuration_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IVS::RecordingConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.recording_configuration_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>Recording Configuration ARN is automatically generated on creation and assigned as the unique identifier.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Recording Configuration Name.</td></tr>
<tr><td><CopyableCode code="state" /></td><td><code>string</code></td><td>Recording Configuration State.</td></tr>
<tr><td><CopyableCode code="recording_reconnect_window_seconds" /></td><td><code>integer</code></td><td>Recording Reconnect Window Seconds. (0 means disabled)</td></tr>
<tr><td><CopyableCode code="destination_configuration" /></td><td><code>object</code></td><td>Recording Destination Configuration.</td></tr>
<tr><td><CopyableCode code="thumbnail_configuration" /></td><td><code>object</code></td><td>Recording Thumbnail Configuration.</td></tr>
<tr><td><CopyableCode code="rendition_configuration" /></td><td><code>object</code></td><td>Rendition Configuration describes which renditions should be recorded for a stream.</td></tr>
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
Expands tags for all <code>recording_configurations</code> in a region.
```sql
SELECT
region,
arn,
name,
state,
recording_reconnect_window_seconds,
destination_configuration,
thumbnail_configuration,
rendition_configuration,
tag_key,
tag_value
FROM aws.ivs.recording_configuration_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>recording_configuration_tags</code> resource, see <a href="/providers/aws/ivs/recording_configurations/#permissions"><code>recording_configurations</code></a>

