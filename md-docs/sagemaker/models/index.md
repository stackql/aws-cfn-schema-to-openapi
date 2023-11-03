---
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
  - sagemaker
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>models</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>models</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.sagemaker.models</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ExecutionRoleArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>EnableNetworkIsolation</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>PrimaryContainer</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ModelName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>VpcConfig</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Containers</code></td><td><code>array</code></td><td></td></tr><tr><td><code>InferenceExecutionConfig</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.sagemaker.models
WHERE region = 'us-east-1'
</pre>