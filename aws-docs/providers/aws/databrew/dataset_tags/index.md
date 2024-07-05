---
title: dataset_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_tags
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

Creates, updates, deletes or gets a <code>dataset_tag</code> resource or lists <code>dataset_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dataset_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataBrew::Dataset.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.dataset_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Dataset name</td></tr>
<tr><td><CopyableCode code="format" /></td><td><code>string</code></td><td>Dataset format</td></tr>
<tr><td><CopyableCode code="format_options" /></td><td><code>object</code></td><td>Format options for dataset</td></tr>
<tr><td><CopyableCode code="input" /></td><td><code>object</code></td><td>Input</td></tr>
<tr><td><CopyableCode code="path_options" /></td><td><code>object</code></td><td>PathOptions</td></tr>
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








