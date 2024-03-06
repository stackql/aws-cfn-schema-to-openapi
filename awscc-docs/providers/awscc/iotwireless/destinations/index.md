---
title: destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - destinations
  - iotwireless
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>destinations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>destinations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>destinations</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.iotwireless.destinations</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>Unique name of destination</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>destinations</code> resource, the following permissions are required:

### Create
<pre>
iam:PassRole,
iotwireless:CreateDestination,
iotwireless:TagResource,
iotwireless:ListTagsForResource</pre>

### List
<pre>
iotwireless:ListDestinations,
iotwireless:ListTagsForResource</pre>


## Example
```sql
SELECT
region,
name
FROM awscc.iotwireless.destinations
WHERE region = 'us-east-1'
```