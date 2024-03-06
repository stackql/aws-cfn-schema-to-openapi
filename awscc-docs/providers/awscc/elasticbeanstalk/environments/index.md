---
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
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
Retrieves a list of <code>environments</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>environments</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.elasticbeanstalk.environments</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>environment_name</code></td><td><code>string</code></td><td>A unique name for the environment.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>environments</code> resource, the following permissions are required:

### Create
<pre>
elasticbeanstalk:DescribeEnvironments,
elasticbeanstalk:CreateEnvironment,
iam:PassRole</pre>

### List
<pre>
elasticbeanstalk:DescribeEnvironments</pre>


## Example
```sql
SELECT
region,
environment_name
FROM awscc.elasticbeanstalk.environments
WHERE region = 'us-east-1'
```