---
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
  - rds
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>integrations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>integrations</td></tr>
<tr><td><b>Id</b></td><td><code>aws.rds.integrations</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>integration_arn</code></td><td><code>string</code></td><td>The ARN of the integration.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>integrations</code> resource, the following permissions are required:

### Create
<pre>
rds:CreateIntegration,
rds:DescribeIntegrations,
rds:AddTagsToResource,
kms:CreateGrant,
kms:DescribeKey,
redshift:CreateInboundIntegration</pre>

### List
<pre>
rds:DescribeIntegrations</pre>


## Example
```sql
SELECT
region,
integration_arn
FROM aws.rds.integrations
WHERE region = 'us-east-1'
```