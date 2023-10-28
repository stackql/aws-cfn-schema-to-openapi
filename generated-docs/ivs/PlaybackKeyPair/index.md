---
title: PlaybackKeyPair
hide_title: false
hide_table_of_contents: false
keywords:
  - PlaybackKeyPair
  - ivs
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The PlaybackKeyPair resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>ivs.PlaybackKeyPair</b></span><br />
<span>resource id:&nbsp;<b>ivs:PlaybackKeyPair</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ivs.PlaybackKeyPair</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>ivs:PlaybackKeyPair</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.</td></tr><tr><td><code>PublicKeyMaterial</code></td><td><code>string</code></td><td>The public portion of a customer-generated key pair.</td></tr><tr><td><code>Fingerprint</code></td><td><code>string</code></td><td>Key-pair identifier.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Key-pair identifier.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the asset model.</td></tr>
</tbody></table>