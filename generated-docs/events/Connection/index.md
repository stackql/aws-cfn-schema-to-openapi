---
title: Connection
hide_title: false
hide_table_of_contents: false
keywords:
  - Connection
  - events
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The Connection resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>events.Connection</b></span><br />
<span>resource id:&nbsp;<b>events:Connection</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>events.Connection</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>events:Connection</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>Name of the connection.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The arn of the connection resource.</td></tr><tr><td><code>SecretArn</code></td><td><code>string</code></td><td>The arn of the secrets manager secret created in the customer account.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>Description of the connection.</td></tr><tr><td><code>AuthorizationType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AuthParameters</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>