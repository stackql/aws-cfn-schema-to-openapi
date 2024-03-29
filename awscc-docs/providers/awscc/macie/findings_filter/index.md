---
title: findings_filter
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_filter
  - macie
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>findings_filter</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>findings_filter</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>findings_filter</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.macie.findings_filter</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>Findings filter name</td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td>Findings filter description</td></tr>
<tr><td><code>finding_criteria</code></td><td><code>object</code></td><td>Findings filter criteria.</td></tr>
<tr><td><code>action</code></td><td><code>string</code></td><td>Findings filter action.</td></tr>
<tr><td><code>position</code></td><td><code>integer</code></td><td>Findings filter position.</td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td>Findings filter ID.</td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>Findings filter ARN.</td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>A collection of tags associated with a resource</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
name,
description,
finding_criteria,
action,
position,
id,
arn,
tags
FROM awscc.macie.findings_filter
WHERE data__Identifier = '<Id>';
```

## Permissions

To operate on the <code>findings_filter</code> resource, the following permissions are required:

### Read
```json
macie2:GetFindingsFilter
```

### Update
```json
macie2:GetFindingsFilter,
macie2:UpdateFindingsFilter,
macie2:TagResource,
macie2:UntagResource
```

### Delete
```json
macie2:DeleteFindingsFilter
```

