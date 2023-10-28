---
title: Portal
hide_title: false
hide_table_of_contents: false
keywords:
  - Portal
  - iot
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The Portal resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>iot.Portal</b></span><br />
<span>resource id:&nbsp;<b>iot:Portal</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iot.Portal</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>iot:Portal</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>PortalAuthMode</code></td><td><code>string</code></td><td>The service to use to authenticate users to the portal. Choose from SSO or IAM. You can't change this value after you create a portal.</td></tr><tr><td><code>PortalArn</code></td><td><code>string</code></td><td>The ARN of the portal, which has the following format.</td></tr><tr><td><code>PortalClientId</code></td><td><code>string</code></td><td>The AWS SSO application generated client ID (used with AWS SSO APIs).</td></tr><tr><td><code>PortalContactEmail</code></td><td><code>string</code></td><td>The AWS administrator's contact email address.</td></tr><tr><td><code>PortalDescription</code></td><td><code>string</code></td><td>A description for the portal.</td></tr><tr><td><code>PortalId</code></td><td><code>string</code></td><td>The ID of the portal.</td></tr><tr><td><code>PortalName</code></td><td><code>string</code></td><td>A friendly name for the portal.</td></tr><tr><td><code>PortalStartUrl</code></td><td><code>string</code></td><td>The public root URL for the AWS IoT AWS IoT SiteWise Monitor application portal.</td></tr><tr><td><code>RoleArn</code></td><td><code>string</code></td><td>The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.</td></tr><tr><td><code>NotificationSenderEmail</code></td><td><code>string</code></td><td>The email address that sends alarm notifications.</td></tr><tr><td><code>Alarms</code></td><td><code>object</code></td><td>Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the portal.</td></tr>
</tbody></table>