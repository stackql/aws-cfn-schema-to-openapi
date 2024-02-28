---
title: data_quality_ruleset
hide_title: false
hide_table_of_contents: false
keywords:
  - data_quality_ruleset
  - glue
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>data_quality_ruleset</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_quality_ruleset</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>data_quality_ruleset</td></tr>
<tr><td><b>Id</b></td><td><code>aws.glue.data_quality_ruleset</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ruleset</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>target_table</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>client_token</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.





## Example
```sql
SELECT
region,
ruleset,
description,
target_table,
id,
client_token,
tags,
name
FROM aws.glue.data_quality_ruleset
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Id&gt;'
```
