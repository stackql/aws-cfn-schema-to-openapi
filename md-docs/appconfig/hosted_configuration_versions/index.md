---
title: hosted_configuration_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_configuration_versions
  - appconfig
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>hosted_configuration_versions</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>hosted_configuration_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.appconfig.hosted_configuration_versions</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ConfigurationProfileId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ContentType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>LatestVersionNumber</code></td><td><code>number</code></td><td></td></tr><tr><td><code>Content</code></td><td><code>string</code></td><td></td></tr><tr><td><code>VersionLabel</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ApplicationId</code></td><td><code>string</code></td><td></td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.appconfig.hosted_configuration_versions
WHERE region = 'us-east-1'
</pre>