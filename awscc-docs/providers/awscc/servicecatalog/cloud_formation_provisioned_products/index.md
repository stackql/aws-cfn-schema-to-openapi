---
title: cloud_formation_provisioned_products
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_formation_provisioned_products
  - servicecatalog
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>cloud_formation_provisioned_products</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cloud_formation_provisioned_products</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>cloud_formation_provisioned_products</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.servicecatalog.cloud_formation_provisioned_products</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>provisioned_product_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>cloud_formation_provisioned_products</code> resource, the following permissions are required:

### Create
<pre>
*</pre>


## Example
```sql
SELECT
region,
provisioned_product_id
FROM awscc.servicecatalog.cloud_formation_provisioned_products
WHERE region = 'us-east-1'
```