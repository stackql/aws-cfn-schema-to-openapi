---
title: pod_identity_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - pod_identity_associations
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
Retrieves a list of <code>pod_identity_associations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>pod_identity_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>pod_identity_associations</td></tr>
<tr><td><b>Id</b></td><td><code>aws.eks.pod_identity_associations</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>association_arn</code></td><td><code>string</code></td><td>The ARN of the pod identity association.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>pod_identity_associations</code> resource, the following permissions are required:

### Create
<pre>
eks:CreatePodIdentityAssociation,
eks:DescribePodIdentityAssociation,
eks:TagResource,
iam:PassRole,
iam:GetRole</pre>

### List
<pre>
eks:ListPodIdentityAssociations</pre>


## Example
```sql
SELECT
region,
association_arn
FROM aws.eks.pod_identity_associations
WHERE region = 'us-east-1'
```