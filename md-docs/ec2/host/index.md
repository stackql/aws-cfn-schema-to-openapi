---
title: host
hide_title: false
hide_table_of_contents: false
keywords:
  - host
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
Gets an individual <code>host</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>host</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.host</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>HostId</code></td><td><code>string</code></td><td>Id of the host created.</td></tr><tr><td><code>AutoPlacement</code></td><td><code>string</code></td><td>Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID.</td></tr><tr><td><code>AvailabilityZone</code></td><td><code>string</code></td><td>The Availability Zone in which to allocate the Dedicated Host.</td></tr><tr><td><code>HostRecovery</code></td><td><code>string</code></td><td>Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default.</td></tr><tr><td><code>InstanceType</code></td><td><code>string</code></td><td>Specifies the instance type to be supported by the Dedicated Hosts. If you specify an instance type, the Dedicated Hosts support instances of the specified instance type only.</td></tr><tr><td><code>InstanceFamily</code></td><td><code>string</code></td><td>Specifies the instance family to be supported by the Dedicated Hosts. If you specify an instance family, the Dedicated Hosts support multiple instance types within that instance family.</td></tr><tr><td><code>OutpostArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host.</td></tr><tr><td><code>HostMaintenance</code></td><td><code>string</code></td><td>Automatically allocates a new dedicated host and moves your instances on to it if a degradation is detected on your current host.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.host
WHERE region = 'us-east-1' AND data__Identifier = '<HostId>'
</pre>
