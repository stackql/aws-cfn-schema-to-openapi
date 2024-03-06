---
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
  - sagemaker
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>apps</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>apps</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.sagemaker.apps</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>app_name</code></td><td><code>string</code></td><td>The name of the app.</td></tr>
<tr><td><code>app_type</code></td><td><code>string</code></td><td>The type of app.</td></tr>
<tr><td><code>domain_id</code></td><td><code>string</code></td><td>The domain ID.</td></tr>
<tr><td><code>user_profile_name</code></td><td><code>string</code></td><td>The user profile name.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>apps</code> resource, the following permissions are required:

### Create
<pre>
sagemaker:CreateApp,
sagemaker:DescribeApp</pre>

### List
<pre>
sagemaker:ListApps</pre>


## Example
```sql
SELECT
region,
app_name,
app_type,
domain_id,
user_profile_name
FROM awscc.sagemaker.apps
WHERE region = 'us-east-1'
```