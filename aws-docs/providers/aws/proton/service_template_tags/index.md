---
title: service_template_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - service_template_tags
  - proton
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

Expands all tag keys and values for <code>service_templates</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_template_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Proton::ServiceTemplate Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.service_template_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td><p>The Amazon Resource Name (ARN) of the service template.</p></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td><p>A description of the service template.</p></td></tr>
<tr><td><CopyableCode code="display_name" /></td><td><code>string</code></td><td><p>The name of the service template as displayed in the developer interface.</p></td></tr>
<tr><td><CopyableCode code="encryption_key" /></td><td><code>string</code></td><td><p>A customer provided encryption key that's used to encrypt data.</p></td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="pipeline_provisioning" /></td><td><code>string</code></td><td></td></tr>
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
Expands tags for all <code>service_templates</code> in a region.
```sql
SELECT
region,
arn,
description,
display_name,
encryption_key,
name,
pipeline_provisioning,
tag_key,
tag_value
FROM aws.proton.service_template_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>service_template_tags</code> resource, see <a href="/providers/aws/proton/service_templates/#permissions"><code>service_templates</code></a>

