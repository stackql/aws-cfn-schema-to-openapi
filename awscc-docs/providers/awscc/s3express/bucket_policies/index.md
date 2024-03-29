---
title: bucket_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_policies
  - s3express
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>bucket_policies</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>bucket_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>bucket_policies</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.s3express.bucket_policies</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>bucket</code></td><td><code>string</code></td><td>The name of the S3 directory bucket to which the policy applies.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
bucket
FROM awscc.s3express.bucket_policies
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>bucket_policies</code> resource, the following permissions are required:

### Create
```json
s3express:GetBucketPolicy,
s3express:PutBucketPolicy
```

### List
```json
s3express:GetBucketPolicy,
s3express:ListAllMyDirectoryBuckets
```

