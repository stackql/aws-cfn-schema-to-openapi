---
title: ResolverRuleAssociation
hide_title: false
hide_table_of_contents: false
keywords:
  - ResolverRuleAssociation
  - route53
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The ResolverRuleAssociation resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ResolverRuleAssociation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.route53.ResolverRuleAssociation</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>VPCId</code></td><td><code>string</code></td><td>The ID of the VPC that you associated the Resolver rule with.</td></tr><tr><td><code>ResolverRuleId</code></td><td><code>string</code></td><td>The ID of the Resolver rule that you associated with the VPC that is specified by VPCId.</td></tr><tr><td><code>ResolverRuleAssociationId</code></td><td><code>string</code></td><td>Primary Identifier for Resolver Rule Association</td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td>The name of an association between a Resolver rule and a VPC.</td></tr>
</tbody></table>