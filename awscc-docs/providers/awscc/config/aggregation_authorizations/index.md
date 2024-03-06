---
title: aggregation_authorizations
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregation_authorizations
  - config
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>aggregation_authorizations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>aggregation_authorizations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>aggregation_authorizations</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.config.aggregation_authorizations</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>authorized_account_id</code></td><td><code>string</code></td><td>The 12-digit account ID of the account authorized to aggregate data.</td></tr>
<tr><td><code>authorized_aws_region</code></td><td><code>string</code></td><td>The region authorized to collect aggregated data.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>aggregation_authorizations</code> resource, the following permissions are required:

### Create
<pre>
config:DescribeAggregationAuthorizations,
config:PutAggregationAuthorization,
config:TagResource</pre>

### List
<pre>
config:DescribeAggregationAuthorizations</pre>


## Example
```sql
SELECT
region,
authorized_account_id,
authorized_aws_region
FROM awscc.config.aggregation_authorizations
WHERE region = 'us-east-1'
```