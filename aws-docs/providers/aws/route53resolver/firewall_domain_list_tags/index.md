---
title: firewall_domain_list_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_domain_list_tags
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Expands all tag keys and values for <code>firewall_domain_lists</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>firewall_domain_list_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Route53Resolver::FirewallDomainList.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.firewall_domain_list_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td>ResourceId</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>Arn</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>FirewallDomainListName</td></tr>
<tr><td><CopyableCode code="domain_count" /></td><td><code>integer</code></td><td>Count</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>ResolverFirewallDomainList, possible values are COMPLETE, DELETING, UPDATING, COMPLETE_IMPORT_FAILED, IMPORTING, and INACTIVE_OWNER_ACCOUNT_CLOSED.</td></tr>
<tr><td><CopyableCode code="status_message" /></td><td><code>string</code></td><td>FirewallDomainListAssociationStatus</td></tr>
<tr><td><CopyableCode code="managed_owner_name" /></td><td><code>string</code></td><td>ServicePrincipal</td></tr>
<tr><td><CopyableCode code="creator_request_id" /></td><td><code>string</code></td><td>The id of the creator request.</td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>Rfc3339TimeString</td></tr>
<tr><td><CopyableCode code="modification_time" /></td><td><code>string</code></td><td>Rfc3339TimeString</td></tr>
<tr><td><CopyableCode code="domains" /></td><td><code>array</code></td><td>An inline list of domains to use for this domain list.</td></tr>
<tr><td><CopyableCode code="domain_file_url" /></td><td><code>string</code></td><td>S3 URL to import domains from.</td></tr>
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
Expands tags for all <code>firewall_domain_lists</code> in a region.
```sql
SELECT
region,
id,
arn,
name,
domain_count,
status,
status_message,
managed_owner_name,
creator_request_id,
creation_time,
modification_time,
domains,
domain_file_url,
tag_key,
tag_value
FROM aws.route53resolver.firewall_domain_list_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>firewall_domain_list_tags</code> resource, see <a href="/providers/aws/route53resolver/firewall_domain_lists/#permissions"><code>firewall_domain_lists</code></a>

