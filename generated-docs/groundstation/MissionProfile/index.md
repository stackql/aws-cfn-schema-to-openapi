---
title: MissionProfile
hide_title: false
hide_table_of_contents: false
keywords:
  - MissionProfile
  - groundstation
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The MissionProfile resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>groundstation.MissionProfile</b></span><br />
<span>resource id:&nbsp;<b>groundstation:MissionProfile</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>groundstation.MissionProfile</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>groundstation:MissionProfile</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>A name used to identify a mission profile.</td></tr><tr><td><code>ContactPrePassDurationSeconds</code></td><td><code>integer</code></td><td>Pre-pass time needed before the contact.</td></tr><tr><td><code>ContactPostPassDurationSeconds</code></td><td><code>integer</code></td><td>Post-pass time needed after the contact.</td></tr><tr><td><code>MinimumViableContactDurationSeconds</code></td><td><code>integer</code></td><td>Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.</td></tr><tr><td><code>StreamsKmsKey</code></td><td><code>undefined</code></td><td>The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.</td></tr><tr><td><code>StreamsKmsRole</code></td><td><code>string</code></td><td>The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.</td></tr><tr><td><code>DataflowEdges</code></td><td><code>array</code></td><td></td></tr><tr><td><code>TrackingConfigArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Region</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>