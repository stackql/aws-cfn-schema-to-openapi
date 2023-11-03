---
title: connector
hide_title: false
hide_table_of_contents: false
keywords:
  - connector
  - appflow
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>connector</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connector</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.appflow.connector</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ConnectorLabel</code></td><td><code>string</code></td><td> The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.</td></tr><tr><td><code>ConnectorArn</code></td><td><code>string</code></td><td> The arn of the connector. The arn is unique for each ConnectorRegistration in your AWS account.</td></tr><tr><td><code>ConnectorProvisioningType</code></td><td><code>string</code></td><td>The provisioning type of the connector. Currently the only supported value is LAMBDA. </td></tr><tr><td><code>ConnectorProvisioningConfig</code></td><td><code>undefined</code></td><td>Contains information about the configuration of the connector being registered.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>A description about the connector that's being registered.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.appflow.connector
WHERE region = 'us-east-1' AND data__Identifier = '<ConnectorLabel>'
</pre>