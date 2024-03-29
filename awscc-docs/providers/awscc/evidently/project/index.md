---
title: project
hide_title: false
hide_table_of_contents: false
keywords:
  - project
  - evidently
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>project</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>project</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>project</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.evidently.project</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>data_delivery</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>app_config_resource</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn,
name,
description,
data_delivery,
app_config_resource,
tags
FROM awscc.evidently.project
WHERE data__Identifier = '<Arn>';
```

## Permissions

To operate on the <code>project</code> resource, the following permissions are required:

### Read
```json
evidently:GetProject,
logs:GetLogDelivery,
logs:ListLogDeliveries,
s3:GetBucketPolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
evidently:ListTagsForResource
```

### Update
```json
evidently:UpdateProject,
evidently:UpdateProjectDataDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:ListLogDeliveries,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
evidently:TagResource,
evidently:UntagResource,
evidently:ListTagsForResource,
evidently:GetProject,
evidently:ExportProjectAsConfiguration,
appconfig:GetEnvironment,
appconfig:CreateConfigurationProfile,
appconfig:CreateHostedConfigurationVersion,
appconfig:CreateExtensionAssociation,
appconfig:TagResource,
iam:GetRole,
iam:CreateServiceLinkedRole
```

### Delete
```json
evidently:DeleteProject,
evidently:GetProject,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
s3:GetBucketPolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
evidently:UntagResource,
appconfig:DeleteHostedConfigurationVersion,
appconfig:DeleteExtensionAssociation,
appconfig:DeleteConfigurationProfile
```

