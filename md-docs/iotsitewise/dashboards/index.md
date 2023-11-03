---
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
  - iotsitewise
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>dashboards</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dashboards</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.iotsitewise.dashboards</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ProjectId</code></td><td><code>string</code></td><td>The ID of the project in which to create the dashboard.</td></tr><tr><td><code>DashboardId</code></td><td><code>string</code></td><td>The ID of the dashboard.</td></tr><tr><td><code>DashboardName</code></td><td><code>string</code></td><td>A friendly name for the dashboard.</td></tr><tr><td><code>DashboardDescription</code></td><td><code>string</code></td><td>A description for the dashboard.</td></tr><tr><td><code>DashboardDefinition</code></td><td><code>string</code></td><td>The dashboard definition specified in a JSON literal.</td></tr><tr><td><code>DashboardArn</code></td><td><code>string</code></td><td>The ARN of the dashboard.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A list of key-value pairs that contain metadata for the dashboard.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.iotsitewise.dashboards
WHERE region = 'us-east-1'
</pre>