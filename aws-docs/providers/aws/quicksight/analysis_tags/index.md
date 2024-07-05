---
title: analysis_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis_tags
  - quicksight
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

Creates, updates, deletes or gets an <code>analysis_tag</code> resource or lists <code>analysis_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>analysis_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::Analysis Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.analysis_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="created_time" /></td><td><code>string</code></td><td><p>The time that the analysis was created.</p></td></tr>
<tr><td><CopyableCode code="parameters" /></td><td><code>object</code></td><td><p>A list of Amazon QuickSight parameters and the list's override values.</p></td></tr>
<tr><td><CopyableCode code="data_set_arns" /></td><td><code>array</code></td><td><p>The ARNs of the datasets of the analysis.</p></td></tr>
<tr><td><CopyableCode code="source_entity" /></td><td><code>object</code></td><td><p>The source entity of an analysis.</p></td></tr>
<tr><td><CopyableCode code="theme_arn" /></td><td><code>string</code></td><td><p>The ARN of the theme of the analysis.</p></td></tr>
<tr><td><CopyableCode code="definition" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="last_updated_time" /></td><td><code>string</code></td><td><p>The time that the analysis was last updated.</p></td></tr>
<tr><td><CopyableCode code="validation_strategy" /></td><td><code>object</code></td><td><p>The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to <code>LENIENT</code>, validation is skipped for specific errors.</p></td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td><p>The descriptive name of the analysis.</p></td></tr>
<tr><td><CopyableCode code="errors" /></td><td><code>array</code></td><td><p>Errors associated with the analysis.</p></td></tr>
<tr><td><CopyableCode code="analysis_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="aws_account_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="permissions" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td><p>The Amazon Resource Name (ARN) of the analysis.</p></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="sheets" /></td><td><code>array</code></td><td><p>A list of the associated sheets with the unique identifier and name of each sheet.</p></td></tr>
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








