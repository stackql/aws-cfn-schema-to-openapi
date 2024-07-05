---
title: datastore_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - datastore_tags
  - healthimaging
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

Creates, updates, deletes or gets a <code>datastore_tag</code> resource or lists <code>datastore_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>datastore_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::HealthImaging::Datastore Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.healthimaging.datastore_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="datastore_arn" /></td><td><code>string</code></td><td>The Datastore's ARN.</td></tr>
<tr><td><CopyableCode code="datastore_name" /></td><td><code>string</code></td><td>User friendly name for Datastore.</td></tr>
<tr><td><CopyableCode code="datastore_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="datastore_status" /></td><td><code>string</code></td><td>A string to denote the Datastore's state.</td></tr>
<tr><td><CopyableCode code="kms_key_arn" /></td><td><code>string</code></td><td>ARN referencing a KMS key or KMS key alias.</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>The timestamp when the data store was created.</td></tr>
<tr><td><CopyableCode code="updated_at" /></td><td><code>string</code></td><td>The timestamp when the data store was created.</td></tr>
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








