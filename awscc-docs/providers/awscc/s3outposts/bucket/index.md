---
title: bucket
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket
  - s3outposts
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>bucket</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>bucket</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>bucket</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.s3outposts.bucket</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the specified bucket.</td></tr>
<tr><td><code>bucket_name</code></td><td><code>string</code></td><td>A name for the bucket.</td></tr>
<tr><td><code>outpost_id</code></td><td><code>string</code></td><td>The id of the customer outpost on which the bucket resides.</td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.</td></tr>
<tr><td><code>lifecycle_configuration</code></td><td><code>object</code></td><td>Rules that define how Amazon S3Outposts manages objects during their lifetime.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn,
bucket_name,
outpost_id,
tags,
lifecycle_configuration
FROM awscc.s3outposts.bucket
WHERE data__Identifier = '<Arn>';
```

## Permissions

To operate on the <code>bucket</code> resource, the following permissions are required:

### Read
```json
s3-outposts:GetBucket,
s3-outposts:GetBucketTagging,
s3-outposts:GetLifecycleConfiguration
```

### Update
```json
s3-outposts:PutBucketTagging,
s3-outposts:DeleteBucketTagging,
s3-outposts:PutLifecycleConfiguration
```

### Delete
```json
s3-outposts:DeleteBucket
```

