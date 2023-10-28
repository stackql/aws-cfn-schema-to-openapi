---
title: Session
hide_title: false
hide_table_of_contents: false
keywords:
  - Session
  - macie
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The Session resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>macie.Session</b></span><br />
<span>resource id:&nbsp;<b>macie:Session</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>macie.Session</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>macie:Session</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>AwsAccountId</code></td><td><code>string</code></td><td>AWS account ID of customer</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>A enumeration value that specifies the status of the Macie Session.</td></tr><tr><td><code>FindingPublishingFrequency</code></td><td><code>string</code></td><td>A enumeration value that specifies how frequently finding updates are published.</td></tr><tr><td><code>ServiceRole</code></td><td><code>string</code></td><td>Service role used by Macie</td></tr>
</tbody></table>