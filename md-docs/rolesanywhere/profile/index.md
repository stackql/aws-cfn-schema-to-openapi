---
title: profile
hide_title: false
hide_table_of_contents: false
keywords:
  - profile
  - rolesanywhere
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>profile</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>profile</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.rolesanywhere.profile</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>DurationSeconds</code></td><td><code>number</code></td><td></td></tr><tr><td><code>Enabled</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>ManagedPolicyArns</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ProfileArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ProfileId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>RequireInstanceProperties</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>RoleArns</code></td><td><code>array</code></td><td></td></tr><tr><td><code>SessionPolicy</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.rolesanywhere.profile
WHERE region = 'us-east-1' AND data__Identifier = '<ProfileId>'
</pre>