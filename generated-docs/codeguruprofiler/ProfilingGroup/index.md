---
title: ProfilingGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - ProfilingGroup
  - codeguruprofiler
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The ProfilingGroup resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>codeguruprofiler.ProfilingGroup</b></span><br />
<span>resource id:&nbsp;<b>codeguruprofiler:ProfilingGroup</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>codeguruprofiler.ProfilingGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>codeguruprofiler:ProfilingGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ProfilingGroupName</code></td><td><code>string</code></td><td>The name of the profiling group.</td></tr><tr><td><code>ComputePlatform</code></td><td><code>string</code></td><td>The compute platform of the profiling group.</td></tr><tr><td><code>AgentPermissions</code></td><td><code>object</code></td><td>The agent permissions attached to this profiling group.</td></tr><tr><td><code>AnomalyDetectionNotificationConfiguration</code></td><td><code>array</code></td><td>Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency</td></tr><tr><td><code>Arn</code></td><td><code>undefined</code></td><td>The Amazon Resource Name (ARN) of the specified profiling group.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags associated with a profiling group.</td></tr>
</tbody></table>