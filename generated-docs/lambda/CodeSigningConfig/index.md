---
title: CodeSigningConfig
hide_title: false
hide_table_of_contents: false
keywords:
  - CodeSigningConfig
  - lambda
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The CodeSigningConfig resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>lambda.CodeSigningConfig</b></span><br />
<span>resource id:&nbsp;<b>lambda:CodeSigningConfig</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>lambda.CodeSigningConfig</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>lambda:CodeSigningConfig</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Description</code></td><td><code>string</code></td><td>A description of the CodeSigningConfig</td></tr><tr><td><code>AllowedPublishers</code></td><td><code>undefined</code></td><td>When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list</td></tr><tr><td><code>CodeSigningPolicies</code></td><td><code>undefined</code></td><td>Policies to control how to act if a signature is invalid</td></tr><tr><td><code>CodeSigningConfigId</code></td><td><code>string</code></td><td>A unique identifier for CodeSigningConfig resource</td></tr><tr><td><code>CodeSigningConfigArn</code></td><td><code>string</code></td><td>A unique Arn for CodeSigningConfig resource</td></tr>
</tbody></table>