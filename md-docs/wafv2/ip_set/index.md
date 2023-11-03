---
title: ip_set
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_set
  - wafv2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>ip_set</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ip_set</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.wafv2.ip_set</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Scope</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>IPAddressVersion</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Addresses</code></td><td><code>array</code></td><td>List of IPAddresses.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.wafv2.ip_set
WHERE region = 'us-east-1' AND data__Identifier = '<Name>' AND data__Identifier = '<Id>' AND data__Identifier = '<Scope>'
</pre>