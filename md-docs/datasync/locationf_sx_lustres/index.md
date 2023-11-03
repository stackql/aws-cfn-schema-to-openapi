---
title: locationf_sx_lustres
hide_title: false
hide_table_of_contents: false
keywords:
  - locationf_sx_lustres
  - datasync
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>locationf_sx_lustres</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>locationf_sx_lustres</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.datasync.locationf_sx_lustres</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>FsxFilesystemArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) for the FSx for Lustre file system.</td></tr><tr><td><code>SecurityGroupArns</code></td><td><code>array</code></td><td>The ARNs of the security groups that are to use to configure the FSx for Lustre file system.</td></tr><tr><td><code>Subdirectory</code></td><td><code>string</code></td><td>A subdirectory in the location's path.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr><tr><td><code>LocationArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Amazon FSx for Lustre file system location that is created.</td></tr><tr><td><code>LocationUri</code></td><td><code>string</code></td><td>The URL of the FSx for Lustre location that was described.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.datasync.locationf_sx_lustres
WHERE region = 'us-east-1'
</pre>