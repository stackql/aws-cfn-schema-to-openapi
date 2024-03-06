---
title: assistants
hide_title: false
hide_table_of_contents: false
keywords:
  - assistants
  - wisdom
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>assistants</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>assistants</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>assistants</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.wisdom.assistants</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>assistant_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>assistants</code> resource, the following permissions are required:

### Create
<pre>
kms:CreateGrant,
kms:DescribeKey,
wisdom:CreateAssistant,
wisdom:TagResource</pre>

### List
<pre>
wisdom:ListAssistants</pre>


## Example
```sql
SELECT
region,
assistant_id
FROM awscc.wisdom.assistants
WHERE region = 'us-east-1'
```