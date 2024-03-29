---
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - organizations
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>accounts</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>accounts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>accounts</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.organizations.accounts</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>account_id</code></td><td><code>string</code></td><td>If the account was created successfully, the unique identifier (ID) of the new account.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
account_id
FROM awscc.organizations.accounts
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>accounts</code> resource, the following permissions are required:

### Create
```json
organizations:CreateAccount,
organizations:DescribeCreateAccountStatus,
organizations:MoveAccount,
organizations:ListParents,
organizations:TagResource,
organizations:DescribeAccount,
organizations:ListTagsForResource
```

### List
```json
organizations:ListAccounts
```

