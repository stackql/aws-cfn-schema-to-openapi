---
title: authorizer
hide_title: false
hide_table_of_contents: false
keywords:
  - authorizer
  - apigateway
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>authorizer</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>authorizer</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>authorizer</td></tr>
<tr><td><b>Id</b></td><td><code>aws.apigateway.authorizer</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>rest_api_id</code></td><td><code>string</code></td><td>The identifier of the API.</td></tr>
<tr><td><code>authorizer_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>auth_type</code></td><td><code>string</code></td><td>Optional customer-defined field, used in OpenAPI imports and exports without functional impact.</td></tr>
<tr><td><code>authorizer_credentials</code></td><td><code>string</code></td><td>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer.</td></tr>
<tr><td><code>authorizer_result_ttl_in_seconds</code></td><td><code>integer</code></td><td>The TTL in seconds of cached authorizer results.</td></tr>
<tr><td><code>authorizer_uri</code></td><td><code>string</code></td><td>Specifies the authorizer's Uniform Resource Identifier (URI).</td></tr>
<tr><td><code>identity_source</code></td><td><code>string</code></td><td>The identity source for which authorization is requested.</td></tr>
<tr><td><code>identity_validation_expression</code></td><td><code>string</code></td><td>A validation expression for the incoming identity token.</td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>The name of the authorizer.</td></tr>
<tr><td><code>provider_ar_ns</code></td><td><code>array</code></td><td>A list of the Amazon Cognito user pool ARNs for the COGNITO_USER_POOLS authorizer.</td></tr>
<tr><td><code>type</code></td><td><code>string</code></td><td>The authorizer type.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
rest_api_id,
authorizer_id,
auth_type,
authorizer_credentials,
authorizer_result_ttl_in_seconds,
authorizer_uri,
identity_source,
identity_validation_expression,
name,
provider_ar_ns,
type
FROM aws.apigateway.authorizer
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;RestApiId&gt;'
AND data__Identifier = '&lt;AuthorizerId&gt;'
```