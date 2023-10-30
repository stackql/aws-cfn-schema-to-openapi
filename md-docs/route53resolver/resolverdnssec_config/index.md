---
title: resolverdnssec_config
hide_title: false
hide_table_of_contents: false
keywords:
  - resolverdnssec_config
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
The resolverdnssec_config resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resolverdnssec_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.route53resolver.resolverdnssec_config</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td>Id</td></tr><tr><td><code>OwnerId</code></td><td><code>string</code></td><td>AccountId</td></tr><tr><td><code>ResourceId</code></td><td><code>string</code></td><td>ResourceId</td></tr><tr><td><code>ValidationStatus</code></td><td><code>string</code></td><td>ResolverDNSSECValidationStatus, possible values are ENABLING, ENABLED, DISABLING AND DISABLED.</td></tr>
</tbody></table>