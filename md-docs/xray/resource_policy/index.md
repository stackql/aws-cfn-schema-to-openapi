---
title: resource_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policy
  - xray
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>resource_policy</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resource_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.xray.resource_policy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>PolicyName</code></td><td><code>string</code></td><td>The name of the resource policy. Must be unique within a specific AWS account.</td></tr><tr><td><code>PolicyDocument</code></td><td><code>string</code></td><td>The resource policy document, which can be up to 5kb in size.</td></tr><tr><td><code>BypassPolicyLockoutCheck</code></td><td><code>boolean</code></td><td>A flag to indicate whether to bypass the resource policy lockout safety check</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.xray.resource_policy
WHERE region = 'us-east-1' AND data__Identifier = '<PolicyName>'
</pre>