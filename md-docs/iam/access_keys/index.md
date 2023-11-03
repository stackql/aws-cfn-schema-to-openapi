---
title: access_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - access_keys
  - iam
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>access_keys</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>access_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iam.access_keys</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SecretAccessKey</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Serial</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td></td></tr><tr><td><code>UserName</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.iam.access_keys
WHERE region = 'us-east-1'
</pre>
