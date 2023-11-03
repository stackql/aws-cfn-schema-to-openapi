---
title: managed_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_policy
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
Gets an individual <code>managed_policy</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>managed_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iam.managed_policy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Groups</code></td><td><code>array</code></td><td></td></tr><tr><td><code>ManagedPolicyName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Path</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PolicyDocument</code></td><td><code>object</code></td><td></td></tr><tr><td><code>Roles</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Users</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.iam.managed_policy
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>