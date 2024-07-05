---
title: instance_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_tags
  - sso
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

Creates, updates, deletes or gets an <code>instance_tag</code> resource or lists <code>instance_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instance_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for Identity Center (SSO) Instance</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso.instance_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name you want to assign to this Identity Center (SSO) Instance</td></tr>
<tr><td><CopyableCode code="instance_arn" /></td><td><code>string</code></td><td>The SSO Instance ARN that is returned upon creation of the Identity Center (SSO) Instance</td></tr>
<tr><td><CopyableCode code="owner_account_id" /></td><td><code>string</code></td><td>The AWS accountId of the owner of the Identity Center (SSO) Instance</td></tr>
<tr><td><CopyableCode code="identity_store_id" /></td><td><code>string</code></td><td>The ID of the identity store associated with the created Identity Center (SSO) Instance</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The status of the Identity Center (SSO) Instance, create_in_progress/delete_in_progress/active</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
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








