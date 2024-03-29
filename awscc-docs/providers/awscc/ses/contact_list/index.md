---
title: contact_list
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_list
  - ses
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>contact_list</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>contact_list</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>contact_list</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.ses.contact_list</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>contact_list_name</code></td><td><code>string</code></td><td>The name of the contact list.</td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td>The description of the contact list.</td></tr>
<tr><td><code>topics</code></td><td><code>array</code></td><td>The topics associated with the contact list.</td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>The tags (keys and values) associated with the contact list.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
contact_list_name,
description,
topics,
tags
FROM awscc.ses.contact_list
WHERE data__Identifier = '<ContactListName>';
```

## Permissions

To operate on the <code>contact_list</code> resource, the following permissions are required:

### Read
```json
ses:GetContactList
```

### Update
```json
ses:UpdateContactList,
ses:UntagResource,
ses:TagResource
```

### Delete
```json
ses:DeleteContactList
```

