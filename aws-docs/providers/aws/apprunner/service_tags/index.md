---
title: service_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - service_tags
  - apprunner
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

Creates, updates, deletes or gets a <code>service_tag</code> resource or lists <code>service_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::AppRunner::Service resource specifies an AppRunner Service.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apprunner.service_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="service_name" /></td><td><code>string</code></td><td>The AppRunner Service Name.</td></tr>
<tr><td><CopyableCode code="service_id" /></td><td><code>string</code></td><td>The AppRunner Service Id</td></tr>
<tr><td><CopyableCode code="service_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the AppRunner Service.</td></tr>
<tr><td><CopyableCode code="service_url" /></td><td><code>string</code></td><td>The Service Url of the AppRunner Service.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>AppRunner Service status.</td></tr>
<tr><td><CopyableCode code="source_configuration" /></td><td><code>object</code></td><td>Source Code configuration</td></tr>
<tr><td><CopyableCode code="instance_configuration" /></td><td><code>object</code></td><td>Instance Configuration</td></tr>
<tr><td><CopyableCode code="encryption_configuration" /></td><td><code>object</code></td><td>Encryption configuration (KMS key)</td></tr>
<tr><td><CopyableCode code="health_check_configuration" /></td><td><code>object</code></td><td>Health check configuration</td></tr>
<tr><td><CopyableCode code="observability_configuration" /></td><td><code>object</code></td><td>Service observability configuration</td></tr>
<tr><td><CopyableCode code="auto_scaling_configuration_arn" /></td><td><code>string</code></td><td>Autoscaling configuration ARN</td></tr>
<tr><td><CopyableCode code="network_configuration" /></td><td><code>object</code></td><td>Network configuration</td></tr>
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








