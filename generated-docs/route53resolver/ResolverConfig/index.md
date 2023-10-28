---
title: ResolverConfig
hide_title: false
hide_table_of_contents: false
keywords:
  - ResolverConfig
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
The ResolverConfig resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ResolverConfig</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.route53resolver.ResolverConfig</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td>Id</td></tr><tr><td><code>OwnerId</code></td><td><code>string</code></td><td>AccountId</td></tr><tr><td><code>ResourceId</code></td><td><code>string</code></td><td>ResourceId</td></tr><tr><td><code>AutodefinedReverse</code></td><td><code>string</code></td><td>ResolverAutodefinedReverseStatus, possible values are ENABLING, ENABLED, DISABLING AND DISABLED.</td></tr><tr><td><code>AutodefinedReverseFlag</code></td><td><code>string</code></td><td>Represents the desired status of AutodefinedReverse. The only supported value on creation is DISABLE. Deletion of this resource will return AutodefinedReverse to its default value (ENABLED).</td></tr>
</tbody></table>