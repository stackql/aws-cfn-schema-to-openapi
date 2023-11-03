---
title: egress_only_internet_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - egress_only_internet_gateways
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>egress_only_internet_gateways</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>egress_only_internet_gateways</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.egress_only_internet_gateways</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td>Service Generated ID of the EgressOnlyInternetGateway</td></tr><tr><td><code>VpcId</code></td><td><code>string</code></td><td>The ID of the VPC for which to create the egress-only internet gateway.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.egress_only_internet_gateways
WHERE region = 'us-east-1'
</pre>
