---
title: AccessPointPolicy
hide_title: false
hide_table_of_contents: false
keywords:
  - AccessPointPolicy
  - s3objectlambda
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The AccessPointPolicy resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>AccessPointPolicy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.s3objectlambda.AccessPointPolicy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ObjectLambdaAccessPoint</code></td><td><code>string</code></td><td>The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies.</td></tr><tr><td><code>PolicyDocument</code></td><td><code>object</code></td><td>A policy document containing permissions to add to the specified ObjectLambdaAccessPoint. For more information, see Access Policy Language Overview (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the Amazon Simple Storage Service Developer Guide. </td></tr>
</tbody></table>