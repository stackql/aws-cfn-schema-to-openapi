---
title: network_insights_access_scope_analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_access_scope_analysis
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
Gets an individual <code>network_insights_access_scope_analysis</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>network_insights_access_scope_analysis</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.network_insights_access_scope_analysis</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>NetworkInsightsAccessScopeAnalysisId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>NetworkInsightsAccessScopeAnalysisArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>NetworkInsightsAccessScopeId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td></td></tr><tr><td><code>StatusMessage</code></td><td><code>string</code></td><td></td></tr><tr><td><code>StartDate</code></td><td><code>string</code></td><td></td></tr><tr><td><code>EndDate</code></td><td><code>string</code></td><td></td></tr><tr><td><code>FindingsFound</code></td><td><code>string</code></td><td></td></tr><tr><td><code>AnalyzedEniCount</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.ec2.network_insights_access_scope_analysis
WHERE region = 'us-east-1' AND data__Identifier = '<NetworkInsightsAccessScopeAnalysisId>'
</pre>
