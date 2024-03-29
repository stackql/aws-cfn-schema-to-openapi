---
title: queue_inline_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - queue_inline_policy
  - sqs
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>queue_inline_policy</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>queue_inline_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>queue_inline_policy</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.sqs.queue_inline_policy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>policy_document</code></td><td><code>object</code></td><td>A policy document that contains permissions to add to the specified SQS queue</td></tr>
<tr><td><code>queue</code></td><td><code>string</code></td><td>The URL of the SQS queue.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
policy_document,
queue
FROM awscc.sqs.queue_inline_policy
WHERE data__Identifier = '<Queue>';
```

## Permissions

To operate on the <code>queue_inline_policy</code> resource, the following permissions are required:

### Read
```json
sqs:GetQueueAttributes,
sqs:GetQueueUrl
```

### Delete
```json
sqs:SetQueueAttributes,
sqs:GetQueueAttributes
```

### Update
```json
sqs:SetQueueAttributes,
sqs:GetQueueAttributes,
sqs:GetQueueUrl
```

