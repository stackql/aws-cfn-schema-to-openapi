---
title: image_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - image_tags
  - sagemaker
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

Creates, updates, deletes or gets an <code>image_tag</code> resource or lists <code>image_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>image_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::Image</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.image_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="image_name" /></td><td><code>string</code></td><td>The name of the image this version belongs to.</td></tr>
<tr><td><CopyableCode code="image_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the parent image.</td></tr>
<tr><td><CopyableCode code="image_role_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.</td></tr>
<tr><td><CopyableCode code="image_display_name" /></td><td><code>string</code></td><td>The display name of the image.</td></tr>
<tr><td><CopyableCode code="image_description" /></td><td><code>string</code></td><td>A description of the image.</td></tr>
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
    <td><CopyableCode code="view" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>







