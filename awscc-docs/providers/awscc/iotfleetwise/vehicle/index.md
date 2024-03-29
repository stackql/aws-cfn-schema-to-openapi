---
title: vehicle
hide_title: false
hide_table_of_contents: false
keywords:
  - vehicle
  - iotfleetwise
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>vehicle</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vehicle</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>vehicle</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.iotfleetwise.vehicle</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>association_behavior</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>attributes</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>creation_time</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>decoder_manifest_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>last_modification_time</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>model_manifest_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn,
association_behavior,
attributes,
creation_time,
decoder_manifest_arn,
name,
last_modification_time,
model_manifest_arn,
tags
FROM awscc.iotfleetwise.vehicle
WHERE data__Identifier = '<Name>';
```

## Permissions

To operate on the <code>vehicle</code> resource, the following permissions are required:

### Read
```json
iotfleetwise:GetVehicle,
iotfleetwise:ListTagsForResource
```

### Update
```json
iotfleetwise:GetVehicle,
iotfleetwise:UpdateVehicle,
iotfleetwise:ListTagsForResource,
iotfleetwise:TagResource,
iotfleetwise:UntagResource
```

### Delete
```json
iotfleetwise:GetVehicle,
iotfleetwise:DeleteVehicle
```

