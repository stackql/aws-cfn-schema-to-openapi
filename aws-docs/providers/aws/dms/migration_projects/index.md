---
title: migration_projects
hide_title: false
hide_table_of_contents: false
keywords:
  - migration_projects
  - dms
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>migration_projects</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>migration_projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>migration_projects</td></tr>
<tr><td><b>Id</b></td><td><code>aws.dms.migration_projects</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>migration_project_arn</code></td><td><code>string</code></td><td>The property describes an ARN of the migration project.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Permissions

To operate on the <code>migration_projects</code> resource, the following permissions are required:

### Create
<pre>
dms:CreateMigrationProject,
dms:ListMigrationProjects,
dms:DescribeMigrationProjects,
dms:AddTagsToResource,
dms:ListTagsForResource,
iam:PassRole</pre>

### List
<pre>
dms:ListMigrationProjects,
dms:DescribeMigrationProjects,
dms:ListTagsForResource</pre>


## Example
```sql
SELECT
region,
migration_project_arn
FROM aws.dms.migration_projects
WHERE region = 'us-east-1'
```