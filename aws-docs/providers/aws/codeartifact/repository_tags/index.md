---
title: repository_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_tags
  - codeartifact
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

Creates, updates, deletes or gets a <code>repository_tag</code> resource or lists <code>repository_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>repository_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The resource schema to create a CodeArtifact repository.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.repository_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="repository_name" /></td><td><code>string</code></td><td>The name of the repository.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the repository. This is used for GetAtt</td></tr>
<tr><td><CopyableCode code="domain_name" /></td><td><code>string</code></td><td>The name of the domain that contains the repository.</td></tr>
<tr><td><CopyableCode code="domain_owner" /></td><td><code>string</code></td><td>The 12-digit account ID of the AWS account that owns the domain.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>A text description of the repository.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The ARN of the repository.</td></tr>
<tr><td><CopyableCode code="external_connections" /></td><td><code>array</code></td><td>A list of external connections associated with the repository.</td></tr>
<tr><td><CopyableCode code="upstreams" /></td><td><code>array</code></td><td>A list of upstream repositories associated with the repository.</td></tr>
<tr><td><CopyableCode code="permissions_policy_document" /></td><td><code>object</code></td><td>The access control resource policy on the provided repository.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
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








