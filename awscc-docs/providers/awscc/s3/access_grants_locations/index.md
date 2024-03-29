---
title: access_grants_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants_locations
  - s3
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>access_grants_locations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>access_grants_locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>access_grants_locations</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.s3.access_grants_locations</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>access_grants_location_id</code></td><td><code>string</code></td><td>The unique identifier for the specified Access Grants location.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
access_grants_location_id
FROM awscc.s3.access_grants_locations
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>access_grants_locations</code> resource, the following permissions are required:

### Create
```json
s3:CreateAccessGrantsLocation,
iam:PassRole,
s3:TagResource
```

### List
```json
s3:ListAccessGrantsLocations
```

