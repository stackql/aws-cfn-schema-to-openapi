---
title: account_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - account_aliases
  - supportapp
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>account_aliases</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>account_aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>account_aliases</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.supportapp.account_aliases</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>account_alias_resource_id</code></td><td><code>string</code></td><td>Unique identifier representing an alias tied to an account</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
account_alias_resource_id
FROM awscc.supportapp.account_aliases
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>account_aliases</code> resource, the following permissions are required:

### Create
```json
supportapp:PutAccountAlias,
supportapp:GetAccountAlias
```

### List
```json
supportapp:GetAccountAlias
```

