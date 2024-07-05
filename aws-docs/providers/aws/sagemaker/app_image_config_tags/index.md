---
title: app_image_config_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - app_image_config_tags
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

Creates, updates, deletes or gets an <code>app_image_config_tag</code> resource or lists <code>app_image_config_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>app_image_config_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::AppImageConfig</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.app_image_config_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="app_image_config_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the AppImageConfig.</td></tr>
<tr><td><CopyableCode code="app_image_config_name" /></td><td><code>string</code></td><td>The Name of the AppImageConfig.</td></tr>
<tr><td><CopyableCode code="kernel_gateway_image_config" /></td><td><code>object</code></td><td>The KernelGatewayImageConfig.</td></tr>
<tr><td><CopyableCode code="jupyter_lab_app_image_config" /></td><td><code>object</code></td><td>The JupyterLabAppImageConfig.</td></tr>
<tr><td><CopyableCode code="code_editor_app_image_config" /></td><td><code>object</code></td><td>The CodeEditorAppImageConfig.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A list of tags to apply to the AppImageConfig.</td></tr>
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








