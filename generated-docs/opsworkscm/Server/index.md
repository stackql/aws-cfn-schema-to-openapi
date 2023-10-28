---
title: Server
hide_title: false
hide_table_of_contents: false
keywords:
  - Server
  - opsworkscm
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The Server resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>opsworkscm.Server</b></span><br />
<span>resource id:&nbsp;<b>opsworkscm:Server</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>opsworkscm.Server</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>opsworkscm:Server</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>KeyPair</code></td><td><code>string</code></td><td></td></tr><tr><td><code>EngineVersion</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ServiceRoleArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>DisableAutomatedBackup</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>BackupId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>EngineModel</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PreferredMaintenanceWindow</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AssociatePublicIpAddress</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>InstanceProfileArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>CustomCertificate</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PreferredBackupWindow</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SecurityGroupIds</code></td><td><code>array</code></td><td></td></tr><tr><td><code>SubnetIds</code></td><td><code>array</code></td><td></td></tr><tr><td><code>CustomDomain</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Endpoint</code></td><td><code>string</code></td><td></td></tr><tr><td><code>CustomPrivateKey</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ServerName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>EngineAttributes</code></td><td><code>array</code></td><td></td></tr><tr><td><code>BackupRetentionCount</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>InstanceType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Engine</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>