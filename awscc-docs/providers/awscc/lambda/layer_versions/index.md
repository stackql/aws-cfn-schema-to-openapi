---
title: layer_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - layer_versions
  - lambda
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>layer_versions</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>layer_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>layer_versions</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.lambda.layer_versions</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>layer_version_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
layer_version_arn
FROM awscc.lambda.layer_versions
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>layer_versions</code> resource, the following permissions are required:

### Create
```json
lambda:PublishLayerVersion,
s3:GetObject,
s3:GetObjectVersion
```

### List
```json
lambda:ListLayerVersions
```

