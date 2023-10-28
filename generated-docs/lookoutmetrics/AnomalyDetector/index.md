---
title: AnomalyDetector
hide_title: false
hide_table_of_contents: false
keywords:
  - AnomalyDetector
  - lookoutmetrics
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The AnomalyDetector resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>lookoutmetrics.AnomalyDetector</b></span><br />
<span>resource id:&nbsp;<b>lookoutmetrics:AnomalyDetector</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>lookoutmetrics.AnomalyDetector</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>lookoutmetrics:AnomalyDetector</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>AnomalyDetectorName</code></td><td><code>string</code></td><td>Name for the Amazon Lookout for Metrics Anomaly Detector</td></tr><tr><td><code>AnomalyDetectorDescription</code></td><td><code>string</code></td><td>A description for the AnomalyDetector.</td></tr><tr><td><code>AnomalyDetectorConfig</code></td><td><code>undefined</code></td><td>Configuration options for the AnomalyDetector</td></tr><tr><td><code>MetricSetList</code></td><td><code>array</code></td><td>List of metric sets for anomaly detection</td></tr><tr><td><code>KmsKeyArn</code></td><td><code>string</code></td><td>KMS key used to encrypt the AnomalyDetector data</td></tr>
</tbody></table>