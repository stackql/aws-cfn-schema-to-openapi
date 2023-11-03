---
title: provisioning_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioning_templates
  - iot
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>provisioning_templates</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>provisioning_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iot.provisioning_templates</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>TemplateArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TemplateName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Enabled</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>ProvisioningRoleArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TemplateBody</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TemplateType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PreProvisioningHook</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.iot.provisioning_templates
WHERE region = 'us-east-1'
</pre>