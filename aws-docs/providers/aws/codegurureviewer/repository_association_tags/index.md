---
title: repository_association_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_association_tags
  - codegurureviewer
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

Expands all tag keys and values for <code>repository_associations</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>repository_association_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This resource schema represents the RepositoryAssociation resource in the Amazon CodeGuru Reviewer service.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codegurureviewer.repository_association_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Name of the repository to be associated.</td></tr>
<tr><td><CopyableCode code="type" /></td><td><code>string</code></td><td>The type of repository to be associated.</td></tr>
<tr><td><CopyableCode code="owner" /></td><td><code>string</code></td><td>The owner of the repository. For a Bitbucket repository, this is the username for the account that owns the repository.</td></tr>
<tr><td><CopyableCode code="bucket_name" /></td><td><code>string</code></td><td>The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.</td></tr>
<tr><td><CopyableCode code="connection_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.</td></tr>
<tr><td><CopyableCode code="association_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the repository association.</td></tr>
<tr><td><CopyableCode code="tag_key" /></td><td><code>string</code></td><td>Tag key.</td></tr>
<tr><td><CopyableCode code="tag_value" /></td><td><code>string</code></td><td>Tag value.</td></tr>
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
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>

## `SELECT` examples
Expands tags for all <code>repository_associations</code> in a region.
```sql
SELECT
region,
name,
type,
owner,
bucket_name,
connection_arn,
association_arn,
tag_key,
tag_value
FROM aws.codegurureviewer.repository_association_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>repository_association_tags</code> resource, see <a href="/providers/aws/codegurureviewer/repository_associations/#permissions"><code>repository_associations</code></a>

