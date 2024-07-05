---
title: capacity_reservation_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_reservation_tags
  - athena
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

Creates, updates, deletes or gets a <code>capacity_reservation_tag</code> resource or lists <code>capacity_reservation_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>capacity_reservation_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Athena::CapacityReservation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.athena.capacity_reservation_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the specified capacity reservation</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The reservation name.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The status of the reservation.</td></tr>
<tr><td><CopyableCode code="target_dpus" /></td><td><code>integer</code></td><td>The number of DPUs to request to be allocated to the reservation.</td></tr>
<tr><td><CopyableCode code="allocated_dpus" /></td><td><code>integer</code></td><td>The number of DPUs Athena has provisioned and allocated for the reservation</td></tr>
<tr><td><CopyableCode code="capacity_assignment_configuration" /></td><td><code>object</code></td><td>Assignment configuration to assign workgroups to a reservation</td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>The date and time the reservation was created.</td></tr>
<tr><td><CopyableCode code="last_successful_allocation_time" /></td><td><code>string</code></td><td>The timestamp when the last successful allocated was made</td></tr>
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








