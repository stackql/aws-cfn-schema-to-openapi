---
title: CostCategory
hide_title: false
hide_table_of_contents: false
keywords:
  - CostCategory
  - ce
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The CostCategory resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>CostCategory</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ce.CostCategory</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td>Cost category ARN</td></tr><tr><td><code>EffectiveStart</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td></td></tr><tr><td><code>RuleVersion</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Rules</code></td><td><code>string</code></td><td>JSON array format of Expression in Billing and Cost Management API</td></tr><tr><td><code>SplitChargeRules</code></td><td><code>string</code></td><td>Json array format of CostCategorySplitChargeRule in Billing and Cost Management API</td></tr><tr><td><code>DefaultValue</code></td><td><code>string</code></td><td>The default value for the cost category</td></tr>
</tbody></table>