---
title: IPAMResourceDiscovery
hide_title: false
hide_table_of_contents: false
keywords:
  - IPAMResourceDiscovery
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
The IPAMResourceDiscovery resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ec2.IPAMResourceDiscovery</b></span><br />
<span>resource id:&nbsp;<b>ec2:IPAMResourceDiscovery</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2.IPAMResourceDiscovery</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ec2:IPAMResourceDiscovery</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>IpamResourceDiscoveryId</code></td><td><code>string</code></td><td>Id of the IPAM Pool.</td></tr><tr><td><code>OwnerId</code></td><td><code>string</code></td><td>Owner Account ID of the Resource Discovery</td></tr><tr><td><code>OperatingRegions</code></td><td><code>array</code></td><td>The regions Resource Discovery is enabled for. Allows resource discoveries to be created in these regions, as well as enabling monitoring</td></tr><tr><td><code>IpamResourceDiscoveryRegion</code></td><td><code>string</code></td><td>The region the resource discovery is setup in. </td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>IsDefault</code></td><td><code>boolean</code></td><td>Determines whether or not address space from this pool is publicly advertised. Must be set if and only if the pool is IPv6.</td></tr><tr><td><code>IpamResourceDiscoveryArn</code></td><td><code>string</code></td><td>Amazon Resource Name (Arn) for the Resource Discovery.</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of this Resource Discovery.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>