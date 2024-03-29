---
title: code_signing_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - code_signing_configs
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
Retrieves a list of <code>code_signing_configs</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>code_signing_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>code_signing_configs</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.lambda.code_signing_configs</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>code_signing_config_arn</code></td><td><code>string</code></td><td>A unique Arn for CodeSigningConfig resource</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
code_signing_config_arn
FROM awscc.lambda.code_signing_configs
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>code_signing_configs</code> resource, the following permissions are required:

### Create
```json
lambda:CreateCodeSigningConfig
```

### List
```json
lambda:ListCodeSigningConfigs
```

