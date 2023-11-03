---
title: vpc_endpoint_connection_notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_connection_notifications
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
Retrieves a list of <code>vpc_endpoint_connection_notifications</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpc_endpoint_connection_notifications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.vpc_endpoint_connection_notifications</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ConnectionEvents</code></td><td><code>array</code></td><td></td></tr><tr><td><code>VPCEndpointId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ServiceId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ConnectionNotificationArn</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.vpc_endpoint_connection_notifications
WHERE region = 'us-east-1'
</pre>