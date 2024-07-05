---
title: worker_configuration_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - worker_configuration_tags
  - kafkaconnect
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

Creates, updates, deletes or gets a <code>worker_configuration_tag</code> resource or lists <code>worker_configuration_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>worker_configuration_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The configuration of the workers, which are the processes that run the connector logic.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafkaconnect.worker_configuration_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the worker configuration.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>A summary description of the worker configuration.</td></tr>
<tr><td><CopyableCode code="worker_configuration_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the custom configuration.</td></tr>
<tr><td><CopyableCode code="properties_file_content" /></td><td><code>string</code></td><td>Base64 encoded contents of connect-distributed.properties file.</td></tr>
<tr><td><CopyableCode code="revision" /></td><td><code>integer</code></td><td>The description of a revision of the worker configuration.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A collection of tags associated with a resource</td></tr>
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








