---
title: server_certificate
hide_title: false
hide_table_of_contents: false
keywords:
  - server_certificate
  - iam
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>server_certificate</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>server_certificate</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iam.server_certificate</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>CertificateBody</code></td><td><code>string</code></td><td></td></tr><tr><td><code>CertificateChain</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ServerCertificateName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Path</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PrivateKey</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Amazon Resource Name (ARN) of the server certificate</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.iam.server_certificate
WHERE region = 'us-east-1' AND data__Identifier = '<ServerCertificateName>'
</pre>
