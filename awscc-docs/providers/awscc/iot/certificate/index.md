---
title: certificate
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate
  - iot
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
<tr><td><b>Id</b></td><td><code>awscc.iot.certificate</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ca_certificate_pem</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>certificate_pem</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>certificate_signing_request</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>certificate_mode</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>status</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
ca_certificate_pem,
certificate_pem,
certificate_signing_request,
certificate_mode,
status,
id,
arn
FROM awscc.iot.certificate
WHERE data__Identifier = '<Id>';
```

## Permissions

To operate on the <code>certificate</code> resource, the following permissions are required:

### Read
```json
iot:DescribeCertificate
```

### Update
```json
iot:UpdateCertificate,
iot:DescribeCertificate
```

### Delete
```json
iot:DeleteCertificate,
iot:UpdateCertificate,
iot:DescribeCertificate
```

