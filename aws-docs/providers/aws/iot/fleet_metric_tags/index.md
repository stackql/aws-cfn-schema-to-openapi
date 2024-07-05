---
title: fleet_metric_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_metric_tags
  - iot
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

Creates, updates, deletes or gets a <code>fleet_metric_tag</code> resource or lists <code>fleet_metric_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>fleet_metric_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An aggregated metric of certain devices in your fleet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.fleet_metric_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="metric_name" /></td><td><code>string</code></td><td>The name of the fleet metric</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of a fleet metric</td></tr>
<tr><td><CopyableCode code="query_string" /></td><td><code>string</code></td><td>The Fleet Indexing query used by a fleet metric</td></tr>
<tr><td><CopyableCode code="period" /></td><td><code>integer</code></td><td>The period of metric emission in seconds</td></tr>
<tr><td><CopyableCode code="aggregation_field" /></td><td><code>string</code></td><td>The aggregation field to perform aggregation and metric emission</td></tr>
<tr><td><CopyableCode code="query_version" /></td><td><code>string</code></td><td>The version of a Fleet Indexing query used by a fleet metric</td></tr>
<tr><td><CopyableCode code="index_name" /></td><td><code>string</code></td><td>The index name of a fleet metric</td></tr>
<tr><td><CopyableCode code="unit" /></td><td><code>string</code></td><td>The unit of data points emitted by a fleet metric</td></tr>
<tr><td><CopyableCode code="aggregation_type" /></td><td><code>object</code></td><td>Aggregation types supported by Fleet Indexing</td></tr>
<tr><td><CopyableCode code="metric_arn" /></td><td><code>string</code></td><td>The Amazon Resource Number (ARN) of a fleet metric metric</td></tr>
<tr><td><CopyableCode code="creation_date" /></td><td><code>string</code></td><td>The creation date of a fleet metric</td></tr>
<tr><td><CopyableCode code="last_modified_date" /></td><td><code>string</code></td><td>The last modified date of a fleet metric</td></tr>
<tr><td><CopyableCode code="version" /></td><td><code>number</code></td><td>The version of a fleet metric</td></tr>
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








