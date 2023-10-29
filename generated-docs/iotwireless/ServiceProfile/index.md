---
title: ServiceProfile
hide_title: false
hide_table_of_contents: false
keywords:
  - ServiceProfile
  - iotwireless
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The ServiceProfile resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ServiceProfile</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iotwireless.ServiceProfile</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>Name of service profile</td></tr><tr><td><code>LoRaWAN</code></td><td><code>undefined</code></td><td>LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the service profile.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Service profile Arn. Returned after successful create.</td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td>Service profile Id. Returned after successful create.</td></tr>
</tbody></table>