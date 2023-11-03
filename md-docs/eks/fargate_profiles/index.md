---
title: fargate_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - fargate_profiles
  - eks
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>fargate_profiles</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>fargate_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.eks.fargate_profiles</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ClusterName</code></td><td><code>string</code></td><td>Name of the Cluster</td></tr><tr><td><code>FargateProfileName</code></td><td><code>string</code></td><td>Name of FargateProfile</td></tr><tr><td><code>PodExecutionRoleArn</code></td><td><code>string</code></td><td>The IAM policy arn for pods</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Subnets</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Selectors</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.eks.fargate_profiles
WHERE region = 'us-east-1'
</pre>