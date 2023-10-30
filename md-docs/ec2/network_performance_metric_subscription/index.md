---
title: network_performance_metric_subscription
hide_title: false
hide_table_of_contents: false
keywords:
  - network_performance_metric_subscription
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The network_performance_metric_subscription resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>network_performance_metric_subscription</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.network_performance_metric_subscription</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Source</code></td><td><code>string</code></td><td>The starting Region or Availability Zone for metric to subscribe to.</td></tr><tr><td><code>Destination</code></td><td><code>string</code></td><td>The target Region or Availability Zone for the metric to subscribe to.</td></tr><tr><td><code>Metric</code></td><td><code>string</code></td><td>The metric type to subscribe to.</td></tr><tr><td><code>Statistic</code></td><td><code>string</code></td><td>The statistic to subscribe to.</td></tr>
</tbody></table>