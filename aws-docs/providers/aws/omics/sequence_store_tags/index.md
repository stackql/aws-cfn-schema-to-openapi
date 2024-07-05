---
title: sequence_store_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - sequence_store_tags
  - omics
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

Creates, updates, deletes or gets a <code>sequence_store_tag</code> resource or lists <code>sequence_store_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sequence_store_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Omics::SequenceStore Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.sequence_store_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The store's ARN.</td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>When the store was created.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>A description for the store.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>A name for the store.</td></tr>
<tr><td><CopyableCode code="fallback_location" /></td><td><code>string</code></td><td>An S3 URI representing the bucket and folder to store failed read set uploads.</td></tr>
<tr><td><CopyableCode code="sequence_store_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="sse_config" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>object</code></td><td>A map of resource tags</td></tr>
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








