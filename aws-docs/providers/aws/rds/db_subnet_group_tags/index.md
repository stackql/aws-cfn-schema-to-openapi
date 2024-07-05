---
title: db_subnet_group_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - db_subnet_group_tags
  - rds
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

Creates, updates, deletes or gets a <code>db_subnet_group_tag</code> resource or lists <code>db_subnet_group_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>db_subnet_group_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::RDS::DBSubnetGroup</code> resource creates a database subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same region. <br />For more information, see &#91;Working with DB subnet groups&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Subnets) in the *Amazon RDS User Guide*.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_subnet_group_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="db_subnet_group_description" /></td><td><code>string</code></td><td>The description for the DB subnet group.</td></tr>
<tr><td><CopyableCode code="db_subnet_group_name" /></td><td><code>string</code></td><td>The name for the DB subnet group. This value is stored as a lowercase string.<br />Constraints: Must contain no more than 255 lowercase alphanumeric characters or hyphens. Must not be "Default".<br />Example: <code>mysubnetgroup</code></td></tr>
<tr><td><CopyableCode code="subnet_ids" /></td><td><code>array</code></td><td>The EC2 Subnet IDs for the DB subnet group.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An optional array of key-value pairs to apply to this DB subnet group.</td></tr>
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








