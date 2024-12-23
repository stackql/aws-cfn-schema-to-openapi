---
title: function_configurations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - function_configurations_list_only
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Lists <code>function_configurations</code> in a region or regions, for all properties use <a href="/providers/aws/serviceName/function_configurations/"><code>function_configurations</code></a>

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>function_configurations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.function_configurations_list_only" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="function_id" /></td><td><code>string</code></td><td>The unique identifier for the function generated by the service</td></tr>
<tr><td><CopyableCode code="function_arn" /></td><td><code>string</code></td><td>The ARN for the function generated by the service</td></tr>
<tr><td><CopyableCode code="api_id" /></td><td><code>string</code></td><td>The AWS AppSync GraphQL API that you want to attach using this function.</td></tr>
<tr><td><CopyableCode code="code" /></td><td><code>string</code></td><td>The resolver code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.</td></tr>
<tr><td><CopyableCode code="code_s3_location" /></td><td><code>string</code></td><td>The Amazon S3 endpoint (where the code is located??).</td></tr>
<tr><td><CopyableCode code="data_source_name" /></td><td><code>string</code></td><td>The name of data source this function will attach.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The function description.</td></tr>
<tr><td><CopyableCode code="function_version" /></td><td><code>string</code></td><td>The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.</td></tr>
<tr><td><CopyableCode code="max_batch_size" /></td><td><code>integer</code></td><td>The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the function.</td></tr>
<tr><td><CopyableCode code="request_mapping_template" /></td><td><code>string</code></td><td>The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.</td></tr>
<tr><td><CopyableCode code="request_mapping_template_s3_location" /></td><td><code>string</code></td><td>Describes a Sync configuration for a resolver. Contains information on which Conflict Detection, as well as Resolution strategy, should be performed when the resolver is invoked.</td></tr>
<tr><td><CopyableCode code="response_mapping_template" /></td><td><code>string</code></td><td>The Function response mapping template.</td></tr>
<tr><td><CopyableCode code="response_mapping_template_s3_location" /></td><td><code>string</code></td><td>The location of a response mapping template in an Amazon S3 bucket. Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.</td></tr>
<tr><td><CopyableCode code="runtime" /></td><td><code>object</code></td><td>Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.</td></tr>
<tr><td><CopyableCode code="sync_config" /></td><td><code>object</code></td><td>Describes a Sync configuration for a resolver. Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

## Methods

<table><tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>

## `SELECT` examples
Lists all <code>function_configurations</code> in a region.
```sql
SELECT
region,
function_arn
FROM aws.appsync.function_configurations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>function_configurations_list_only</code> resource, see <a href="/providers/aws/appsync/function_configurations/#permissions"><code>function_configurations</code></a>

