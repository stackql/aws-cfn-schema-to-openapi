---
title: Role
hide_title: false
hide_table_of_contents: false
keywords:
  - Role
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
The Role resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>Role</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iam.Role</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) for the role.</td></tr><tr><td><code>AssumeRolePolicyDocument</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>A description of the role that you provide.</td></tr><tr><td><code>ManagedPolicyArns</code></td><td><code>array</code></td><td>A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role. </td></tr><tr><td><code>MaxSessionDuration</code></td><td><code>integer</code></td><td>The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours. </td></tr><tr><td><code>Path</code></td><td><code>string</code></td><td>The path to the role.</td></tr><tr><td><code>PermissionsBoundary</code></td><td><code>string</code></td><td>The ARN of the policy used to set the permissions boundary for the role.</td></tr><tr><td><code>Policies</code></td><td><code>array</code></td><td>Adds or updates an inline policy document that is embedded in the specified IAM role. </td></tr><tr><td><code>RoleId</code></td><td><code>string</code></td><td>The stable and unique string identifying the role.</td></tr><tr><td><code>RoleName</code></td><td><code>string</code></td><td>A name for the IAM role, up to 64 characters in length.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of tags that are attached to the role.</td></tr>
</tbody></table>