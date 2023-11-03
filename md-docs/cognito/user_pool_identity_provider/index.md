---
title: user_pool_identity_provider
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_identity_provider
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
Gets an individual <code>user_pool_identity_provider</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>user_pool_identity_provider</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.cognito.user_pool_identity_provider</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ProviderName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>UserPoolId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AttributeMapping</code></td><td><code>object</code></td><td></td></tr><tr><td><code>ProviderDetails</code></td><td><code>object</code></td><td></td></tr><tr><td><code>ProviderType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>IdpIdentifiers</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.cognito.user_pool_identity_provider
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>