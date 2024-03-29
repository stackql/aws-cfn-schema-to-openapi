---
title: agreements
hide_title: false
hide_table_of_contents: false
keywords:
  - agreements
  - transfer
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>agreements</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>agreements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>agreements</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.transfer.agreements</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>agreement_id</code></td><td><code>string</code></td><td>A unique identifier for the agreement.</td></tr>
<tr><td><code>server_id</code></td><td><code>string</code></td><td>A unique identifier for the server.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
agreement_id,
server_id
FROM awscc.transfer.agreements
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>agreements</code> resource, the following permissions are required:

### Create
```json
transfer:CreateAgreement,
transfer:TagResource,
iam:PassRole
```

### List
```json
transfer:ListAgreements
```

