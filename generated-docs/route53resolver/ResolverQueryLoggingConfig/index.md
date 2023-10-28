---
title: ResolverQueryLoggingConfig
hide_title: false
hide_table_of_contents: false
keywords:
  - ResolverQueryLoggingConfig
  - route53resolver
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The ResolverQueryLoggingConfig resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>route53resolver.ResolverQueryLoggingConfig</b></span><br />
<span>resource id:&nbsp;<b>route53resolver:ResolverQueryLoggingConfig</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>route53resolver.ResolverQueryLoggingConfig</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>route53resolver:ResolverQueryLoggingConfig</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td>ResourceId</td></tr><tr><td><code>OwnerId</code></td><td><code>string</code></td><td>AccountId</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>ResolverQueryLogConfigStatus, possible values are CREATING, CREATED, DELETED AND FAILED.</td></tr><tr><td><code>ShareStatus</code></td><td><code>string</code></td><td>ShareStatus, possible values are NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME.</td></tr><tr><td><code>AssociationCount</code></td><td><code>integer</code></td><td>Count</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>Arn</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>ResolverQueryLogConfigName</td></tr><tr><td><code>CreatorRequestId</code></td><td><code>string</code></td><td>The id of the creator request.</td></tr><tr><td><code>DestinationArn</code></td><td><code>string</code></td><td>destination arn</td></tr><tr><td><code>CreationTime</code></td><td><code>string</code></td><td>Rfc3339TimeString</td></tr>
</tbody></table>