---
title: wireless_gateway_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_gateway_tags
  - iotwireless
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

Creates, updates, deletes or gets a <code>wireless_gateway_tag</code> resource or lists <code>wireless_gateway_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>wireless_gateway_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create and manage wireless gateways, including LoRa gateways.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.wireless_gateway_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Name of Wireless Gateway.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>Description of Wireless Gateway.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the gateway.</td></tr>
<tr><td><CopyableCode code="lo_ra_wan" /></td><td><code>object</code></td><td>The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>Arn for Wireless Gateway. Returned upon successful create.</td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td>Id for Wireless Gateway. Returned upon successful create.</td></tr>
<tr><td><CopyableCode code="thing_arn" /></td><td><code>string</code></td><td>Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.</td></tr>
<tr><td><CopyableCode code="thing_name" /></td><td><code>string</code></td><td>Thing Name. If there is a Thing created, this can be returned with a Get call.</td></tr>
<tr><td><CopyableCode code="last_uplink_received_at" /></td><td><code>string</code></td><td>The date and time when the most recent uplink was received.</td></tr>
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








