---
title: stack_set_constraints
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_set_constraints
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
Retrieves a list of <code>stack_set_constraints</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>stack_set_constraints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.servicecatalog.stack_set_constraints</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>StackInstanceControl</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AcceptLanguage</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PortfolioId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ProductId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>RegionList</code></td><td><code>array</code></td><td></td></tr><tr><td><code>AdminRole</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AccountList</code></td><td><code>array</code></td><td></td></tr><tr><td><code>ExecutionRole</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.servicecatalog.stack_set_constraints
WHERE region = 'us-east-1'
</pre>