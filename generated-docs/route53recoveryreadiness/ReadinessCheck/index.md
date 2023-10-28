---
title: ReadinessCheck
hide_title: false
hide_table_of_contents: false
keywords:
  - ReadinessCheck
  - route53recoveryreadiness
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The ReadinessCheck resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>route53recoveryreadiness.ReadinessCheck</b></span><br />
<span>resource id:&nbsp;<b>route53recoveryreadiness:ReadinessCheck</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>route53recoveryreadiness.ReadinessCheck</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>route53recoveryreadiness:ReadinessCheck</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ResourceSetName</code></td><td><code>string</code></td><td>The name of the resource set to check.</td></tr><tr><td><code>ReadinessCheckName</code></td><td><code>string</code></td><td>Name of the ReadinessCheck to create.</td></tr><tr><td><code>ReadinessCheckArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the readiness check.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A collection of tags associated with a resource.</td></tr>
</tbody></table>