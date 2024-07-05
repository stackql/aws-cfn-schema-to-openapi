---
title: delivery_stream_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_stream_tags
  - kinesisfirehose
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

Creates, updates, deletes or gets a <code>delivery_stream_tag</code> resource or lists <code>delivery_stream_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>delivery_stream_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::KinesisFirehose::DeliveryStream</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisfirehose.delivery_stream_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="delivery_stream_encryption_configuration_input" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="delivery_stream_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="delivery_stream_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="elasticsearch_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="amazonopensearchservice_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="amazon_open_search_serverless_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="extended_s3_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="kinesis_stream_source_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="msk_source_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="redshift_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="s3_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="splunk_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="http_endpoint_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="snowflake_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
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
    <td><CopyableCode code="view" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>








