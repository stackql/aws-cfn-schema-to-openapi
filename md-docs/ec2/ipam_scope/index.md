---
title: ipam_scope
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_scope
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
Gets an individual <code>ipam_scope</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ipam_scope</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.ipam_scope</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>IpamScopeId</code></td><td><code>string</code></td><td>Id of the IPAM scope.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the IPAM scope.</td></tr><tr><td><code>IpamId</code></td><td><code>string</code></td><td>The Id of the IPAM this scope is a part of.</td></tr><tr><td><code>IpamArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the IPAM this scope is a part of.</td></tr><tr><td><code>IpamScopeType</code></td><td><code>string</code></td><td>Determines whether this scope contains publicly routable space or space for a private network</td></tr><tr><td><code>IsDefault</code></td><td><code>boolean</code></td><td>Is this one of the default scopes created with the IPAM.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PoolCount</code></td><td><code>integer</code></td><td>The number of pools that currently exist in this scope.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.ipam_scope
WHERE region = 'us-east-1' AND data__Identifier = '<IpamScopeId>'
</pre>
