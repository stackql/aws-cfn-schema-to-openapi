---
title: load_balancer_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_tags
  - lightsail
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Expands all tag keys and values for <code>load_balancers</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>load_balancer_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::LoadBalancer</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.load_balancer_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="load_balancer_name" /></td><td><code>string</code></td><td>The name of your load balancer.</td></tr>
<tr><td><CopyableCode code="load_balancer_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="instance_port" /></td><td><code>integer</code></td><td>The instance port where you're creating your load balancer.</td></tr>
<tr><td><CopyableCode code="ip_address_type" /></td><td><code>string</code></td><td>The IP address type for the load balancer. The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.</td></tr>
<tr><td><CopyableCode code="attached_instances" /></td><td><code>array</code></td><td>The names of the instances attached to the load balancer.</td></tr>
<tr><td><CopyableCode code="health_check_path" /></td><td><code>string</code></td><td>The path you provided to perform the load balancer health check. If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., "/").</td></tr>
<tr><td><CopyableCode code="session_stickiness_enabled" /></td><td><code>boolean</code></td><td>Configuration option to enable session stickiness.</td></tr>
<tr><td><CopyableCode code="session_stickiness_lb_cookie_duration_seconds" /></td><td><code>string</code></td><td>Configuration option to adjust session stickiness cookie duration parameter.</td></tr>
<tr><td><CopyableCode code="tls_policy_name" /></td><td><code>string</code></td><td>The name of the TLS policy to apply to the load balancer.</td></tr>
<tr><td><CopyableCode code="tag_key" /></td><td><code>string</code></td><td>Tag key.</td></tr>
<tr><td><CopyableCode code="tag_value" /></td><td><code>string</code></td><td>Tag value.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

## Methods

<table><tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>

## `SELECT` examples
Expands tags for all <code>load_balancers</code> in a region.
```sql
SELECT
region,
load_balancer_name,
load_balancer_arn,
instance_port,
ip_address_type,
attached_instances,
health_check_path,
session_stickiness_enabled,
session_stickiness_lb_cookie_duration_seconds,
tls_policy_name,
tag_key,
tag_value
FROM aws.lightsail.load_balancer_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>load_balancer_tags</code> resource, see <a href="/providers/aws/lightsail/load_balancers/#permissions"><code>load_balancers</code></a>

