---
title: log_anomaly_detection_integration
hide_title: false
hide_table_of_contents: false
keywords:
  - log_anomaly_detection_integration
  - devopsguru
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>log_anomaly_detection_integration</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>log_anomaly_detection_integration</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.devopsguru.log_anomaly_detection_integration</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>AccountId</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.devopsguru.log_anomaly_detection_integration
WHERE region = 'us-east-1' AND data__Identifier = '<AccountId>'
</pre>