---
title: sampling_rule_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - sampling_rule_tags
  - xray
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

Creates, updates, deletes or gets a <code>sampling_rule_tag</code> resource or lists <code>sampling_rule_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sampling_rule_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This schema provides construct and validation rules for AWS-XRay SamplingRule resource parameters.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.sampling_rule_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="sampling_rule" /></td><td><code>object</code></td><td>This schema provides construct and validation rules for AWS-XRay SamplingRule resource parameters.</td></tr>
<tr><td><CopyableCode code="sampling_rule_record" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="sampling_rule_update" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="rule_arn" /></td><td><code>string</code></td><td>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</td></tr>
<tr><td><CopyableCode code="rule_name" /></td><td><code>string</code></td><td>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</td></tr>
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








