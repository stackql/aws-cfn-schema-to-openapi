---
title: location_object_storages
hide_title: false
hide_table_of_contents: false
keywords:
  - location_object_storages
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
Retrieves a list of <code>location_object_storages</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>location_object_storages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>location_object_storages</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.datasync.location_object_storages</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>location_arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the location that is created.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
location_arn
FROM awscc.datasync.location_object_storages
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>location_object_storages</code> resource, the following permissions are required:

### Create
```json
datasync:CreateLocationObjectStorage,
datasync:DescribeLocationObjectStorage,
datasync:ListTagsForResource,
datasync:TagResource
```

### List
```json
datasync:ListLocations
```

