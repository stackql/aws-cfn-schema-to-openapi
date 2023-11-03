---
title: continuous_deployment_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - continuous_deployment_policy
  - cloudfront
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>continuous_deployment_policy</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>continuous_deployment_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.cloudfront.continuous_deployment_policy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ContinuousDeploymentPolicyConfig</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>LastModifiedTime</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.cloudfront.continuous_deployment_policy
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>