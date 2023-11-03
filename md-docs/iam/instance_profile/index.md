---
title: instance_profile
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_profile
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
Gets an individual <code>instance_profile</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instance_profile</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iam.instance_profile</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Path</code></td><td><code>string</code></td><td>The path to the instance profile.</td></tr><tr><td><code>Roles</code></td><td><code>array</code></td><td>The name of the role to associate with the instance profile. Only one role can be assigned to an EC2 instance at a time, and all applications on the instance share the same role and permissions.</td></tr><tr><td><code>InstanceProfileName</code></td><td><code>string</code></td><td>The name of the instance profile to create.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the instance profile.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.iam.instance_profile
WHERE region = 'us-east-1' AND data__Identifier = '<InstanceProfileName>'
</pre>
