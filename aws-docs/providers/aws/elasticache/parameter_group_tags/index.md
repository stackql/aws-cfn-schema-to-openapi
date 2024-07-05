---
title: parameter_group_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - parameter_group_tags
  - elasticache
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

Creates, updates, deletes or gets a <code>parameter_group_tag</code> resource or lists <code>parameter_group_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>parameter_group_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElastiCache::ParameterGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.parameter_group_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description for this cache parameter group.</td></tr>
<tr><td><CopyableCode code="properties" /></td><td><code>object</code></td><td>A comma-delimited list of parameter name/value pairs. For more information see ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>Tags are composed of a Key/Value pair. You can use tags to categorize and track each parameter group. The tag value null is permitted.</td></tr>
<tr><td><CopyableCode code="cache_parameter_group_name" /></td><td><code>string</code></td><td>The name of the Cache Parameter Group.</td></tr>
<tr><td><CopyableCode code="cache_parameter_group_family" /></td><td><code>string</code></td><td>The name of the cache parameter group family that this cache parameter group is compatible with.</td></tr>
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








