---
title: scheduled_audit_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_audit_tags
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

Creates, updates, deletes or gets a <code>scheduled_audit_tag</code> resource or lists <code>scheduled_audit_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>scheduled_audit_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Scheduled audits can be used to specify the checks you want to perform during an audit and how often the audit should be run.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.scheduled_audit_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="scheduled_audit_name" /></td><td><code>string</code></td><td>The name you want to give to the scheduled audit.</td></tr>
<tr><td><CopyableCode code="frequency" /></td><td><code>string</code></td><td>How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY.</td></tr>
<tr><td><CopyableCode code="day_of_month" /></td><td><code>string</code></td><td>The day of the month on which the scheduled audit takes place. Can be 1 through 31 or LAST. This field is required if the frequency parameter is set to MONTHLY.</td></tr>
<tr><td><CopyableCode code="day_of_week" /></td><td><code>string</code></td><td>The day of the week on which the scheduled audit takes place. Can be one of SUN, MON, TUE,WED, THU, FRI, or SAT. This field is required if the frequency parameter is set to WEEKLY or BIWEEKLY.</td></tr>
<tr><td><CopyableCode code="target_check_names" /></td><td><code>array</code></td><td>Which checks are performed during the scheduled audit. Checks must be enabled for your account.</td></tr>
<tr><td><CopyableCode code="scheduled_audit_arn" /></td><td><code>string</code></td><td>The ARN (Amazon resource name) of the scheduled audit.</td></tr>
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








