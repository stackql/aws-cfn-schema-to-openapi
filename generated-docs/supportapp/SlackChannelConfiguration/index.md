---
title: SlackChannelConfiguration
hide_title: false
hide_table_of_contents: false
keywords:
  - SlackChannelConfiguration
  - supportapp
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The SlackChannelConfiguration resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>supportapp.SlackChannelConfiguration</b></span><br />
<span>resource id:&nbsp;<b>supportapp:SlackChannelConfiguration</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>supportapp.SlackChannelConfiguration</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>supportapp:SlackChannelConfiguration</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>TeamId</code></td><td><code>string</code></td><td>The team ID in Slack, which uniquely identifies a workspace.</td></tr><tr><td><code>ChannelId</code></td><td><code>string</code></td><td>The channel ID in Slack, which identifies a channel within a workspace.</td></tr><tr><td><code>ChannelName</code></td><td><code>string</code></td><td>The channel name in Slack.</td></tr><tr><td><code>NotifyOnCreateOrReopenCase</code></td><td><code>boolean</code></td><td>Whether to notify when a case is created or reopened.</td></tr><tr><td><code>NotifyOnAddCorrespondenceToCase</code></td><td><code>boolean</code></td><td>Whether to notify when a correspondence is added to a case.</td></tr><tr><td><code>NotifyOnResolveCase</code></td><td><code>boolean</code></td><td>Whether to notify when a case is resolved.</td></tr><tr><td><code>NotifyOnCaseSeverity</code></td><td><code>string</code></td><td>The severity level of a support case that a customer wants to get notified for.</td></tr><tr><td><code>ChannelRoleArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services.</td></tr>
</tbody></table>