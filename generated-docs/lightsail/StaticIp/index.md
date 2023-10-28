---
title: StaticIp
hide_title: false
hide_table_of_contents: false
keywords:
  - StaticIp
  - lightsail
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The StaticIp resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>lightsail.StaticIp</b></span><br />
<span>resource id:&nbsp;<b>lightsail:StaticIp</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>lightsail.StaticIp</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>lightsail:StaticIp</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>StaticIpName</code></td><td><code>string</code></td><td>The name of the static IP address.</td></tr><tr><td><code>AttachedTo</code></td><td><code>string</code></td><td>The instance where the static IP is attached.</td></tr><tr><td><code>IsAttached</code></td><td><code>boolean</code></td><td>A Boolean value indicating whether the static IP is attached.</td></tr><tr><td><code>IpAddress</code></td><td><code>string</code></td><td>The static IP address.</td></tr><tr><td><code>StaticIpArn</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>