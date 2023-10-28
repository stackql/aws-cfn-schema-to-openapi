---
title: Connector
hide_title: false
hide_table_of_contents: false
keywords:
  - Connector
  - kafkaconnect
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Connector resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>kafkaconnect.Connector</b></span><br />
<span>resource id:&nbsp;<b>kafkaconnect:Connector</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>kafkaconnect.Connector</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>kafkaconnect:Connector</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Capacity</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ConnectorArn</code></td><td><code>string</code></td><td>Amazon Resource Name for the created Connector.</td></tr><tr><td><code>ConnectorConfiguration</code></td><td><code>object</code></td><td>The configuration for the connector.</td></tr><tr><td><code>ConnectorDescription</code></td><td><code>string</code></td><td>A summary description of the connector.</td></tr><tr><td><code>ConnectorName</code></td><td><code>string</code></td><td>The name of the connector.</td></tr><tr><td><code>KafkaCluster</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>KafkaClusterClientAuthentication</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>KafkaClusterEncryptionInTransit</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>KafkaConnectVersion</code></td><td><code>string</code></td><td>The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.</td></tr><tr><td><code>LogDelivery</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Plugins</code></td><td><code>array</code></td><td>List of plugins to use with the connector.</td></tr><tr><td><code>ServiceExecutionRoleArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.</td></tr><tr><td><code>WorkerConfiguration</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>