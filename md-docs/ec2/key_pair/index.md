---
title: key_pair
hide_title: false
hide_table_of_contents: false
keywords:
  - key_pair
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
Gets an individual <code>key_pair</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>key_pair</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.key_pair</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>KeyName</code></td><td><code>string</code></td><td>The name of the SSH key pair</td></tr><tr><td><code>KeyType</code></td><td><code>string</code></td><td>The title of the TPS report is a mandatory element.</td></tr><tr><td><code>PublicKeyMaterial</code></td><td><code>string</code></td><td>Plain text public key to import</td></tr><tr><td><code>KeyFingerprint</code></td><td><code>string</code></td><td>A short sequence of bytes used for public key verification</td></tr><tr><td><code>KeyPairId</code></td><td><code>string</code></td><td>An AWS generated ID for the key pair</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.key_pair
WHERE region = 'us-east-1' AND data__Identifier = '<KeyName>'
</pre>
