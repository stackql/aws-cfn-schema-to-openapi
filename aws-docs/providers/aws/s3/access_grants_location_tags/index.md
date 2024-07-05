---
title: access_grants_location_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants_location_tags
  - s3
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

Creates, updates, deletes or gets an <code>access_grants_location_tag</code> resource or lists <code>access_grants_location_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>access_grants_location_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::S3::AccessGrantsLocation resource is an Amazon S3 resource type hosted in an access grants instance which can be the target of S3 access grants.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.access_grants_location_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="access_grants_location_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the specified Access Grants location.</td></tr>
<tr><td><CopyableCode code="access_grants_location_id" /></td><td><code>string</code></td><td>The unique identifier for the specified Access Grants location.</td></tr>
<tr><td><CopyableCode code="iam_role_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the access grant location's associated IAM role.</td></tr>
<tr><td><CopyableCode code="location_scope" /></td><td><code>string</code></td><td>Descriptor for where the location actually points</td></tr>
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








