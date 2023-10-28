---
title: MemberInvitation
hide_title: false
hide_table_of_contents: false
keywords:
  - MemberInvitation
  - detective
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The MemberInvitation resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>detective.MemberInvitation</b></span><br />
<span>resource id:&nbsp;<b>detective:MemberInvitation</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>detective.MemberInvitation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>detective:MemberInvitation</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>GraphArn</code></td><td><code>string</code></td><td>The ARN of the graph to which the member account will be invited</td></tr><tr><td><code>MemberId</code></td><td><code>string</code></td><td>The AWS account ID to be invited to join the graph as a member</td></tr><tr><td><code>MemberEmailAddress</code></td><td><code>string</code></td><td>The root email address for the account to be invited, for validation. Updating this field has no effect.</td></tr><tr><td><code>DisableEmailNotification</code></td><td><code>boolean</code></td><td>When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.</td></tr><tr><td><code>Message</code></td><td><code>string</code></td><td>A message to be included in the email invitation sent to the invited account. Updating this field has no effect.</td></tr>
</tbody></table>