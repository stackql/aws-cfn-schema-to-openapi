---
title: UsagePlan
hide_title: false
hide_table_of_contents: false
keywords:
  - UsagePlan
  - apigateway
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The UsagePlan resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>apigateway.UsagePlan</b></span><br />
<span>resource id:&nbsp;<b>apigateway:UsagePlan</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apigateway.UsagePlan</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>apigateway:UsagePlan</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td>The provider-assigned unique ID for this managed resource.</td></tr><tr><td><code>ApiStages</code></td><td><code>array</code></td><td>The API stages to associate with this usage plan.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>A description of the usage plan.</td></tr><tr><td><code>Quota</code></td><td><code>undefined</code></td><td>Configures the number of requests that users can make within a given interval.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of arbitrary tags (key-value pairs) to associate with the usage plan.</td></tr><tr><td><code>Throttle</code></td><td><code>undefined</code></td><td>Configures the overall request rate (average requests per second) and burst capacity.</td></tr><tr><td><code>UsagePlanName</code></td><td><code>string</code></td><td>A name for the usage plan.</td></tr>
</tbody></table>