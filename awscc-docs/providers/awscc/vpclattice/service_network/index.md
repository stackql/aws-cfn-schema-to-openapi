---
title: service_network
hide_title: false
hide_table_of_contents: false
keywords:
  - service_network
  - vpclattice
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>service_network</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_network</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>service_network</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.vpclattice.service_network</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>created_at</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>last_updated_at</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>auth_type</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn,
created_at,
id,
last_updated_at,
name,
auth_type,
tags
FROM awscc.vpclattice.service_network
WHERE data__Identifier = '<Arn>';
```

## Permissions

To operate on the <code>service_network</code> resource, the following permissions are required:

### Read
```json
vpc-lattice:GetServiceNetwork,
vpc-lattice:ListTagsForResource
```

### Update
```json
vpc-lattice:GetServiceNetwork,
vpc-lattice:UpdateServiceNetwork,
vpc-lattice:TagResource,
vpc-lattice:UntagResource
```

### Delete
```json
vpc-lattice:DeleteServiceNetwork
```

