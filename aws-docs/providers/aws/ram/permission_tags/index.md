---
title: permission_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - permission_tags
  - ram
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

Creates, updates, deletes or gets a <code>permission_tag</code> resource or lists <code>permission_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>permission_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::RAM::Permission</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ram.permission_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the permission.</td></tr>
<tr><td><CopyableCode code="version" /></td><td><code>string</code></td><td>Version of the permission.</td></tr>
<tr><td><CopyableCode code="is_resource_type_default" /></td><td><code>boolean</code></td><td>Set to true to use this as the default permission.</td></tr>
<tr><td><CopyableCode code="permission_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="resource_type" /></td><td><code>string</code></td><td>The resource type this permission can be used with.</td></tr>
<tr><td><CopyableCode code="policy_template" /></td><td><code>object</code></td><td>Policy template for the permission.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
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








