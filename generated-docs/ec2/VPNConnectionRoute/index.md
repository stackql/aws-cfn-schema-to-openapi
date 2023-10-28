---
title: VPNConnectionRoute
hide_title: false
hide_table_of_contents: false
keywords:
  - VPNConnectionRoute
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
The VPNConnectionRoute resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ec2.VPNConnectionRoute</b></span><br />
<span>resource id:&nbsp;<b>ec2:VPNConnectionRoute</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2.VPNConnectionRoute</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ec2:VPNConnectionRoute</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>DestinationCidrBlock</code></td><td><code>string</code></td><td>The CIDR block associated with the local subnet of the customer network.</td></tr><tr><td><code>VpnConnectionId</code></td><td><code>string</code></td><td>The ID of the VPN connection.</td></tr>
</tbody></table>