---
title: capacity_reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_reservations
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>capacity_reservations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>capacity_reservations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.capacity_reservations</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Tenancy</code></td><td><code>string</code></td><td></td></tr><tr><td><code>EndDateType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TagSpecifications</code></td><td><code>array</code></td><td></td></tr><tr><td><code>AvailabilityZone</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TotalInstanceCount</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>EndDate</code></td><td><code>string</code></td><td></td></tr><tr><td><code>EbsOptimized</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>OutPostArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>InstanceCount</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>PlacementGroupArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AvailableInstanceCount</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>InstancePlatform</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>InstanceType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>EphemeralStorage</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>InstanceMatchCriteria</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.capacity_reservations
WHERE region = 'us-east-1'
</pre>