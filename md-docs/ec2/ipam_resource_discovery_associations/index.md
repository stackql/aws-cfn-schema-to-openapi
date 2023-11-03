---
title: ipam_resource_discovery_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_resource_discovery_associations
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
Retrieves a list of <code>ipam_resource_discovery_associations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ipam_resource_discovery_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.ipam_resource_discovery_associations</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>IpamArn</code></td><td><code>string</code></td><td>Arn of the IPAM.</td></tr><tr><td><code>IpamRegion</code></td><td><code>string</code></td><td>The home region of the IPAM.</td></tr><tr><td><code>IpamResourceDiscoveryAssociationId</code></td><td><code>string</code></td><td>Id of the IPAM Resource Discovery Association.</td></tr><tr><td><code>IpamResourceDiscoveryId</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the IPAM Resource Discovery Association.</td></tr><tr><td><code>IpamId</code></td><td><code>string</code></td><td>The Id of the IPAM this Resource Discovery is associated to.</td></tr><tr><td><code>IpamResourceDiscoveryAssociationArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the resource discovery association is a part of.</td></tr><tr><td><code>IsDefault</code></td><td><code>boolean</code></td><td>If the Resource Discovery Association exists due as part of CreateIpam.</td></tr><tr><td><code>OwnerId</code></td><td><code>string</code></td><td>The AWS Account ID for the account where the shared IPAM exists.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The operational state of the Resource Discovery Association. Related to Create/Delete activities.</td></tr><tr><td><code>ResourceDiscoveryStatus</code></td><td><code>string</code></td><td>The status of the resource discovery.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.ipam_resource_discovery_associations
WHERE region = 'us-east-1'
</pre>
