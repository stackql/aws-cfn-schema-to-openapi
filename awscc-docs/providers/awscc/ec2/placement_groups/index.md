---
title: placement_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - placement_groups
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
Retrieves a list of <code>placement_groups</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>placement_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>placement_groups</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.ec2.placement_groups</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>group_name</code></td><td><code>string</code></td><td>The Group Name of Placement Group.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
group_name
FROM awscc.ec2.placement_groups
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>placement_groups</code> resource, the following permissions are required:

### Create
```json
ec2:CreatePlacementGroup,
ec2:DescribePlacementGroups,
ec2:CreateTags
```

### List
```json
ec2:DescribePlacementGroups
```

