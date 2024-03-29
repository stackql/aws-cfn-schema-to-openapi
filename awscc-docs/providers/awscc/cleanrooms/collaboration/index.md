---
title: collaboration
hide_title: false
hide_table_of_contents: false
keywords:
  - collaboration
  - cleanrooms
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>collaboration</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>collaboration</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>collaboration</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.cleanrooms.collaboration</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.</td></tr>
<tr><td><code>collaboration_identifier</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>creator_display_name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>creator_member_abilities</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>data_encryption_metadata</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>members</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>query_log_status</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>creator_payment_configuration</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn,
tags,
collaboration_identifier,
creator_display_name,
creator_member_abilities,
data_encryption_metadata,
description,
members,
name,
query_log_status,
creator_payment_configuration
FROM awscc.cleanrooms.collaboration
WHERE data__Identifier = '<CollaborationIdentifier>';
```

## Permissions

To operate on the <code>collaboration</code> resource, the following permissions are required:

### Read
```json
cleanrooms:GetCollaboration,
cleanrooms:ListMembers,
cleanrooms:ListTagsForResource
```

### Update
```json
cleanrooms:UpdateCollaboration,
cleanrooms:GetCollaboration,
cleanrooms:ListMembers,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:UntagResource
```

### Delete
```json
cleanrooms:DeleteCollaboration,
cleanrooms:GetCollaboration,
cleanrooms:ListTagsForResource,
cleanrooms:UntagResource,
cleanrooms:ListMembers,
cleanrooms:ListCollaborations
```

