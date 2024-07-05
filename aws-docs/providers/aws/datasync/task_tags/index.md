---
title: task_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - task_tags
  - datasync
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

Creates, updates, deletes or gets a <code>task_tag</code> resource or lists <code>task_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>task_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::Task.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.task_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="excludes" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="includes" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="cloud_watch_log_group_arn" /></td><td><code>string</code></td><td>The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.</td></tr>
<tr><td><CopyableCode code="destination_location_arn" /></td><td><code>string</code></td><td>The ARN of an AWS storage resource's location.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of a task. This value is a text reference that is used to identify the task in the console.</td></tr>
<tr><td><CopyableCode code="options" /></td><td><code>object</code></td><td>Represents the options that are available to control the behavior of a StartTaskExecution operation.</td></tr>
<tr><td><CopyableCode code="task_report_config" /></td><td><code>object</code></td><td>Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.</td></tr>
<tr><td><CopyableCode code="manifest_config" /></td><td><code>object</code></td><td>Configures a manifest, which is a list of files or objects that you want DataSync to transfer.</td></tr>
<tr><td><CopyableCode code="schedule" /></td><td><code>object</code></td><td>Specifies the schedule you want your task to use for repeated executions.</td></tr>
<tr><td><CopyableCode code="source_location_arn" /></td><td><code>string</code></td><td>The ARN of the source location for the task.</td></tr>
<tr><td><CopyableCode code="task_arn" /></td><td><code>string</code></td><td>The ARN of the task.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The status of the task that was described.</td></tr>
<tr><td><CopyableCode code="source_network_interface_arns" /></td><td><code>array</code></td><td>The Amazon Resource Names (ARNs) of the source ENIs (Elastic Network Interfaces) that were created for your subnet.</td></tr>
<tr><td><CopyableCode code="destination_network_interface_arns" /></td><td><code>array</code></td><td>The Amazon Resource Names (ARNs) of the destination ENIs (Elastic Network Interfaces) that were created for your subnet.</td></tr>
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
    <td><CopyableCode code="view" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>








