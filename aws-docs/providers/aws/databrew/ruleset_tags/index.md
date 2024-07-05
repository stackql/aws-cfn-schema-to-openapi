---
title: ruleset_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - ruleset_tags
  - databrew
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

Creates, updates, deletes or gets a <code>ruleset_tag</code> resource or lists <code>ruleset_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ruleset_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataBrew::Ruleset.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.ruleset_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Name of the Ruleset</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>Description of the Ruleset</td></tr>
<tr><td><CopyableCode code="target_arn" /></td><td><code>string</code></td><td>Arn of the target resource (dataset) to apply the ruleset to</td></tr>
<tr><td><CopyableCode code="rules" /></td><td><code>array</code></td><td>List of the data quality rules in the ruleset</td></tr>
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







