---
title: parameter_group
hide_title: false
hide_table_of_contents: false
keywords:
  - parameter_group
  - dax
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>parameter_group</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>parameter_group</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>parameter_group</td></tr>
<tr><td><b>Id</b></td><td><code>aws.dax.parameter_group</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>parameter_name_values</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>parameter_group_name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
parameter_name_values,
description,
id,
parameter_group_name
FROM aws.dax.parameter_group
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Id&gt;'
```