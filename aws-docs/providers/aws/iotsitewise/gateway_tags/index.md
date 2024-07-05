---
title: gateway_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - gateway_tags
  - iotsitewise
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

Creates, updates, deletes or gets a <code>gateway_tag</code> resource or lists <code>gateway_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>gateway_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::Gateway</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.gateway_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="gateway_name" /></td><td><code>string</code></td><td>A unique, friendly name for the gateway.</td></tr>
<tr><td><CopyableCode code="gateway_platform" /></td><td><code>object</code></td><td>The gateway's platform. You can only specify one platform in a gateway.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the gateway.</td></tr>
<tr><td><CopyableCode code="gateway_id" /></td><td><code>string</code></td><td>The ID of the gateway device.</td></tr>
<tr><td><CopyableCode code="gateway_capability_summaries" /></td><td><code>array</code></td><td>A list of gateway capability summaries that each contain a namespace and status.</td></tr>
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








