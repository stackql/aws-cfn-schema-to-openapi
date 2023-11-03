---
title: extension
hide_title: false
hide_table_of_contents: false
keywords:
  - extension
  - appconfig
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>extension</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>extension</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.appconfig.extension</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>VersionNumber</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>Name of the extension.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>Description of the extension.</td></tr><tr><td><code>Actions</code></td><td><code>object</code></td><td></td></tr><tr><td><code>Parameters</code></td><td><code>object</code></td><td></td></tr><tr><td><code>LatestVersionNumber</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value tags to apply to this resource.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.appconfig.extension
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>