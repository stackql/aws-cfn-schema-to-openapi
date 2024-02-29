---
title: organization_admins
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_admins
  - detective
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>organization_admins</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>organization_admins</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>organization_admins</td></tr>
<tr><td><b>Id</b></td><td><code>aws.detective.organization_admins</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>account_id</code></td><td><code>string</code></td><td>The account ID of the account that should be registered as your Organization's delegated administrator for Detective</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>organization_admins</code> resource, the following permissions are required:

### Create
<pre>
detective:EnableOrganizationAdminAccount,
detective:ListOrganizationAdminAccount,
iam:CreateServiceLinkedRole,
organizations:RegisterDelegatedAdministrator,
organizations:DescribeOrganization,
organizations:EnableAWSServiceAccess,
organizations:ListAccounts</pre>

### List
<pre>
detective:ListOrganizationAdminAccount,
organizations:DescribeOrganization</pre>


## Example
```sql
SELECT
region,
account_id
FROM aws.detective.organization_admins
WHERE region = 'us-east-1'
```