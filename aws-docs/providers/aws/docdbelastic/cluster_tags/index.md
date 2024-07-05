---
title: cluster_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_tags
  - docdbelastic
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

Creates, updates, deletes or gets a <code>cluster_tag</code> resource or lists <code>cluster_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cluster_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::DocDBElastic::Cluster Amazon DocumentDB (with MongoDB compatibility) Elastic Scale resource describes a Cluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdbelastic.cluster_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="cluster_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="cluster_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="cluster_endpoint" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="admin_user_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="admin_user_password" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="shard_capacity" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="shard_count" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="vpc_security_group_ids" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="subnet_ids" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="preferred_maintenance_window" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="preferred_backup_window" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="backup_retention_period" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="shard_instance_count" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="kms_key_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="auth_type" /></td><td><code>string</code></td><td></td></tr>
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








