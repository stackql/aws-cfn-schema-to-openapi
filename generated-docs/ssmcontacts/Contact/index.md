---
title: Contact
hide_title: false
hide_table_of_contents: false
keywords:
  - Contact
  - ssmcontacts
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Contact resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ssmcontacts.Contact</b></span><br />
<span>resource id:&nbsp;<b>ssmcontacts:Contact</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ssmcontacts.Contact</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ssmcontacts:Contact</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Alias</code></td><td><code>string</code></td><td>Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.</td></tr><tr><td><code>DisplayName</code></td><td><code>string</code></td><td>Name of the contact. String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.</td></tr><tr><td><code>Type</code></td><td><code>string</code></td><td>Contact type, which specify type of contact. Currently supported values: “PERSONAL”, “SHARED”, “OTHER“.</td></tr><tr><td><code>Plan</code></td><td><code>array</code></td><td>The stages that an escalation plan or engagement plan engages contacts and contact methods in.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the contact.</td></tr>
</tbody></table>