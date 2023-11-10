---
title: tag_option
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_option
  - servicecatalog
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>tag_option</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tag_option</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>tag_option</td></tr>
<tr><td><b>Id</b></td><td><code>aws.servicecatalog.tag_option</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>active</code></td><td><code>boolean</code></td><td></td></tr>
<tr><td><code>value</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>key</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
id,
active,
value,
key
FROM aws.servicecatalog.tag_option
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Id&gt;'
```