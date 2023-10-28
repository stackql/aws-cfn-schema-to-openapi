---
title: ContactChannel
hide_title: false
hide_table_of_contents: false
keywords:
  - ContactChannel
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
The ContactChannel resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ssmcontacts.ContactChannel</b></span><br />
<span>resource id:&nbsp;<b>ssmcontacts:ContactChannel</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ssmcontacts.ContactChannel</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ssmcontacts:ContactChannel</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ContactId</code></td><td><code>string</code></td><td>ARN of the contact resource</td></tr><tr><td><code>ChannelName</code></td><td><code>string</code></td><td>The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.</td></tr><tr><td><code>ChannelType</code></td><td><code>string</code></td><td>Device type, which specify notification channel. Currently supported values: “SMS”, “VOICE”, “EMAIL”, “CHATBOT.</td></tr><tr><td><code>DeferActivation</code></td><td><code>boolean</code></td><td>If you want to activate the channel at a later time, you can choose to defer activation. SSM Incident Manager can't engage your contact channel until it has been activated.</td></tr><tr><td><code>ChannelAddress</code></td><td><code>string</code></td><td>The details that SSM Incident Manager uses when trying to engage the contact channel.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the engagement to a contact channel.</td></tr>
</tbody></table>