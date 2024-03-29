---
title: device_profile
hide_title: false
hide_table_of_contents: false
keywords:
  - device_profile
  - iotwireless
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>device_profile</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>device_profile</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>device_profile</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.iotwireless.device_profile</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>Name of service profile</td></tr>
<tr><td><code>lo_ra_wan</code></td><td><code>object</code></td><td>LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation</td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the device profile.</td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>Service profile Arn. Returned after successful create.</td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td>Service profile Id. Returned after successful create.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
name,
lo_ra_wan,
tags,
arn,
id
FROM awscc.iotwireless.device_profile
WHERE data__Identifier = '<Id>';
```

## Permissions

To operate on the <code>device_profile</code> resource, the following permissions are required:

### Read
```json
iotwireless:GetDeviceProfile,
iotwireless:ListTagsForResource
```

### Delete
```json
iotwireless:DeleteDeviceProfile
```

