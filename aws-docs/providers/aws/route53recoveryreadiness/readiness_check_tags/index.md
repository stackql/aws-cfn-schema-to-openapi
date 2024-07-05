---
title: readiness_check_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - readiness_check_tags
  - route53recoveryreadiness
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

Creates, updates, deletes or gets a <code>readiness_check_tag</code> resource or lists <code>readiness_check_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>readiness_check_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Aws Route53 Recovery Readiness Check Schema and API specification.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53recoveryreadiness.readiness_check_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="resource_set_name" /></td><td><code>string</code></td><td>The name of the resource set to check.</td></tr>
<tr><td><CopyableCode code="readiness_check_name" /></td><td><code>string</code></td><td>Name of the ReadinessCheck to create.</td></tr>
<tr><td><CopyableCode code="readiness_check_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the readiness check.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A collection of tags associated with a resource.</td></tr>
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








