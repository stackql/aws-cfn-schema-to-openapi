---
title: subscriber_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriber_tags
  - securitylake
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

Creates, updates, deletes or gets a <code>subscriber_tag</code> resource or lists <code>subscriber_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>subscriber_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SecurityLake::Subscriber</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securitylake.subscriber_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="access_types" /></td><td><code>array</code></td><td>The Amazon S3 or AWS Lake Formation access type.</td></tr>
<tr><td><CopyableCode code="data_lake_arn" /></td><td><code>string</code></td><td>The ARN for the data lake.</td></tr>
<tr><td><CopyableCode code="subscriber_identity" /></td><td><code>object</code></td><td>The AWS identity used to access your data.</td></tr>
<tr><td><CopyableCode code="subscriber_name" /></td><td><code>string</code></td><td>The name of your Security Lake subscriber account.</td></tr>
<tr><td><CopyableCode code="subscriber_description" /></td><td><code>string</code></td><td>The description for your subscriber account in Security Lake.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of objects, one for each tag to associate with the subscriber. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.</td></tr>
<tr><td><CopyableCode code="sources" /></td><td><code>array</code></td><td>The supported AWS services from which logs and events are collected.</td></tr>
<tr><td><CopyableCode code="resource_share_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="resource_share_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="subscriber_role_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="s3_bucket_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="subscriber_arn" /></td><td><code>string</code></td><td></td></tr>
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








