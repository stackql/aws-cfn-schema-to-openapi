---
title: application
hide_title: false
hide_table_of_contents: false
keywords:
  - application
  - systemsmanagersap
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>application</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>application</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>application</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.systemsmanagersap.application</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>application_id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>application_type</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>The ARN of the Helix application</td></tr>
<tr><td><code>credentials</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>instances</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>sap_instance_number</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>sid</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>The tags of a SystemsManagerSAP application.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>application</code> resource, the following permissions are required:

### Read
<pre>
ssm-sap:GetApplication,
ssm-sap:ListTagsForResource</pre>

### Update
<pre>
ssm-sap:TagResource,
ssm-sap:UntagResource,
ssm-sap:ListTagsForResource,
ssm-sap:GetApplication</pre>

### Delete
<pre>
ssm-sap:DeregisterApplication,
ssm-sap:GetApplication</pre>


## Example
```sql
SELECT
region,
application_id,
application_type,
arn,
credentials,
instances,
sap_instance_number,
sid,
tags
FROM awscc.systemsmanagersap.application
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Arn&gt;'
```