---
title: table_optimizer
hide_title: false
hide_table_of_contents: false
keywords:
  - table_optimizer
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
Gets an individual <code>table_optimizer</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>table_optimizer</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>table_optimizer</td></tr>
<tr><td><b>Id</b></td><td><code>aws.glue.table_optimizer</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>database_name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>table_name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>type</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>table_optimizer_configuration</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>catalog_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.





## Example
```sql
SELECT
region,
database_name,
table_name,
type,
table_optimizer_configuration,
id,
catalog_id
FROM aws.glue.table_optimizer
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Id&gt;'
```
