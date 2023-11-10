---
title: hook_type_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - hook_type_configs
  - cloudformation
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>hook_type_configs</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>hook_type_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>hook_type_configs</td></tr>
<tr><td><b>Id</b></td><td><code>aws.cloudformation.hook_type_configs</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>configuration_arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) for the configuration data, in this account and region.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
configuration_arn
FROM aws.cloudformation.hook_type_configs
WHERE region = 'us-east-1'
```