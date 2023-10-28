---
title: PublicTypeVersion
hide_title: false
hide_table_of_contents: false
keywords:
  - PublicTypeVersion
  - cloudformation
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The PublicTypeVersion resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>cloudformation.PublicTypeVersion</b></span><br />
<span>resource id:&nbsp;<b>cloudformation:PublicTypeVersion</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cloudformation.PublicTypeVersion</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>cloudformation:PublicTypeVersion</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Number (ARN) of the extension.</td></tr><tr><td><code>TypeVersionArn</code></td><td><code>string</code></td><td>The Amazon Resource Number (ARN) of the extension with the versionId.</td></tr><tr><td><code>PublicVersionNumber</code></td><td><code>string</code></td><td>The version number of a public third-party extension</td></tr><tr><td><code>PublisherId</code></td><td><code>string</code></td><td>The publisher id assigned by CloudFormation for publishing in this region.</td></tr><tr><td><code>PublicTypeArn</code></td><td><code>string</code></td><td>The Amazon Resource Number (ARN) assigned to the public extension upon publication</td></tr><tr><td><code>TypeName</code></td><td><code>string</code></td><td>The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.</td></tr><tr><td><code>LogDeliveryBucket</code></td><td><code>string</code></td><td>A url to the S3 bucket where logs for the testType run will be available</td></tr><tr><td><code>Type</code></td><td><code>string</code></td><td>The kind of extension</td></tr>
</tbody></table>