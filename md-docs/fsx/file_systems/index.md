---
title: file_systems
hide_title: false
hide_table_of_contents: false
keywords:
  - file_systems
  - fsx
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>file_systems</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>file_systems</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.fsx.file_systems</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>StorageType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>KmsKeyId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>StorageCapacity</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>RootVolumeId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>LustreConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>BackupId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>OntapConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>DNSName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SubnetIds</code></td><td><code>array</code></td><td></td></tr><tr><td><code>SecurityGroupIds</code></td><td><code>array</code></td><td></td></tr><tr><td><code>WindowsConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>FileSystemTypeVersion</code></td><td><code>string</code></td><td></td></tr><tr><td><code>OpenZFSConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ResourceARN</code></td><td><code>string</code></td><td></td></tr><tr><td><code>FileSystemType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>LustreMountName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.fsx.file_systems
WHERE region = 'us-east-1'
</pre>