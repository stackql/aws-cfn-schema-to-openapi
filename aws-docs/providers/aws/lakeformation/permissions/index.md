---
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - lakeformation
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>permissions</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>permissions</td></tr>
<tr><td><b>Id</b></td><td><code>aws.lakeformation.permissions</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>resource</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>permissions</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>data_lake_principal</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>permissions_with_grant_option</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
resource,
permissions,
id,
data_lake_principal,
permissions_with_grant_option
FROM aws.lakeformation.permissions
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Id&gt;'
```