---
title: vpc_attachments_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_attachments_list_only
  - networkmanager
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

Lists <code>vpc_attachments</code> in a region or regions, for all properties use <a href="/providers/aws/serviceName/vpc_attachments/"><code>vpc_attachments</code></a>

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpc_attachments_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::NetworkManager::VpcAttachment Resoruce Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.vpc_attachments_list_only" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="core_network_id" /></td><td><code>string</code></td><td>The ID of a core network for the VPC attachment.</td></tr>
<tr><td><CopyableCode code="core_network_arn" /></td><td><code>string</code></td><td>The ARN of a core network for the VPC attachment.</td></tr>
<tr><td><CopyableCode code="attachment_id" /></td><td><code>string</code></td><td>Id of the attachment.</td></tr>
<tr><td><CopyableCode code="owner_account_id" /></td><td><code>string</code></td><td>Owner account of the attachment.</td></tr>
<tr><td><CopyableCode code="attachment_type" /></td><td><code>string</code></td><td>Attachment type.</td></tr>
<tr><td><CopyableCode code="state" /></td><td><code>string</code></td><td>State of the attachment.</td></tr>
<tr><td><CopyableCode code="edge_location" /></td><td><code>string</code></td><td>The Region where the edge is located.</td></tr>
<tr><td><CopyableCode code="vpc_arn" /></td><td><code>string</code></td><td>The ARN of the VPC.</td></tr>
<tr><td><CopyableCode code="resource_arn" /></td><td><code>string</code></td><td>The ARN of the Resource.</td></tr>
<tr><td><CopyableCode code="attachment_policy_rule_number" /></td><td><code>integer</code></td><td>The policy rule number associated with the attachment.</td></tr>
<tr><td><CopyableCode code="segment_name" /></td><td><code>string</code></td><td>The name of the segment attachment..</td></tr>
<tr><td><CopyableCode code="proposed_segment_change" /></td><td><code>object</code></td><td>The attachment to move from one segment to another.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>Tags for the attachment.</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>Creation time of the attachment.</td></tr>
<tr><td><CopyableCode code="updated_at" /></td><td><code>string</code></td><td>Last update time of the attachment.</td></tr>
<tr><td><CopyableCode code="subnet_arns" /></td><td><code>array</code></td><td>Subnet Arn list</td></tr>
<tr><td><CopyableCode code="options" /></td><td><code>object</code></td><td>Vpc options of the attachment.</td></tr>
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
Lists all <code>vpc_attachments</code> in a region.
```sql
SELECT
region,
attachment_id
FROM aws.networkmanager.vpc_attachments_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>vpc_attachments_list_only</code> resource, see <a href="/providers/aws/networkmanager/vpc_attachments/#permissions"><code>vpc_attachments</code></a>

