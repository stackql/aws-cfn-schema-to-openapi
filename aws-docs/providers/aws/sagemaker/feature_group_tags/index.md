---
title: feature_group_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_group_tags
  - sagemaker
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

Creates, updates, deletes or gets a <code>feature_group_tag</code> resource or lists <code>feature_group_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>feature_group_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::FeatureGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.feature_group_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="feature_group_name" /></td><td><code>string</code></td><td>The Name of the FeatureGroup.</td></tr>
<tr><td><CopyableCode code="record_identifier_feature_name" /></td><td><code>string</code></td><td>The Record Identifier Feature Name.</td></tr>
<tr><td><CopyableCode code="event_time_feature_name" /></td><td><code>string</code></td><td>The Event Time Feature Name.</td></tr>
<tr><td><CopyableCode code="feature_definitions" /></td><td><code>array</code></td><td>An Array of Feature Definition</td></tr>
<tr><td><CopyableCode code="online_store_config" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="offline_store_config" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="throughput_config" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="role_arn" /></td><td><code>string</code></td><td>Role Arn</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>Description about the FeatureGroup.</td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>A timestamp of FeatureGroup creation time.</td></tr>
<tr><td><CopyableCode code="feature_group_status" /></td><td><code>string</code></td><td>The status of the feature group.</td></tr>
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








