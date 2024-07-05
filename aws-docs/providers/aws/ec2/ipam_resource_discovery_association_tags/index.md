---
title: ipam_resource_discovery_association_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_resource_discovery_association_tags
  - ec2
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

Creates, updates, deletes or gets an <code>ipam_resource_discovery_association_tag</code> resource or lists <code>ipam_resource_discovery_association_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ipam_resource_discovery_association_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema of AWS::EC2::IPAMResourceDiscoveryAssociation Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_resource_discovery_association_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="ipam_arn" /></td><td><code>string</code></td><td>Arn of the IPAM.</td></tr>
<tr><td><CopyableCode code="ipam_region" /></td><td><code>string</code></td><td>The home region of the IPAM.</td></tr>
<tr><td><CopyableCode code="ipam_resource_discovery_association_id" /></td><td><code>string</code></td><td>Id of the IPAM Resource Discovery Association.</td></tr>
<tr><td><CopyableCode code="ipam_resource_discovery_id" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the IPAM Resource Discovery Association.</td></tr>
<tr><td><CopyableCode code="ipam_id" /></td><td><code>string</code></td><td>The Id of the IPAM this Resource Discovery is associated to.</td></tr>
<tr><td><CopyableCode code="ipam_resource_discovery_association_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the resource discovery association is a part of.</td></tr>
<tr><td><CopyableCode code="is_default" /></td><td><code>boolean</code></td><td>If the Resource Discovery Association exists due as part of CreateIpam.</td></tr>
<tr><td><CopyableCode code="owner_id" /></td><td><code>string</code></td><td>The AWS Account ID for the account where the shared IPAM exists.</td></tr>
<tr><td><CopyableCode code="state" /></td><td><code>string</code></td><td>The operational state of the Resource Discovery Association. Related to Create/Delete activities.</td></tr>
<tr><td><CopyableCode code="resource_discovery_status" /></td><td><code>string</code></td><td>The status of the resource discovery.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
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
    <td><CopyableCode code="view" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>








