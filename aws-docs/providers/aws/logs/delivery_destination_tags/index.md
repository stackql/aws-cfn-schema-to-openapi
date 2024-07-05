---
title: delivery_destination_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_destination_tags
  - logs
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

Creates, updates, deletes or gets a <code>delivery_destination_tag</code> resource or lists <code>delivery_destination_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>delivery_destination_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This structure contains information about one delivery destination in your account.<br />A delivery destination is an AWS resource that represents an AWS service that logs can be sent to CloudWatch Logs, Amazon S3, are supported as Kinesis Data Firehose delivery destinations.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.delivery_destination_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of this delivery destination.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.</td></tr>
<tr><td><CopyableCode code="destination_resource_arn" /></td><td><code>string</code></td><td>The ARN of the AWS resource that will receive the logs.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>The tags that have been assigned to this delivery destination.</td></tr>
<tr><td><CopyableCode code="delivery_destination_type" /></td><td><code>string</code></td><td>Displays whether this delivery destination is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.</td></tr>
<tr><td><CopyableCode code="delivery_destination_policy" /></td><td><code>object</code></td><td>IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.<br />The policy must be in JSON string format.<br />Length Constraints: Maximum length of 51200</td></tr>
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








