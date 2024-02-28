---
title: lifecycle_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_policy
  - dlm
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>lifecycle_policy</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>lifecycle_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>lifecycle_policy</td></tr>
<tr><td><b>Id</b></td><td><code>aws.dlm.lifecycle_policy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>create_interval</code></td><td><code>integer</code></td><td></td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>extend_deletion</code></td><td><code>boolean</code></td><td></td></tr>
<tr><td><code>exclusions</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>retain_interval</code></td><td><code>integer</code></td><td></td></tr>
<tr><td><code>execution_role_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>default_policy</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>state</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>cross_region_copy_targets</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>policy_details</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>copy_tags</code></td><td><code>boolean</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.





## Example
```sql
SELECT
region,
create_interval,
description,
extend_deletion,
exclusions,
retain_interval,
execution_role_arn,
default_policy,
state,
cross_region_copy_targets,
policy_details,
id,
arn,
tags,
copy_tags
FROM aws.dlm.lifecycle_policy
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Id&gt;'
```
