---
title: Accelerator
hide_title: false
hide_table_of_contents: false
keywords:
  - Accelerator
  - globalaccelerator
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Accelerator resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>globalaccelerator.Accelerator</b></span><br />
<span>resource id:&nbsp;<b>globalaccelerator:Accelerator</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>globalaccelerator.Accelerator</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>globalaccelerator:Accelerator</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>Name of accelerator.</td></tr><tr><td><code>IpAddressType</code></td><td><code>string</code></td><td>IP Address type.</td></tr><tr><td><code>IpAddresses</code></td><td><code>array</code></td><td>The IP addresses from BYOIP Prefix pool.</td></tr><tr><td><code>Enabled</code></td><td><code>boolean</code></td><td>Indicates whether an accelerator is enabled. The value is true or false.</td></tr><tr><td><code>DnsName</code></td><td><code>string</code></td><td>The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 addresses.</td></tr><tr><td><code>Ipv4Addresses</code></td><td><code>array</code></td><td>The IPv4 addresses assigned to the accelerator.</td></tr><tr><td><code>Ipv6Addresses</code></td><td><code>array</code></td><td>The IPv6 addresses assigned if the accelerator is dualstack</td></tr><tr><td><code>DualStackDnsName</code></td><td><code>string</code></td><td>The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 and IPv6 addresses.</td></tr><tr><td><code>AcceleratorArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the accelerator.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>