---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - docdbelastic
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>clusters</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>clusters</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.docdbelastic.clusters</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>cluster_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
cluster_arn
FROM awscc.docdbelastic.clusters
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

### Create
```json
docdb-elastic:CreateCluster,
ec2:CreateVpcEndpoint,
ec2:DescribeVpcEndpoints,
ec2:DeleteVpcEndpoints,
ec2:ModifyVpcEndpoint,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcAttribute,
ec2:DescribeVpcs,
ec2:DescribeAvailabilityZones,
secretsmanager:ListSecrets,
secretsmanager:ListSecretVersionIds,
secretsmanager:DescribeSecret,
secretsmanager:GetSecretValue,
secretsmanager:GetResourcePolicy,
kms:DescribeKey,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt,
iam:CreateServiceLinkedRole
```

### List
```json
docdb-elastic:ListClusters
```

