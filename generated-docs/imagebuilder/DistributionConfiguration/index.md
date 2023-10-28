---
title: DistributionConfiguration
hide_title: false
hide_table_of_contents: false
keywords:
  - DistributionConfiguration
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
The DistributionConfiguration resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>imagebuilder.DistributionConfiguration</b></span><br />
<span>resource id:&nbsp;<b>imagebuilder:DistributionConfiguration</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>imagebuilder.DistributionConfiguration</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>imagebuilder:DistributionConfiguration</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the distribution configuration.</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>The name of the distribution configuration.</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>The description of the distribution configuration.</td></tr><tr><td><code>Distributions</code></td><td><code>array</code></td><td>The distributions of the distribution configuration.</td></tr><tr><td><code>Tags</code></td><td><code>object</code></td><td>The tags associated with the component.</td></tr>
</tbody></table>