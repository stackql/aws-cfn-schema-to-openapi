---
title: network_insights_access_scope
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_access_scope
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
Gets an individual <code>network_insights_access_scope</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>network_insights_access_scope</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.network_insights_access_scope</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>NetworkInsightsAccessScopeId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>NetworkInsightsAccessScopeArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>CreatedDate</code></td><td><code>string</code></td><td></td></tr><tr><td><code>UpdatedDate</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr><tr><td><code>MatchPaths</code></td><td><code>array</code></td><td></td></tr><tr><td><code>ExcludePaths</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.network_insights_access_scope
WHERE region = 'us-east-1' AND data__Identifier = '<NetworkInsightsAccessScopeId>'
</pre>
