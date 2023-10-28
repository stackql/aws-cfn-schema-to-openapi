---
title: AggregationAuthorization
hide_title: false
hide_table_of_contents: false
keywords:
  - AggregationAuthorization
  - config
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The AggregationAuthorization resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>config.AggregationAuthorization</b></span><br />
<span>resource id:&nbsp;<b>config:AggregationAuthorization</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>config.AggregationAuthorization</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>config:AggregationAuthorization</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>AuthorizedAccountId</code></td><td><code>string</code></td><td>The 12-digit account ID of the account authorized to aggregate data.</td></tr><tr><td><code>AuthorizedAwsRegion</code></td><td><code>string</code></td><td>The region authorized to collect aggregated data.</td></tr><tr><td><code>AggregationAuthorizationArn</code></td><td><code>string</code></td><td>The ARN of the AggregationAuthorization.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags for the AggregationAuthorization.</td></tr>
</tbody></table>