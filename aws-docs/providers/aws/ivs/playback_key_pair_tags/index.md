---
title: playback_key_pair_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - playback_key_pair_tags
  - ivs
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

Creates, updates, deletes or gets a <code>playback_key_pair_tag</code> resource or lists <code>playback_key_pair_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>playback_key_pair_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IVS::PlaybackKeyPair</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.playback_key_pair_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.</td></tr>
<tr><td><CopyableCode code="public_key_material" /></td><td><code>string</code></td><td>The public portion of a customer-generated key pair.</td></tr>
<tr><td><CopyableCode code="fingerprint" /></td><td><code>string</code></td><td>Key-pair identifier.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>Key-pair identifier.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the asset model.</td></tr>
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








