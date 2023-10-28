---
title: Task
hide_title: false
hide_table_of_contents: false
keywords:
  - Task
  - datasync
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Task resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>datasync.Task</b></span><br />
<span>resource id:&nbsp;<b>datasync:Task</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>datasync.Task</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>datasync:Task</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Excludes</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Includes</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr><tr><td><code>CloudWatchLogGroupArn</code></td><td><code>string</code></td><td>The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.</td></tr><tr><td><code>DestinationLocationArn</code></td><td><code>string</code></td><td>The ARN of an AWS storage resource's location.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>The name of a task. This value is a text reference that is used to identify the task in the console.</td></tr><tr><td><code>Options</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Schedule</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>SourceLocationArn</code></td><td><code>string</code></td><td>The ARN of the source location for the task.</td></tr><tr><td><code>TaskArn</code></td><td><code>string</code></td><td>The ARN of the task.</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>The status of the task that was described.</td></tr><tr><td><code>SourceNetworkInterfaceArns</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>DestinationNetworkInterfaceArns</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>