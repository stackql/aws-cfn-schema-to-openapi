---
title: AccessPolicy
hide_title: false
hide_table_of_contents: false
keywords:
  - AccessPolicy
  - iot
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The AccessPolicy resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>AccessPolicy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iot.AccessPolicy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>AccessPolicyId</code></td><td><code>string</code></td><td>The ID of the access policy.</td></tr><tr><td><code>AccessPolicyArn</code></td><td><code>string</code></td><td>The ARN of the access policy.</td></tr><tr><td><code>AccessPolicyIdentity</code></td><td><code>undefined</code></td><td>The identity for this access policy. Choose either a user or a group but not both.</td></tr><tr><td><code>AccessPolicyPermission</code></td><td><code>string</code></td><td>The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.</td></tr><tr><td><code>AccessPolicyResource</code></td><td><code>undefined</code></td><td>The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.</td></tr>
</tbody></table>