---
title: vpc_ingress_connection_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_ingress_connection_tags
  - apprunner
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

Creates, updates, deletes or gets a <code>vpc_ingress_connection_tag</code> resource or lists <code>vpc_ingress_connection_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpc_ingress_connection_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::AppRunner::VpcIngressConnection resource is an App Runner resource that specifies an App Runner VpcIngressConnection.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apprunner.vpc_ingress_connection_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="vpc_ingress_connection_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the VpcIngressConnection.</td></tr>
<tr><td><CopyableCode code="vpc_ingress_connection_name" /></td><td><code>string</code></td><td>The customer-provided Vpc Ingress Connection name.</td></tr>
<tr><td><CopyableCode code="service_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the service.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The current status of the VpcIngressConnection.</td></tr>
<tr><td><CopyableCode code="domain_name" /></td><td><code>string</code></td><td>The Domain name associated with the VPC Ingress Connection.</td></tr>
<tr><td><CopyableCode code="ingress_vpc_configuration" /></td><td><code>object</code></td><td>The configuration of customer’s VPC and related VPC endpoint</td></tr>
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








