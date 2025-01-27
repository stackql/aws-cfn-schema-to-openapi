---
title: logging_configuration_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_configuration_tags
  - ivschat
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

Expands all tag keys and values for <code>logging_configurations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>logging_configuration_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::IVSChat::LoggingConfiguration.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivschat.logging_configuration_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>LoggingConfiguration ARN is automatically generated on creation and assigned as the unique identifier.</td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td>The system-generated ID of the logging configuration.</td></tr>
<tr><td><CopyableCode code="destination_configuration" /></td><td><code>object</code></td><td>Destination configuration for IVS Chat logging.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the logging configuration. The value does not need to be unique.</td></tr>
<tr><td><CopyableCode code="state" /></td><td><code>string</code></td><td>The state of the logging configuration. When the state is ACTIVE, the configuration is ready to log chat content.</td></tr>
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
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>

## `SELECT` examples
Expands tags for all <code>logging_configurations</code> in a region.
```sql
SELECT
region,
arn,
id,
destination_configuration,
name,
state,
tag_key,
tag_value
FROM aws.ivschat.logging_configuration_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>logging_configuration_tags</code> resource, see <a href="/providers/aws/ivschat/logging_configurations/#permissions"><code>logging_configurations</code></a>

