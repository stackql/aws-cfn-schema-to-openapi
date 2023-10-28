---
title: Certificate
hide_title: false
hide_table_of_contents: false
keywords:
  - Certificate
  - acmpca
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Certificate resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>acmpca.Certificate</b></span><br />
<span>resource id:&nbsp;<b>acmpca:Certificate</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>acmpca.Certificate</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>acmpca:Certificate</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ApiPassthrough</code></td><td><code>undefined</code></td><td>These are fields to be overridden in a certificate at the time of issuance. These requires an API_Passthrough template be used or they will be ignored.</td></tr><tr><td><code>CertificateAuthorityArn</code></td><td><code>undefined</code></td><td>The Amazon Resource Name (ARN) for the private CA to issue the certificate.</td></tr><tr><td><code>CertificateSigningRequest</code></td><td><code>string</code></td><td>The certificate signing request (CSR) for the Certificate.</td></tr><tr><td><code>SigningAlgorithm</code></td><td><code>string</code></td><td>The name of the algorithm that will be used to sign the Certificate.</td></tr><tr><td><code>TemplateArn</code></td><td><code>undefined</code></td><td>Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, ACM Private CA defaults to the EndEntityCertificate/V1 template.</td></tr><tr><td><code>Validity</code></td><td><code>undefined</code></td><td>The time before which the Certificate will be valid.</td></tr><tr><td><code>ValidityNotBefore</code></td><td><code>undefined</code></td><td>The time after which the Certificate will be valid.</td></tr><tr><td><code>Certificate</code></td><td><code>string</code></td><td>The issued certificate in base 64 PEM-encoded format.</td></tr><tr><td><code>Arn</code></td><td><code>undefined</code></td><td>The ARN of the issued certificate.</td></tr>
</tbody></table>