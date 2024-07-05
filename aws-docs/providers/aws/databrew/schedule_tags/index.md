---
title: schedule_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - schedule_tags
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

Creates, updates, deletes or gets a <code>schedule_tag</code> resource or lists <code>schedule_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schedule_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataBrew::Schedule.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.schedule_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="job_names" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="cron_expression" /></td><td><code>string</code></td><td>Schedule cron</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Schedule Name</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
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








