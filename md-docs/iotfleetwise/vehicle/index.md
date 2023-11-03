---
title: vehicle
hide_title: false
hide_table_of_contents: false
keywords:
  - vehicle
  - iotfleetwise
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>vehicle</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vehicle</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iotfleetwise.vehicle</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AssociationBehavior</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Attributes</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>CreationTime</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DecoderManifestArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td></td></tr><tr><td><code>LastModificationTime</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ModelManifestArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.iotfleetwise.vehicle
WHERE region = 'us-east-1' AND data__Identifier = '<Name>'
</pre>