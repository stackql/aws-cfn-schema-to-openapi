---
title: experiment_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - experiment_templates
  - fis
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>experiment_templates</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>experiment_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>experiment_templates</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.fis.experiment_templates</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>id</code></td><td><code>undefined</code></td><td></td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
id
FROM awscc.fis.experiment_templates
WHERE region = 'us-east-1'
```

## Permissions

To operate on the <code>experiment_templates</code> resource, the following permissions are required:

### Create
```json
fis:CreateExperimentTemplate,
fis:TagResource,
iam:PassRole
```

### List
```json
fis:ListExperimentTemplates,
fis:ListTagsForResource
```

