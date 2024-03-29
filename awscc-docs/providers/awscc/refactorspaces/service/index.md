---
title: service
hide_title: false
hide_table_of_contents: false
keywords:
  - service
  - refactorspaces
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>service</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>service</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.refactorspaces.service</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>application_identifier</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>endpoint_type</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>environment_identifier</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>lambda_endpoint</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>service_identifier</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>url_endpoint</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>vpc_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn,
application_identifier,
description,
endpoint_type,
environment_identifier,
lambda_endpoint,
name,
service_identifier,
url_endpoint,
vpc_id,
tags
FROM awscc.refactorspaces.service
WHERE data__Identifier = '<EnvironmentIdentifier>|<ApplicationIdentifier>|<ServiceIdentifier>';
```

## Permissions

To operate on the <code>service</code> resource, the following permissions are required:

### Read
```json
refactor-spacess:GetService,
refactor-spaces:ListTagsForResource
```

### Delete
```json
refactor-spaces:DeleteService,
refactor-spaces:GetService,
refactor-spaces:UntagResource,
ram:DisassociateResourceShare,
ec2:DescribeNetworkInterfaces,
ec2:DescribeRouteTables,
ec2:DescribeTransitGatewayVpcAttachments,
ec2:DescribeSecurityGroups,
ec2:DeleteSecurityGroup,
ec2:DeleteRoute,
ec2:RevokeSecurityGroupIngress,
ec2:DeleteTransitGatewayVpcAttachment,
ec2:DeleteTags
```

