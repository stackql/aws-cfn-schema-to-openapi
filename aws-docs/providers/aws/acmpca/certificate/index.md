---
title: certificate
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate
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
Gets an individual <code>certificate</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>certificate</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>certificate</td></tr>
<tr><td><b>Id</b></td><td><code>aws.acmpca.certificate</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>api_passthrough</code></td><td><code>object</code></td><td>These are fields to be overridden in a certificate at the time of issuance. These requires an API_Passthrough template be used or they will be ignored.</td></tr>
<tr><td><code>certificate_authority_arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) for the private CA to issue the certificate.</td></tr>
<tr><td><code>certificate_signing_request</code></td><td><code>string</code></td><td>The certificate signing request (CSR) for the Certificate.</td></tr>
<tr><td><code>signing_algorithm</code></td><td><code>string</code></td><td>The name of the algorithm that will be used to sign the Certificate.</td></tr>
<tr><td><code>template_arn</code></td><td><code>string</code></td><td>Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, ACM Private CA defaults to the EndEntityCertificate&#x2F;V1 template.</td></tr>
<tr><td><code>validity</code></td><td><code>object</code></td><td>The time before which the Certificate will be valid.</td></tr>
<tr><td><code>validity_not_before</code></td><td><code>object</code></td><td>The time after which the Certificate will be valid.</td></tr>
<tr><td><code>certificate</code></td><td><code>string</code></td><td>The issued certificate in base 64 PEM-encoded format.</td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>The ARN of the issued certificate.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
api_passthrough,
certificate_authority_arn,
certificate_signing_request,
signing_algorithm,
template_arn,
validity,
validity_not_before,
certificate,
arn
FROM aws.acmpca.certificate
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Arn&gt;'
AND data__Identifier = '&lt;CertificateAuthorityArn&gt;'
```