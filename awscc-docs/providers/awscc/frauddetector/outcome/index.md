---
title: outcome
hide_title: false
hide_table_of_contents: false
keywords:
  - outcome
  - frauddetector
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>outcome</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>outcome</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>outcome</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.frauddetector.outcome</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>The name of the outcome.</td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>Tags associated with this outcome.</td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td>The outcome description.</td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>The outcome ARN.</td></tr>
<tr><td><code>created_time</code></td><td><code>string</code></td><td>The timestamp when the outcome was created.</td></tr>
<tr><td><code>last_updated_time</code></td><td><code>string</code></td><td>The timestamp when the outcome was last updated.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
name,
tags,
description,
arn,
created_time,
last_updated_time
FROM awscc.frauddetector.outcome
WHERE data__Identifier = '<Arn>';
```

## Permissions

To operate on the <code>outcome</code> resource, the following permissions are required:

### Read
```json
frauddetector:GetOutcomes,
frauddetector:ListTagsForResource
```

### Update
```json
frauddetector:GetOutcomes,
frauddetector:PutOutcome,
frauddetector:ListTagsForResource,
frauddetector:TagResource,
frauddetector:UntagResource
```

### Delete
```json
frauddetector:GetOutcomes,
frauddetector:DeleteOutcome
```

