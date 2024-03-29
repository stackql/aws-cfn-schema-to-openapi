---
title: target_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - target_groups
  - vpclattice
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>target_groups</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>target_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>target_groups</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.vpclattice.target_groups</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn
FROM awscc.vpclattice.target_groups
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>target_groups</code> resource, the following permissions are required:

### Create
```json
vpc-lattice:CreateTargetGroup,
vpc-lattice:GetTargetGroup,
vpc-lattice:RegisterTargets,
vpc-lattice:ListTargets,
vpc-lattice:ListTagsForResource,
vpc-lattice:TagResource,
vpc-lattice:UntagResource,
ec2:DescribeVpcs,
ec2:DescribeInstances,
ec2:DescribeSubnets,
ec2:DescribeAvailabilityZoneMappings,
lambda:Invoke,
lambda:AddPermission,
elasticloadbalancing:DescribeLoadBalancers,
iam:CreateServiceLinkedRole
```

### List
```json
vpc-lattice:ListTargetGroups
```

