---
title: MetricFilter
hide_title: false
hide_table_of_contents: false
keywords:
  - MetricFilter
  - logs
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The MetricFilter resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>logs.MetricFilter</b></span><br />
<span>resource id:&nbsp;<b>logs:MetricFilter</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>logs.MetricFilter</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>logs:MetricFilter</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>FilterName</code></td><td><code>string</code></td><td>A name for the metric filter.</td></tr><tr><td><code>FilterPattern</code></td><td><code>string</code></td><td>Pattern that Logs follows to interpret each entry in a log.</td></tr><tr><td><code>LogGroupName</code></td><td><code>string</code></td><td>Existing log group that you want to associate with this filter.</td></tr><tr><td><code>MetricTransformations</code></td><td><code>array</code></td><td>A collection of information that defines how metric data gets emitted.</td></tr>
</tbody></table>