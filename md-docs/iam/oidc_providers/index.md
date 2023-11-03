---
title: oidc_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - oidc_providers
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
Retrieves a list of <code>oidc_providers</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>oidc_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iam.oidc_providers</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ClientIdList</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Url</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ThumbprintList</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Amazon Resource Name (ARN) of the OIDC provider</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.iam.oidc_providers
WHERE region = 'us-east-1'
</pre>
