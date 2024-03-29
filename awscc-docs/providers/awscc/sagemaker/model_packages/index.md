---
title: model_packages
hide_title: false
hide_table_of_contents: false
keywords:
  - model_packages
  - sagemaker
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>model_packages</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>model_packages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>model_packages</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.sagemaker.model_packages</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>model_package_arn</code></td><td><code>undefined</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
model_package_arn
FROM awscc.sagemaker.model_packages
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>model_packages</code> resource, the following permissions are required:

### Create
```json
ecr:BatchGetImage,
ecr:DescribeImages,
ecr:StartImageScan,
ecr:DescribeImageScanFindings,
sagemaker:AddTags,
sagemaker:CreateModel,
sagemaker:CreateModelPackage,
sagemaker:CreateTrainingJob,
sagemaker:CreateTransformJob,
sagemaker:DescribeTransformJob,
sagemaker:DescribeModelPackage,
sagemaker:ListTags,
iam:PassRole,
s3:GetObject
```

### List
```json
sagemaker:ListModelPackages
```

