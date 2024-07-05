---
title: domain_configuration_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_configuration_tags
  - iot
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

Creates, updates, deletes or gets a <code>domain_configuration_tag</code> resource or lists <code>domain_configuration_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>domain_configuration_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create and manage a Domain Configuration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.domain_configuration_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="domain_configuration_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="authorizer_config" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="server_certificate_arns" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="service_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="validation_certificate_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_configuration_status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="server_certificate_config" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="server_certificates" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="tls_config" /></td><td><code>object</code></td><td></td></tr>
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








