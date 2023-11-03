---
title: launch_template
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_template
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>launch_template</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>launch_template</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.launch_template</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>LaunchTemplateName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>LaunchTemplateData</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>VersionDescription</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TagSpecifications</code></td><td><code>array</code></td><td></td></tr><tr><td><code>LatestVersionNumber</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DefaultVersionNumber</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.launch_template
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>