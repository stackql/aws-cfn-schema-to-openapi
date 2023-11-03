---
title: ec2fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - ec2fleets
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
Retrieves a list of <code>ec2fleets</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2fleets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.ec2fleets</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>TargetCapacitySpecification</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>OnDemandOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Type</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ExcessCapacityTerminationPolicy</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TagSpecifications</code></td><td><code>array</code></td><td></td></tr><tr><td><code>SpotOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ValidFrom</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ReplaceUnhealthyInstances</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>LaunchTemplateConfigs</code></td><td><code>array</code></td><td></td></tr><tr><td><code>FleetId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>TerminateInstancesWithExpiration</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>ValidUntil</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Context</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.ec2fleets
WHERE region = 'us-east-1'
</pre>