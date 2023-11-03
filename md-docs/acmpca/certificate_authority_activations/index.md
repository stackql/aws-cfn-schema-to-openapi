---
title: certificate_authority_activations
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_authority_activations
  - acmpca
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>certificate_authority_activations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>certificate_authority_activations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.acmpca.certificate_authority_activations</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>CertificateAuthorityArn</code></td><td><code>string</code></td><td>Arn of the Certificate Authority.</td></tr><tr><td><code>Certificate</code></td><td><code>string</code></td><td>Certificate Authority certificate that will be installed in the Certificate Authority.</td></tr><tr><td><code>CertificateChain</code></td><td><code>string</code></td><td>Certificate chain for the Certificate Authority certificate.</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>The status of the Certificate Authority.</td></tr><tr><td><code>CompleteCertificateChain</code></td><td><code>string</code></td><td>The complete certificate chain, including the Certificate Authority certificate.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.acmpca.certificate_authority_activations
WHERE region = 'us-east-1'
</pre>