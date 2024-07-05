---
title: rotation_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - rotation_tags
  - ssmcontacts
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

Creates, updates, deletes or gets a <code>rotation_tag</code> resource or lists <code>rotation_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rotation_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SSMContacts::Rotation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssmcontacts.rotation_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Name of the Rotation</td></tr>
<tr><td><CopyableCode code="contact_ids" /></td><td><code>array</code></td><td>Members of the rotation</td></tr>
<tr><td><CopyableCode code="start_time" /></td><td><code>string</code></td><td>Start time of the first shift of Oncall Schedule</td></tr>
<tr><td><CopyableCode code="time_zone_id" /></td><td><code>string</code></td><td>TimeZone Identifier for the Oncall Schedule</td></tr>
<tr><td><CopyableCode code="recurrence" /></td><td><code>object</code></td><td>Information about when an on-call rotation is in effect and how long the rotation period lasts.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the rotation.</td></tr>
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








