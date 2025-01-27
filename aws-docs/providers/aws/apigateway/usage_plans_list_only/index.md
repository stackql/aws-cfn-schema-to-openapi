---
title: usage_plans_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_plans_list_only
  - apigateway
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

Lists <code>usage_plans</code> in a region or regions, for all properties use <a href="/providers/aws/serviceName/usage_plans/"><code>usage_plans</code></a>

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>usage_plans_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::ApiGateway::UsagePlan</code> resource creates a usage plan for deployed APIs. A usage plan sets a target for the throttling and quota limits on individual client API keys. For more information, see &#91;Creating and Using API Usage Plans in Amazon API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html) in the *API Gateway Developer Guide*.<br />In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using &#91;&#93;(https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and &#91;&#93;(https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.usage_plans_list_only" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
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
Lists all <code>usage_plans</code> in a region.
```sql
SELECT
region,
id
FROM aws.apigateway.usage_plans_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>usage_plans_list_only</code> resource, see <a href="/providers/aws/apigateway/usage_plans/#permissions"><code>usage_plans</code></a>

