---
title: member
hide_title: false
hide_table_of_contents: false
keywords:
  - member
  - managedblockchain
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>member</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>member</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>member</td></tr>
<tr><td><b>Id</b></td><td><code>aws.managedblockchain.member</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>member_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>network_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>member_configuration</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>network_configuration</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>invitation_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
member_id,
network_id,
member_configuration,
network_configuration,
invitation_id
FROM aws.managedblockchain.member
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;MemberId&gt;'
```