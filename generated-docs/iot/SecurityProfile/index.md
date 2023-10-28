---
title: SecurityProfile
hide_title: false
hide_table_of_contents: false
keywords:
  - SecurityProfile
  - iot
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The SecurityProfile resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iot.SecurityProfile</b></span><br />
<span>resource id:&nbsp;<b>iot:SecurityProfile</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iot.SecurityProfile</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iot:SecurityProfile</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>SecurityProfileName</code></td><td><code>string</code></td><td>A unique identifier for the security profile.</td></tr><tr><td><code>SecurityProfileDescription</code></td><td><code>string</code></td><td>A description of the security profile.</td></tr><tr><td><code>Behaviors</code></td><td><code>array</code></td><td>Specifies the behaviors that, when violated by a device (thing), cause an alert.</td></tr><tr><td><code>AlertTargets</code></td><td><code>object</code></td><td>Specifies the destinations to which alerts are sent.</td></tr><tr><td><code>AdditionalMetricsToRetainV2</code></td><td><code>array</code></td><td>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>Metadata that can be used to manage the security profile.</td></tr><tr><td><code>TargetArns</code></td><td><code>array</code></td><td>A set of target ARNs that the security profile is attached to.</td></tr><tr><td><code>SecurityProfileArn</code></td><td><code>string</code></td><td>The ARN (Amazon resource name) of the created security profile.</td></tr>
</tbody></table>