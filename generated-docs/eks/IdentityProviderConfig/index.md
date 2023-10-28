---
title: IdentityProviderConfig
hide_title: false
hide_table_of_contents: false
keywords:
  - IdentityProviderConfig
  - eks
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The IdentityProviderConfig resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>IdentityProviderConfig</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.eks.IdentityProviderConfig</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ClusterName</code></td><td><code>string</code></td><td>The name of the identity provider configuration.</td></tr><tr><td><code>Type</code></td><td><code>string</code></td><td>The type of the identity provider configuration.</td></tr><tr><td><code>IdentityProviderConfigName</code></td><td><code>string</code></td><td>The name of the OIDC provider configuration.</td></tr><tr><td><code>Oidc</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr><tr><td><code>IdentityProviderConfigArn</code></td><td><code>string</code></td><td>The ARN of the configuration.</td></tr>
</tbody></table>