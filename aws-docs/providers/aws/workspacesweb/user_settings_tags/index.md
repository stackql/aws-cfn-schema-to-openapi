---
title: user_settings_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - user_settings_tags
  - workspacesweb
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

Creates, updates, deletes or gets an <code>user_settings_tag</code> resource or lists <code>user_settings_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>user_settings_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::UserSettings Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspacesweb.user_settings_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="additional_encryption_context" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="associated_portal_arns" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="cookie_synchronization_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="copy_allowed" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="customer_managed_key" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="disconnect_timeout_in_minutes" /></td><td><code>number</code></td><td></td></tr>
<tr><td><CopyableCode code="download_allowed" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="idle_disconnect_timeout_in_minutes" /></td><td><code>number</code></td><td></td></tr>
<tr><td><CopyableCode code="paste_allowed" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="print_allowed" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="upload_allowed" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="user_settings_arn" /></td><td><code>string</code></td><td></td></tr>
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








