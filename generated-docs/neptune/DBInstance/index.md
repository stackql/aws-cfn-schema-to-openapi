---
title: DBInstance
hide_title: false
hide_table_of_contents: false
keywords:
  - DBInstance
  - neptune
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The DBInstance resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>neptune.DBInstance</b></span><br />
<span>resource id:&nbsp;<b>neptune:DBInstance</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>neptune.DBInstance</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>neptune:DBInstance</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Endpoint</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Port</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DBParameterGroupName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DBInstanceClass</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AllowMajorVersionUpgrade</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>DBClusterIdentifier</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AvailabilityZone</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PreferredMaintenanceWindow</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AutoMinorVersionUpgrade</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>DBSubnetGroupName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DBInstanceIdentifier</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DBSnapshotIdentifier</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>