---
title: identity_pool_role_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_pool_role_attachments
  - cognito
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>identity_pool_role_attachments</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>identity_pool_role_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.cognito.identity_pool_role_attachments</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>IdentityPoolId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Roles</code></td><td><code>object</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>RoleMappings</code></td><td><code>object</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.cognito.identity_pool_role_attachments
WHERE region = 'us-east-1'
</pre>