---
title: FlowLog
hide_title: false
hide_table_of_contents: false
keywords:
  - FlowLog
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The FlowLog resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>FlowLog</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.FlowLog</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td>The Flow Log ID</td></tr><tr><td><code>DeliverLogsPermissionArn</code></td><td><code>string</code></td><td>The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.</td></tr><tr><td><code>LogDestination</code></td><td><code>string</code></td><td>Specifies the destination to which the flow log data is to be published. Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType.</td></tr><tr><td><code>LogDestinationType</code></td><td><code>string</code></td><td>Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3.</td></tr><tr><td><code>LogFormat</code></td><td><code>string</code></td><td>The fields to include in the flow log record, in the order in which they should appear.</td></tr><tr><td><code>LogGroupName</code></td><td><code>string</code></td><td>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.</td></tr><tr><td><code>MaxAggregationInterval</code></td><td><code>integer</code></td><td>The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).</td></tr><tr><td><code>ResourceId</code></td><td><code>string</code></td><td>The ID of the subnet, network interface, or VPC for which you want to create a flow log.</td></tr><tr><td><code>ResourceType</code></td><td><code>string</code></td><td>The type of resource for which to create the flow log. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags to apply to the flow logs.</td></tr><tr><td><code>TrafficType</code></td><td><code>string</code></td><td>The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.</td></tr><tr><td><code>DestinationOptions</code></td><td><code>object</code></td><td></td></tr>
</tbody></table>