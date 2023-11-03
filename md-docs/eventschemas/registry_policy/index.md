---
title: registry_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_policy
  - eventschemas
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>registry_policy</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>registry_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.eventschemas.registry_policy</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Policy</code></td><td><code>object</code></td><td></td></tr><tr><td><code>RegistryName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>RevisionId</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.eventschemas.registry_policy
WHERE region = 'us-east-1' AND data__Identifier = '<Id>'
</pre>