---
title: configuration_set_event_destination
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_set_event_destination
  - pinpointemail
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>configuration_set_event_destination</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>configuration_set_event_destination</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>configuration_set_event_destination</td></tr>
<tr><td><b>Id</b></td><td><code>aws.pinpointemail.configuration_set_event_destination</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>event_destination_name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>configuration_set_name</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>event_destination</code></td><td><code>object</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
id,
event_destination_name,
configuration_set_name,
event_destination
FROM aws.pinpointemail.configuration_set_event_destination
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Id&gt;'
```