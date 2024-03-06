---
title: bridge_output
hide_title: false
hide_table_of_contents: false
keywords:
  - bridge_output
  - mediaconnect
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>bridge_output</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>bridge_output</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>bridge_output</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.mediaconnect.bridge_output</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>bridge_arn</code></td><td><code>string</code></td><td>The Amazon Resource Number (ARN) of the bridge.</td></tr>
<tr><td><code>network_output</code></td><td><code>object</code></td><td>The output of the bridge.</td></tr>
<tr><td><code>name</code></td><td><code>string</code></td><td>The network output name.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>bridge_output</code> resource, the following permissions are required:

### Read
<pre>
mediaconnect:DescribeBridge</pre>

### Update
<pre>
mediaconnect:DescribeBridge,
mediaconnect:UpdateBridgeOutput</pre>

### Delete
<pre>
mediaconnect:RemoveBridgeOutput</pre>


## Example
```sql
SELECT
region,
bridge_arn,
network_output,
name
FROM awscc.mediaconnect.bridge_output
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;BridgeArn&gt;'
AND data__Identifier = '&lt;Name&gt;'
```