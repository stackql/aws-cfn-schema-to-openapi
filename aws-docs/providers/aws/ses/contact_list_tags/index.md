---
title: contact_list_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_list_tags
  - ses
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

Creates, updates, deletes or gets a <code>contact_list_tag</code> resource or lists <code>contact_list_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>contact_list_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::SES::ContactList.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.contact_list_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="contact_list_name" /></td><td><code>string</code></td><td>The name of the contact list.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of the contact list.</td></tr>
<tr><td><CopyableCode code="topics" /></td><td><code>array</code></td><td>The topics associated with the contact list.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>The tags (keys and values) associated with the contact list.</td></tr>
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








