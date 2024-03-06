---
title: server_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - server_certificates
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
Retrieves a list of <code>server_certificates</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>server_certificates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>server_certificates</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.iam.server_certificates</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>server_certificate_name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>server_certificates</code> resource, the following permissions are required:

### Create
<pre>
iam:UploadServerCertificate,
iam:TagServerCertificate,
iam:GetServerCertificate</pre>

### List
<pre>
iam:ListServerCertificates,
iam:GetServerCertificate</pre>


## Example
```sql
SELECT
region,
server_certificate_name
FROM awscc.iam.server_certificates

```