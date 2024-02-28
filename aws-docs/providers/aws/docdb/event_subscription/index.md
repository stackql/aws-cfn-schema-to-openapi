---
title: event_subscription
hide_title: false
hide_table_of_contents: false
keywords:
  - event_subscription
  - docdb
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>event_subscription</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>event_subscription</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>event_subscription</td></tr>
<tr><td><b>Id</b></td><td><code>aws.docdb.event_subscription</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>source_type</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>enabled</code></td><td><code>boolean</code></td><td></td></tr>
<tr><td><code>event_categories</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>subscription_name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>sns_topic_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>source_ids</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.





## Example
```sql
SELECT
region,
source_type,
enabled,
event_categories,
subscription_name,
sns_topic_arn,
source_ids,
id
FROM aws.docdb.event_subscription
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Id&gt;'
```
