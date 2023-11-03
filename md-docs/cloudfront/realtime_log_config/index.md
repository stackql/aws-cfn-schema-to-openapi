---
title: realtime_log_config
hide_title: false
hide_table_of_contents: false
keywords:
  - realtime_log_config
  - cloudfront
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>realtime_log_config</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>realtime_log_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.cloudfront.realtime_log_config</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>EndPoints</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Fields</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SamplingRate</code></td><td><code>number</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.cloudfront.realtime_log_config
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>'
</pre>