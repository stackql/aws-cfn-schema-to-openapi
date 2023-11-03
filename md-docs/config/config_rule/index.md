---
title: config_rule
hide_title: false
hide_table_of_contents: false
keywords:
  - config_rule
  - config
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>config_rule</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>config_rule</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.config.config_rule</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ConfigRuleId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Scope</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ComplianceType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ConfigRuleName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>MaximumExecutionFrequency</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Source</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>InputParameters</code></td><td><code>object</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.config.config_rule
WHERE region = 'us-east-1' AND data__Identifier = '<ConfigRuleId>'
</pre>