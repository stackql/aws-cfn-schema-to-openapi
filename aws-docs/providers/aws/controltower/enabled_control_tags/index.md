---
title: enabled_control_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - enabled_control_tags
  - controltower
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

Creates, updates, deletes or gets an <code>enabled_control_tag</code> resource or lists <code>enabled_control_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>enabled_control_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Enables a control on a specified target.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controltower.enabled_control_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="control_identifier" /></td><td><code>string</code></td><td>Arn of the control.</td></tr>
<tr><td><CopyableCode code="target_identifier" /></td><td><code>string</code></td><td>Arn for Organizational unit to which the control needs to be applied</td></tr>
<tr><td><CopyableCode code="parameters" /></td><td><code>array</code></td><td>Parameters to configure the enabled control behavior.</td></tr>
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
    <td><CopyableCode code="view" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>








