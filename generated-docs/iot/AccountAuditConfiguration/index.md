---
title: AccountAuditConfiguration
hide_title: false
hide_table_of_contents: false
keywords:
  - AccountAuditConfiguration
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
The AccountAuditConfiguration resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iot.AccountAuditConfiguration</b></span><br />
<span>resource id:&nbsp;<b>iot:AccountAuditConfiguration</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iot.AccountAuditConfiguration</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iot:AccountAuditConfiguration</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>AccountId</code></td><td><code>string</code></td><td>Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).</td></tr><tr><td><code>AuditCheckConfigurations</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>AuditNotificationTargetConfigurations</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>RoleArn</code></td><td><code>string</code></td><td>The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.</td></tr>
</tbody></table>