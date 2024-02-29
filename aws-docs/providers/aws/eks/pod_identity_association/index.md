---
title: pod_identity_association
hide_title: false
hide_table_of_contents: false
keywords:
  - pod_identity_association
  - eks
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>pod_identity_association</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>pod_identity_association</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>pod_identity_association</td></tr>
<tr><td><b>Id</b></td><td><code>aws.eks.pod_identity_association</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>cluster_name</code></td><td><code>string</code></td><td>The cluster that the pod identity association is created for.</td></tr>
<tr><td><code>role_arn</code></td><td><code>string</code></td><td>The IAM role ARN that the pod identity association is created for.</td></tr>
<tr><td><code>namespace</code></td><td><code>string</code></td><td>The Kubernetes namespace that the pod identity association is created for.</td></tr>
<tr><td><code>service_account</code></td><td><code>string</code></td><td>The Kubernetes service account that the pod identity association is created for.</td></tr>
<tr><td><code>association_arn</code></td><td><code>string</code></td><td>The ARN of the pod identity association.</td></tr>
<tr><td><code>association_id</code></td><td><code>string</code></td><td>The ID of the pod identity association.</td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>pod_identity_association</code> resource, the following permissions are required:

### Read
<pre>
eks:DescribePodIdentityAssociation</pre>

### Update
<pre>
eks:DescribePodIdentityAssociation,
eks:UpdatePodIdentityAssociation,
eks:TagResource,
eks:UntagResource,
iam:PassRole,
iam:GetRole</pre>

### Delete
<pre>
eks:DeletePodIdentityAssociation,
eks:DescribePodIdentityAssociation</pre>


## Example
```sql
SELECT
region,
cluster_name,
role_arn,
namespace,
service_account,
association_arn,
association_id,
tags
FROM aws.eks.pod_identity_association
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;AssociationArn&gt;'
```