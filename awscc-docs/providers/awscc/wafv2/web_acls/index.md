---
title: web_acls
hide_title: false
hide_table_of_contents: false
keywords:
  - web_acls
  - wafv2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>web_acls</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>web_acls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>web_acls</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.wafv2.web_acls</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>name</code></td><td><code>undefined</code></td><td></td></tr>
<tr><td><code>id</code></td><td><code>undefined</code></td><td></td></tr>
<tr><td><code>scope</code></td><td><code>undefined</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
name,
id,
scope
FROM awscc.wafv2.web_acls

```

## Permissions

To operate on the <code>web_acls</code> resource, the following permissions are required:

### Create
```json
wafv2:CreateWebACL,
wafv2:GetWebACL,
wafv2:ListTagsForResource
```

### List
```json
wafv2:listWebACLs
```

