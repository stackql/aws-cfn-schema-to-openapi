---
title: configuration_set
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_set
  - ses
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>configuration_set</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>configuration_set</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ses.configuration_set</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>The name of the configuration set.</td></tr><tr><td><code>TrackingOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>DeliveryOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ReputationOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>SendingOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>SuppressionOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>VdmOptions</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ses.configuration_set
WHERE region = 'us-east-1' AND data__Identifier = '<Name>'
</pre>