---
title: input
hide_title: false
hide_table_of_contents: false
keywords:
  - input
  - medialive
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>input</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>input</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.medialive.input</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Type</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Destinations</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Vpc</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>MediaConnectFlows</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>InputSecurityGroups</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Sources</code></td><td><code>array</code></td><td></td></tr><tr><td><code>InputDevices</code></td><td><code>array</code></td><td></td></tr><tr><td><code>RoleArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>object</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.medialive.input
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>