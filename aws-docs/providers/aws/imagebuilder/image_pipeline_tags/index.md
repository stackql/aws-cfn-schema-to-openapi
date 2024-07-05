---
title: image_pipeline_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - image_pipeline_tags
  - imagebuilder
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

Creates, updates, deletes or gets an <code>image_pipeline_tag</code> resource or lists <code>image_pipeline_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>image_pipeline_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::ImageBuilder::ImagePipeline</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.image_pipeline_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the image pipeline.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the image pipeline.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of the image pipeline.</td></tr>
<tr><td><CopyableCode code="image_tests_configuration" /></td><td><code>object</code></td><td>The image tests configuration of the image pipeline.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The status of the image pipeline.</td></tr>
<tr><td><CopyableCode code="schedule" /></td><td><code>object</code></td><td>The schedule of the image pipeline.</td></tr>
<tr><td><CopyableCode code="image_recipe_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.</td></tr>
<tr><td><CopyableCode code="container_recipe_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.</td></tr>
<tr><td><CopyableCode code="distribution_configuration_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.</td></tr>
<tr><td><CopyableCode code="infrastructure_configuration_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.</td></tr>
<tr><td><CopyableCode code="workflows" /></td><td><code>array</code></td><td>Workflows to define the image build process</td></tr>
<tr><td><CopyableCode code="enhanced_image_metadata_enabled" /></td><td><code>boolean</code></td><td>Collects additional information about the image being created, including the operating system (OS) version and package list.</td></tr>
<tr><td><CopyableCode code="image_scanning_configuration" /></td><td><code>object</code></td><td>Contains settings for vulnerability scans.</td></tr>
<tr><td><CopyableCode code="execution_role" /></td><td><code>string</code></td><td>The execution role name/ARN for the image build, if provided</td></tr>
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








