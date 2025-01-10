---
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
  - cloudwatch
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes or gets a <code>dashboard</code> resource or lists <code>dashboards</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dashboards</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::CloudWatch::Dashboard</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.dashboards" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="dashboard_name" /></td><td><code>string</code></td><td>The name of the dashboard. The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically.</td></tr>
<tr><td><CopyableCode code="dashboard_body" /></td><td><code>string</code></td><td>The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html"><code>AWS::CloudWatch::Dashboard</code></a>.

## Methods

<table><tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DashboardBody, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody></table>

## `SELECT` examples
Gets all <code>dashboards</code> in a region.
```sql
SELECT
region,
dashboard_name,
dashboard_body
FROM aws.cloudwatch.dashboards
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>dashboard</code>.
```sql
SELECT
region,
dashboard_name,
dashboard_body
FROM aws.cloudwatch.dashboards
WHERE region = 'us-east-1' AND data__Identifier = '<DashboardName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>dashboard</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

<Tabs
    defaultValue="required"
    values={[
      { label: 'Required Properties', value: 'required', },
      { label: 'All Properties', value: 'all', },
      { label: 'Manifest', value: 'manifest', },
    ]
}>
<TabItem value="required">

```sql
/*+ create */
INSERT INTO aws.cloudwatch.dashboards (
 DashboardBody,
 region
)
SELECT 
'{{ DashboardBody }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO aws.cloudwatch.dashboards (
 DashboardName,
 DashboardBody,
 region
)
SELECT 
 '{{ DashboardName }}',
 '{{ DashboardBody }}',
 '{{ region }}';
```
</TabItem>
<TabItem value="manifest">

```yaml
version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: dashboard
    props:
      - name: DashboardName
        value: '{{ DashboardName }}'
      - name: DashboardBody
        value: '{{ DashboardBody }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM aws.cloudwatch.dashboards
WHERE data__Identifier = '<DashboardName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>dashboards</code> resource, the following permissions are required:

### Create
```json
cloudwatch:PutDashboard,
cloudwatch:GetDashboard
```

### Read
```json
cloudwatch:GetDashboard
```

### Update
```json
cloudwatch:PutDashboard
```

### Delete
```json
cloudwatch:DeleteDashboards,
cloudwatch:GetDashboard
```

### List
```json
cloudwatch:ListDashboards
```