---
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
  - codepipeline
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>pipelines</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>pipelines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.codepipeline.pipelines</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ArtifactStores</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Version</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ArtifactStore</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>DisableInboundStageTransitions</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Stages</code></td><td><code>array</code></td><td></td></tr><tr><td><code>RestartExecutionOnUpdate</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>RoleArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.codepipeline.pipelines
WHERE region = 'us-east-1'
</pre>