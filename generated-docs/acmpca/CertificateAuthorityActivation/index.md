---
title: CertificateAuthorityActivation
hide_title: false
hide_table_of_contents: false
keywords:
  - CertificateAuthorityActivation
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
The CertificateAuthorityActivation resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>acmpca.CertificateAuthorityActivation</b></span><br />
<span>resource id:&nbsp;<b>acmpca:CertificateAuthorityActivation</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>acmpca.CertificateAuthorityActivation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>acmpca:CertificateAuthorityActivation</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>CertificateAuthorityArn</code></td><td><code>string</code></td><td>Arn of the Certificate Authority.</td></tr><tr><td><code>Certificate</code></td><td><code>string</code></td><td>Certificate Authority certificate that will be installed in the Certificate Authority.</td></tr><tr><td><code>CertificateChain</code></td><td><code>string</code></td><td>Certificate chain for the Certificate Authority certificate.</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>The status of the Certificate Authority.</td></tr><tr><td><code>CompleteCertificateChain</code></td><td><code>string</code></td><td>The complete certificate chain, including the Certificate Authority certificate.</td></tr>
</tbody></table>