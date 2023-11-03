---
title: assistant
hide_title: false
hide_table_of_contents: false
keywords:
  - assistant
  - wisdom
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>assistant</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>assistant</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.wisdom.assistant</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Type</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AssistantArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AssistantId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ServerSideEncryptionConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.wisdom.assistant
WHERE region = 'us-east-1' AND data__Identifier = '<AssistantId>'
</pre>