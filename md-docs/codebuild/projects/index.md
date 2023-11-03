---
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - codebuild
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>projects</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.codebuild.projects</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ResourceAccessRole</code></td><td><code>string</code></td><td></td></tr><tr><td><code>VpcConfig</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>SecondarySources</code></td><td><code>array</code></td><td></td></tr><tr><td><code>EncryptionKey</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SecondaryArtifacts</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Source</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td></td></tr><tr><td><code>LogsConfig</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ServiceRole</code></td><td><code>string</code></td><td></td></tr><tr><td><code>QueuedTimeoutInMinutes</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>SecondarySourceVersions</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr><tr><td><code>SourceVersion</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Triggers</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Artifacts</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>BadgeEnabled</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>FileSystemLocations</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Environment</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ConcurrentBuildLimit</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>Visibility</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>BuildBatchConfig</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>TimeoutInMinutes</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>Cache</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.codebuild.projects
WHERE region = 'us-east-1'
</pre>