---
title: bucket_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_policy
  - s3outposts
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The bucket_policy resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>bucket_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.s3outposts.bucket_policy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Bucket</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the specified bucket.</td></tr><tr><td><code>PolicyDocument</code></td><td><code>object</code></td><td>A policy document containing permissions to add to the specified bucket.</td></tr>
</tbody></table>