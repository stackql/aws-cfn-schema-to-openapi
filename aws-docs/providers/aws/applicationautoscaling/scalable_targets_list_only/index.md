---
title: scalable_targets_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - scalable_targets_list_only
  - applicationautoscaling
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

Lists <code>scalable_targets</code> in a region or regions, for all properties use <a href="/providers/aws/serviceName/scalable_targets/"><code>scalable_targets</code></a>

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>scalable_targets_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::ApplicationAutoScaling::ScalableTarget</code> resource specifies a resource that Application Auto Scaling can scale, such as an AWS::DynamoDB::Table or AWS::ECS::Service resource.<br />For more information, see &#91;Getting started&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html) in the *Application Auto Scaling User Guide*.<br />If the resource that you want Application Auto Scaling to scale is not yet created in your account, add a dependency on the resource when registering it as a scalable target using the &#91;DependsOn&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) attribute.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.applicationautoscaling.scalable_targets_list_only" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

## Methods

<table><tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>

## `SELECT` examples
Lists all <code>scalable_targets</code> in a region.
```sql
SELECT
region,
resource_id,
scalable_dimension,
service_namespace
FROM aws.applicationautoscaling.scalable_targets_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>scalable_targets_list_only</code> resource, see <a href="/providers/aws/applicationautoscaling/scalable_targets/#permissions"><code>scalable_targets</code></a>

