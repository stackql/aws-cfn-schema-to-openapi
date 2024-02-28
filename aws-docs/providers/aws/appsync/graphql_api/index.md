---
title: graphql_api
hide_title: false
hide_table_of_contents: false
keywords:
  - graphql_api
  - appsync
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>graphql_api</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>graphql_api</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>graphql_api</td></tr>
<tr><td><b>Id</b></td><td><code>aws.appsync.graphql_api</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>open_id_connect_config</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>merged_api_execution_role_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>enhanced_metrics_config</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>realtime_dns</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>graph_ql_url</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>environment_variables</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>graph_ql_dns</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>api_type</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>lambda_authorizer_config</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>graph_ql_endpoint_arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>authentication_type</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>query_depth_limit</code></td><td><code>integer</code></td><td></td></tr>
<tr><td><code>introspection_config</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>owner_contact</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>resolver_count_limit</code></td><td><code>integer</code></td><td></td></tr>
<tr><td><code>additional_authentication_providers</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>realtime_url</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>xray_enabled</code></td><td><code>boolean</code></td><td></td></tr>
<tr><td><code>visibility</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>user_pool_config</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>api_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>log_config</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.





## Example
```sql
SELECT
region,
open_id_connect_config,
merged_api_execution_role_arn,
enhanced_metrics_config,
realtime_dns,
name,
graph_ql_url,
environment_variables,
graph_ql_dns,
api_type,
lambda_authorizer_config,
tags,
graph_ql_endpoint_arn,
authentication_type,
query_depth_limit,
introspection_config,
owner_contact,
resolver_count_limit,
additional_authentication_providers,
realtime_url,
xray_enabled,
visibility,
id,
arn,
user_pool_config,
api_id,
log_config
FROM aws.appsync.graphql_api
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Id&gt;'
```
