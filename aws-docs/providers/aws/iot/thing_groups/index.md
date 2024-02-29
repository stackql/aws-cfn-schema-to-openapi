---
title: thing_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_groups
  - iot
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>thing_groups</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>thing_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>thing_groups</td></tr>
<tr><td><b>Id</b></td><td><code>aws.iot.thing_groups</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>thing_group_name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>thing_groups</code> resource, the following permissions are required:

### Create
<pre>
iot:DescribeThingGroup,
iot:ListTagsForResource,
iot:CreateThingGroup,
iot:CreateDynamicThingGroup,
iot:TagResource</pre>

### List
<pre>
iot:ListThingGroups,
iot:ListTagsForResource</pre>


## Example
```sql
SELECT
region,
thing_group_name
FROM aws.iot.thing_groups
WHERE region = 'us-east-1'
```