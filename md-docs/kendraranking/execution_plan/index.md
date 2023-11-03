---
title: execution_plan
hide_title: false
hide_table_of_contents: false
keywords:
  - execution_plan
  - kendraranking
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>execution_plan</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>execution_plan</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.kendraranking.execution_plan</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>undefined</code></td><td>A description for the execution plan</td></tr><tr><td><code>Tags</code></td><td><code>undefined</code></td><td>Tags for labeling the execution plan</td></tr><tr><td><code>Name</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>CapacityUnits</code></td><td><code>undefined</code></td><td>Capacity units</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.kendraranking.execution_plan
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>