---
title: hook_default_version
hide_title: false
hide_table_of_contents: false
keywords:
  - hook_default_version
  - cloudformation
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>hook_default_version</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>hook_default_version</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.cloudformation.hook_default_version</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>TypeVersionArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the type version.</td></tr><tr><td><code>TypeName</code></td><td><code>string</code></td><td>The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a HookDefaultVersion</td></tr><tr><td><code>VersionId</code></td><td><code>string</code></td><td>The ID of an existing version of the hook to set as the default.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.cloudformation.hook_default_version
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>'
</pre>