---
title: vpc_endpoint_connection_notification
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_connection_notification
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
Gets an individual <code>vpc_endpoint_connection_notification</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpc_endpoint_connection_notification</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>vpc_endpoint_connection_notification</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.ec2.vpc_endpoint_connection_notification</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>vpc_endpoint_connection_notification_id</code></td><td><code>string</code></td><td>VPC Endpoint Connection ID generated by service</td></tr>
<tr><td><code>connection_events</code></td><td><code>array</code></td><td>The endpoint events for which to receive notifications.</td></tr>
<tr><td><code>connection_notification_arn</code></td><td><code>string</code></td><td>The ARN of the SNS topic for the notifications.</td></tr>
<tr><td><code>service_id</code></td><td><code>string</code></td><td>The ID of the endpoint service.</td></tr>
<tr><td><code>vpc_endpoint_id</code></td><td><code>string</code></td><td>The ID of the endpoint.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
vpc_endpoint_connection_notification_id,
connection_events,
connection_notification_arn,
service_id,
vpc_endpoint_id
FROM awscc.ec2.vpc_endpoint_connection_notification
WHERE data__Identifier = '<VPCEndpointConnectionNotificationId>';
```

## Permissions

To operate on the <code>vpc_endpoint_connection_notification</code> resource, the following permissions are required:

### Read
```json
ec2:DescribeVpcEndpointConnectionNotifications
```

### Update
```json
ec2:ModifyVpcEndpointConnectionNotification,
ec2:DescribeVpcEndpointConnectionNotifications
```

### Delete
```json
ec2:DeleteVpcEndpointConnectionNotifications
```

