---
title: log_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - log_streams
  - logs
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>log_streams</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>log_streams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.logs.log_streams</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>LogGroupName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>LogStreamName</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.logs.log_streams
WHERE region = 'us-east-1'
</pre>