---
title: data_integration_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - data_integration_tags
  - appintegrations
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

Creates, updates, deletes or gets a <code>data_integration_tag</code> resource or lists <code>data_integration_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_integration_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppIntegrations::DataIntegration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appintegrations.data_integration_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The data integration description.</td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td>The unique identifer of the data integration.</td></tr>
<tr><td><CopyableCode code="data_integration_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the data integration.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the data integration.</td></tr>
<tr><td><CopyableCode code="kms_key" /></td><td><code>string</code></td><td>The KMS key of the data integration.</td></tr>
<tr><td><CopyableCode code="schedule_config" /></td><td><code>object</code></td><td>The name of the data and how often it should be pulled from the source.</td></tr>
<tr><td><CopyableCode code="source_uri" /></td><td><code>string</code></td><td>The URI of the data source.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>The tags (keys and values) associated with the data integration.</td></tr>
<tr><td><CopyableCode code="file_configuration" /></td><td><code>object</code></td><td>The configuration for what files should be pulled from the source.</td></tr>
<tr><td><CopyableCode code="object_configuration" /></td><td><code>object</code></td><td>The configuration for what data should be pulled from the source.</td></tr>
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








