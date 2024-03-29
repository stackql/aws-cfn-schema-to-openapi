---
title: network_interface_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - network_interface_attachments
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
Retrieves a list of <code>network_interface_attachments</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>network_interface_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>network_interface_attachments</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.ec2.network_interface_attachments</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>attachment_id</code></td><td><code>string</code></td><td>The ID of the network interface attachment.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
attachment_id
FROM awscc.ec2.network_interface_attachments
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>network_interface_attachments</code> resource, the following permissions are required:

### Create
```json
ec2:AttachNetworkInterface,
ec2:DescribeNetworkInterfaces,
ec2:ModifyNetworkInterfaceAttribute
```

### List
```json
ec2:DescribeNetworkInterfaces
```

