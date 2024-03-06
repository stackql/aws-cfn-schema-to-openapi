---
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - networkmanager
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>devices</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>devices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>devices</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.networkmanager.devices</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>global_network_id</code></td><td><code>string</code></td><td>The ID of the global network.</td></tr>
<tr><td><code>device_id</code></td><td><code>string</code></td><td>The ID of the device.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>devices</code> resource, the following permissions are required:

### Create
<pre>
networkmanager:CreateDevice,
networkmanager:GetDevices,
networkmanager:TagResource</pre>

### List
<pre>
networkmanager:GetDevices</pre>


## Example
```sql
SELECT
region,
global_network_id,
device_id
FROM awscc.networkmanager.devices
WHERE region = 'us-east-1'
```