---
title: fuota_task_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - fuota_task_tags
  - iotwireless
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

Creates, updates, deletes or gets a <code>fuota_task_tag</code> resource or lists <code>fuota_task_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>fuota_task_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create and manage FUOTA tasks.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.fuota_task_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Name of FUOTA task</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>FUOTA task description</td></tr>
<tr><td><CopyableCode code="lo_ra_wan" /></td><td><code>object</code></td><td>FUOTA task LoRaWAN</td></tr>
<tr><td><CopyableCode code="firmware_update_image" /></td><td><code>string</code></td><td>FUOTA task firmware update image binary S3 link</td></tr>
<tr><td><CopyableCode code="firmware_update_role" /></td><td><code>string</code></td><td>FUOTA task firmware IAM role for reading S3</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>FUOTA task arn. Returned after successful create.</td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td>FUOTA task id. Returned after successful create.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the FUOTA task.</td></tr>
<tr><td><CopyableCode code="fuota_task_status" /></td><td><code>string</code></td><td>FUOTA task status. Returned after successful read.</td></tr>
<tr><td><CopyableCode code="associate_wireless_device" /></td><td><code>string</code></td><td>Wireless device to associate. Only for update request.</td></tr>
<tr><td><CopyableCode code="disassociate_wireless_device" /></td><td><code>string</code></td><td>Wireless device to disassociate. Only for update request.</td></tr>
<tr><td><CopyableCode code="associate_multicast_group" /></td><td><code>string</code></td><td>Multicast group to associate. Only for update request.</td></tr>
<tr><td><CopyableCode code="disassociate_multicast_group" /></td><td><code>string</code></td><td>Multicast group to disassociate. Only for update request.</td></tr>
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








