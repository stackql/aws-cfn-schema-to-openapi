---
title: model
hide_title: false
hide_table_of_contents: false
keywords:
  - model
  - apigateway
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>model</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>model</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>model</td></tr>
<tr><td><b>Id</b></td><td><code>aws.apigateway.model</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>content_type</code></td><td><code>string</code></td><td>The content-type for the model.</td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td>The description of the model.</td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>A name for the model. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the model name. For more information, see &#91;Name Type&#93;(https:&#x2F;&#x2F;docs.aws.amazon.com&#x2F;AWSCloudFormation&#x2F;latest&#x2F;UserGuide&#x2F;aws-properties-name.html).&lt;br&#x2F;&gt;  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.</td></tr>
<tr><td><code>rest_api_id</code></td><td><code>string</code></td><td>The string identifier of the associated RestApi.</td></tr>
<tr><td><code>schema</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>model</code> resource, the following permissions are required:

### Read
<pre>
apigateway:GET</pre>

### Update
<pre>
apigateway:PATCH,
apigateway:GET</pre>

### Delete
<pre>
apigateway:GET,
apigateway:DELETE</pre>


## Example
```sql
SELECT
region,
content_type,
description,
name,
rest_api_id,
schema
FROM aws.apigateway.model
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;RestApiId&gt;'
AND data__Identifier = '&lt;Name&gt;'
```
