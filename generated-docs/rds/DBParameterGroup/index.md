---
title: DBParameterGroup
hide_title: false
hide_table_of_contents: false
keywords:
  - DBParameterGroup
  - rds
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The DBParameterGroup resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>rds.DBParameterGroup</b></span><br />
<span>resource id:&nbsp;<b>rds:DBParameterGroup</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rds.DBParameterGroup</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>rds:DBParameterGroup</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>DBParameterGroupName</code></td><td><code>string</code></td><td>Specifies the name of the DB parameter group</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>Provides the customer-specified description for this DB parameter group.</td></tr><tr><td><code>Family</code></td><td><code>string</code></td><td>The DB parameter group family name.</td></tr><tr><td><code>Parameters</code></td><td><code>object</code></td><td>An array of parameter names and values for the parameter update.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
</tbody></table>