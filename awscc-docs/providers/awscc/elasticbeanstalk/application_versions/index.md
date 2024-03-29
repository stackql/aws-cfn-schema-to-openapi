---
title: application_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - application_versions
  - elasticbeanstalk
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>application_versions</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>application_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>application_versions</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.elasticbeanstalk.application_versions</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>application_name</code></td><td><code>string</code></td><td>The name of the Elastic Beanstalk application that is associated with this application version. </td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
application_name,
id
FROM awscc.elasticbeanstalk.application_versions
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>application_versions</code> resource, the following permissions are required:

### Create
```json
elasticbeanstalk:CreateApplicationVersion,
elasticbeanstalk:DescribeApplicationVersions,
s3:GetObject,
s3:PutObject
```

### List
```json
elasticbeanstalk:DescribeApplicationVersions
```

