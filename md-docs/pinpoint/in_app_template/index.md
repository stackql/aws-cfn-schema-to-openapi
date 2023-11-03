---
title: in_app_template
hide_title: false
hide_table_of_contents: false
keywords:
  - in_app_template
  - pinpoint
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>in_app_template</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>in_app_template</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.pinpoint.in_app_template</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Content</code></td><td><code>array</code></td><td></td></tr><tr><td><code>CustomConfig</code></td><td><code>object</code></td><td></td></tr><tr><td><code>Layout</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>object</code></td><td></td></tr><tr><td><code>TemplateDescription</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TemplateName</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.pinpoint.in_app_template
WHERE region = 'us-east-1' AND data__Identifier = '<TemplateName>'
</pre>