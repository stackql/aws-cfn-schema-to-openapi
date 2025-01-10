---
title: policies_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - policies_list_only
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

Contains the response to a successful <a>GetPolicy</a> request. 

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policies_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Contains the response to a successful &lt;a&gt;GetPolicy&lt;/a&gt; request.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.policies_list_only" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

## Methods

<table><tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="get" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="PolicyArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>






