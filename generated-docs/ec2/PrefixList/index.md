---
title: PrefixList
hide_title: false
hide_table_of_contents: false
keywords:
  - PrefixList
  - ec2
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The PrefixList resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ec2.PrefixList</b></span><br />
<span>resource id:&nbsp;<b>ec2:PrefixList</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ec2.PrefixList</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ec2:PrefixList</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>PrefixListName</code></td><td><code>string</code></td><td>Name of Prefix List.</td></tr><tr><td><code>PrefixListId</code></td><td><code>string</code></td><td>Id of Prefix List.</td></tr><tr><td><code>OwnerId</code></td><td><code>string</code></td><td>Owner Id of Prefix List.</td></tr><tr><td><code>AddressFamily</code></td><td><code>string</code></td><td>Ip Version of Prefix List.</td></tr><tr><td><code>MaxEntries</code></td><td><code>integer</code></td><td>Max Entries of Prefix List.</td></tr><tr><td><code>Version</code></td><td><code>integer</code></td><td>Version of Prefix List.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>Tags for Prefix List</td></tr><tr><td><code>Entries</code></td><td><code>array</code></td><td>Entries of Prefix List.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Prefix List.</td></tr>
</tbody></table>