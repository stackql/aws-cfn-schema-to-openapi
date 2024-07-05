---
title: stack_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_tags
  - cloudformation
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

Creates, updates, deletes or gets a <code>stack_tag</code> resource or lists <code>stack_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>stack_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::CloudFormation::Stack resource nests a stack as a resource in a top-level template.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="capabilities" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="role_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="outputs" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="disable_rollback" /></td><td><code>boolean</code></td><td></td></tr>
<tr><td><CopyableCode code="enable_termination_protection" /></td><td><code>boolean</code></td><td></td></tr>
<tr><td><CopyableCode code="notification_arns" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="parameters" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="parent_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="root_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="change_set_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="stack_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="stack_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="stack_policy_body" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="stack_policy_url" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="stack_status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="stack_status_reason" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="template_body" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="template_url" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="timeout_in_minutes" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="last_update_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td></td></tr>
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








