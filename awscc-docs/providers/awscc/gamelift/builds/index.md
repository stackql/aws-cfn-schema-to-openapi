---
title: builds
hide_title: false
hide_table_of_contents: false
keywords:
  - builds
  - gamelift
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>builds</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>builds</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>builds</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.gamelift.builds</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>build_id</code></td><td><code>string</code></td><td>A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
build_id
FROM awscc.gamelift.builds
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>builds</code> resource, the following permissions are required:

### Create
```json
gamelift:DescribeBuild,
gamelift:CreateBuild
```

### List
```json
gamelift:ListBuilds
```

