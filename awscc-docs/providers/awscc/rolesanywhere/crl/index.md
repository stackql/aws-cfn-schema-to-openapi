---
title: crl
hide_title: false
hide_table_of_contents: false
keywords:
  - crl
  - rolesanywhere
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>crl</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>crl</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>crl</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.rolesanywhere.crl</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>crl_data</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>crl_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>enabled</code></td><td><code>boolean</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>trust_anchor_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
crl_data,
crl_id,
enabled,
name,
trust_anchor_arn,
tags
FROM awscc.rolesanywhere.crl
WHERE data__Identifier = '<CrlId>';
```

## Permissions

To operate on the <code>crl</code> resource, the following permissions are required:

### Read
```json
rolesanywhere:GetCrl,
rolesanywhere:ListTagsForResource
```

### Update
```json
rolesanywhere:EnableCrl,
rolesanywhere:DisableCrl,
rolesanywhere:UpdateCrl,
rolesanywhere:TagResource,
rolesanywhere:UntagResource,
rolesanywhere:ListTagsForResource
```

### Delete
```json
rolesanywhere:DeleteCrl
```

