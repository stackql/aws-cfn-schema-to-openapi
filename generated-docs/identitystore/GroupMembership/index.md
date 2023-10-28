---
title: GroupMembership
hide_title: false
hide_table_of_contents: false
keywords:
  - GroupMembership
  - identitystore
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The GroupMembership resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>GroupMembership</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.identitystore.GroupMembership</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>GroupId</code></td><td><code>string</code></td><td>The unique identifier for a group in the identity store.</td></tr><tr><td><code>IdentityStoreId</code></td><td><code>string</code></td><td>The globally unique identifier for the identity store.</td></tr><tr><td><code>MemberId</code></td><td><code>undefined</code></td><td>An object containing the identifier of a group member.</td></tr><tr><td><code>MembershipId</code></td><td><code>string</code></td><td>The identifier for a GroupMembership in the identity store.</td></tr>
</tbody></table>