---
title: simulation_application_version
hide_title: false
hide_table_of_contents: false
keywords:
  - simulation_application_version
  - robomaker
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>simulation_application_version</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>simulation_application_version</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>simulation_application_version</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.robomaker.simulation_application_version</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>application</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>current_revision_id</code></td><td><code>string</code></td><td>The revision ID of robot application.</td></tr>
<tr><td><code>application_version</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
application,
current_revision_id,
application_version,
arn
FROM awscc.robomaker.simulation_application_version
WHERE data__Identifier = '<Arn>';
```

## Permissions

To operate on the <code>simulation_application_version</code> resource, the following permissions are required:

### Delete
```json
robomaker:DeleteSimulationApplication,
robomaker:DescribeSimulationApplication
```

### Read
```json
robomaker:DescribeSimulationApplication
```

