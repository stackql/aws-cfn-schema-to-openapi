---
title: SubnetGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - SubnetGroup
  - elasticache
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The SubnetGroup resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>SubnetGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.elasticache.SubnetGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Description</code></td><td><code>string</code></td><td>The description for the cache subnet group.</td></tr><tr><td><code>SubnetIds</code></td><td><code>array</code></td><td>The EC2 subnet IDs for the cache subnet group.</td></tr><tr><td><code>CacheSubnetGroupName</code></td><td><code>string</code></td><td>The name for the cache subnet group. This value is stored as a lowercase string.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>