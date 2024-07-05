---
title: guardrail_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - guardrail_tags
  - bedrock
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

Creates, updates, deletes or gets a <code>guardrail_tag</code> resource or lists <code>guardrail_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>guardrail_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::Guardrail Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.guardrail_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="blocked_input_messaging" /></td><td><code>string</code></td><td>Messaging for when violations are detected in text</td></tr>
<tr><td><CopyableCode code="blocked_outputs_messaging" /></td><td><code>string</code></td><td>Messaging for when violations are detected in text</td></tr>
<tr><td><CopyableCode code="content_policy_config" /></td><td><code>object</code></td><td>Content policy config for a guardrail.</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>Time Stamp</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>Description of the guardrail or its version</td></tr>
<tr><td><CopyableCode code="failure_recommendations" /></td><td><code>array</code></td><td>List of failure recommendations</td></tr>
<tr><td><CopyableCode code="guardrail_arn" /></td><td><code>string</code></td><td>Arn representation for the guardrail</td></tr>
<tr><td><CopyableCode code="guardrail_id" /></td><td><code>string</code></td><td>Unique id for the guardrail</td></tr>
<tr><td><CopyableCode code="kms_key_arn" /></td><td><code>string</code></td><td>The KMS key with which the guardrail was encrypted at rest</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Name of the guardrail</td></tr>
<tr><td><CopyableCode code="sensitive_information_policy_config" /></td><td><code>object</code></td><td>Sensitive information policy config for a guardrail.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>Status of the guardrail</td></tr>
<tr><td><CopyableCode code="status_reasons" /></td><td><code>array</code></td><td>List of status reasons</td></tr>
<tr><td><CopyableCode code="topic_policy_config" /></td><td><code>object</code></td><td>Topic policy config for a guardrail.</td></tr>
<tr><td><CopyableCode code="updated_at" /></td><td><code>string</code></td><td>Time Stamp</td></tr>
<tr><td><CopyableCode code="version" /></td><td><code>string</code></td><td>Guardrail version</td></tr>
<tr><td><CopyableCode code="word_policy_config" /></td><td><code>object</code></td><td>Word policy config for a guardrail.</td></tr>
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








