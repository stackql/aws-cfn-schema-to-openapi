---
title: prefix_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - prefix_lists
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>prefix_lists</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>prefix_lists</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.prefix_lists</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>PrefixListName</code></td><td><code>string</code></td><td>Name of Prefix List.</td></tr><tr><td><code>PrefixListId</code></td><td><code>string</code></td><td>Id of Prefix List.</td></tr><tr><td><code>OwnerId</code></td><td><code>string</code></td><td>Owner Id of Prefix List.</td></tr><tr><td><code>AddressFamily</code></td><td><code>string</code></td><td>Ip Version of Prefix List.</td></tr><tr><td><code>MaxEntries</code></td><td><code>integer</code></td><td>Max Entries of Prefix List.</td></tr><tr><td><code>Version</code></td><td><code>integer</code></td><td>Version of Prefix List.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>Tags for Prefix List</td></tr><tr><td><code>Entries</code></td><td><code>array</code></td><td>Entries of Prefix List.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Prefix List.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.prefix_lists
WHERE region = 'us-east-1'
</pre>