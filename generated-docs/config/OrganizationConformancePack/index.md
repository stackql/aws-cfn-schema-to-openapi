---
title: OrganizationConformancePack
hide_title: false
hide_table_of_contents: false
keywords:
  - OrganizationConformancePack
  - config
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The OrganizationConformancePack resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>config.OrganizationConformancePack</b></span><br />
<span>resource id:&nbsp;<b>config:OrganizationConformancePack</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>config.OrganizationConformancePack</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>config:OrganizationConformancePack</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>OrganizationConformancePackName</code></td><td><code>string</code></td><td>The name of the organization conformance pack.</td></tr><tr><td><code>TemplateS3Uri</code></td><td><code>string</code></td><td>Location of file containing the template body.</td></tr><tr><td><code>TemplateBody</code></td><td><code>string</code></td><td>A string containing full conformance pack template body.</td></tr><tr><td><code>DeliveryS3Bucket</code></td><td><code>string</code></td><td>AWS Config stores intermediate files while processing conformance pack template.</td></tr><tr><td><code>DeliveryS3KeyPrefix</code></td><td><code>string</code></td><td>The prefix for the delivery S3 bucket.</td></tr><tr><td><code>ConformancePackInputParameters</code></td><td><code>array</code></td><td>A list of ConformancePackInputParameter objects.</td></tr><tr><td><code>ExcludedAccounts</code></td><td><code>array</code></td><td>A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.</td></tr>
</tbody></table>