---
title: access_key_last_used
hide_title: false
hide_table_of_contents: false
keywords:
  - access_key_last_used
  - iam
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

Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>access_key_last_used</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Contains the response to a successful &lt;a&gt;GetAccessKeyLastUsed&lt;/a&gt; request. It is also returned as a member of the &lt;a&gt;AccessKeyMetaData&lt;/a&gt; structure returned by the &lt;a&gt;ListAccessKeys&lt;/a&gt; action.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.access_key_last_used" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="access_key_last_used" /></td><td><code>object</code></td><td>Contains information about the last time the access key was used.</td></tr>
<tr><td><CopyableCode code="user_name" /></td><td><code>string</code></td><td><p>The name of the IAM user that owns this access key.</p> <p/></td></tr>
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
    <td><CopyableCode code="access_key_last_used_Get" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="AccessKeyId, region" /></td>
  </tr>
</tbody></table>






