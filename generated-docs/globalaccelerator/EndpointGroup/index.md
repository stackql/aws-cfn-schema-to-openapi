---
title: EndpointGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - EndpointGroup
  - globalaccelerator
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The EndpointGroup resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>globalaccelerator.EndpointGroup</b></span><br />
<span>resource id:&nbsp;<b>globalaccelerator:EndpointGroup</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>globalaccelerator.EndpointGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>globalaccelerator:EndpointGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ListenerArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the listener</td></tr><tr><td><code>EndpointGroupRegion</code></td><td><code>string</code></td><td>The name of the AWS Region where the endpoint group is located</td></tr><tr><td><code>EndpointConfigurations</code></td><td><code>array</code></td><td>The list of endpoint objects.</td></tr><tr><td><code>TrafficDialPercentage</code></td><td><code>number</code></td><td>The percentage of traffic to sent to an AWS Region</td></tr><tr><td><code>HealthCheckPort</code></td><td><code>integer</code></td><td>The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.</td></tr><tr><td><code>HealthCheckProtocol</code></td><td><code>string</code></td><td>The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.</td></tr><tr><td><code>HealthCheckPath</code></td><td><code>string</code></td><td></td></tr><tr><td><code>HealthCheckIntervalSeconds</code></td><td><code>integer</code></td><td>The time in seconds between each health check for an endpoint. Must be a value of 10 or 30</td></tr><tr><td><code>ThresholdCount</code></td><td><code>integer</code></td><td>The number of consecutive health checks required to set the state of the endpoint to unhealthy.</td></tr><tr><td><code>EndpointGroupArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the endpoint group</td></tr><tr><td><code>PortOverrides</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>