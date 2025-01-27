---
title: aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - aliases
  - lambda
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

Creates, updates, deletes or gets an <code>alias</code> resource or lists <code>aliases</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lambda::Alias</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.aliases" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="function_name" /></td><td><code>string</code></td><td>The name of the Lambda function.</td></tr>
<tr><td><CopyableCode code="alias_arn" /></td><td><code>string</code></td><td>Lambda Alias ARN generated by the service.</td></tr>
<tr><td><CopyableCode code="provisioned_concurrency_config" /></td><td><code>object</code></td><td>Specifies a provisioned concurrency configuration for a function's alias.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>A description of the alias.</td></tr>
<tr><td><CopyableCode code="function_version" /></td><td><code>string</code></td><td>The function version that the alias invokes.</td></tr>
<tr><td><CopyableCode code="routing_config" /></td><td><code>object</code></td><td>The routing configuration of the alias.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the alias.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html"><code>AWS::Lambda::Alias</code></a>.

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
    <td><CopyableCode code="FunctionName, FunctionVersion, Name, region" /></td>
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
Gets all <code>aliases</code> in a region.
```sql
SELECT
region,
function_name,
alias_arn,
provisioned_concurrency_config,
description,
function_version,
routing_config,
name
FROM aws.lambda.aliases
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>alias</code>.
```sql
SELECT
region,
function_name,
alias_arn,
provisioned_concurrency_config,
description,
function_version,
routing_config,
name
FROM aws.lambda.aliases
WHERE region = 'us-east-1' AND data__Identifier = '<AliasArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>alias</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO aws.lambda.aliases (
 FunctionName,
 FunctionVersion,
 Name,
 region
)
SELECT 
'{{ FunctionName }}',
 '{{ FunctionVersion }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO aws.lambda.aliases (
 FunctionName,
 ProvisionedConcurrencyConfig,
 Description,
 FunctionVersion,
 RoutingConfig,
 Name,
 region
)
SELECT 
 '{{ FunctionName }}',
 '{{ ProvisionedConcurrencyConfig }}',
 '{{ Description }}',
 '{{ FunctionVersion }}',
 '{{ RoutingConfig }}',
 '{{ Name }}',
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
  - name: alias
    props:
      - name: FunctionName
        value: '{{ FunctionName }}'
      - name: ProvisionedConcurrencyConfig
        value:
          ProvisionedConcurrentExecutions: '{{ ProvisionedConcurrentExecutions }}'
      - name: Description
        value: '{{ Description }}'
      - name: FunctionVersion
        value: '{{ FunctionVersion }}'
      - name: RoutingConfig
        value:
          AdditionalVersionWeights:
            - FunctionWeight: null
              FunctionVersion: '{{ FunctionVersion }}'
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM aws.lambda.aliases
WHERE data__Identifier = '<AliasArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>aliases</code> resource, the following permissions are required:

### Create
```json
lambda:CreateAlias,
lambda:PutProvisionedConcurrencyConfig,
lambda:GetProvisionedConcurrencyConfig
```

### Read
```json
lambda:GetAlias,
lambda:GetProvisionedConcurrencyConfig
```

### Delete
```json
lambda:DeleteAlias,
lambda:GetAlias
```

### List
```json
lambda:ListAliases
```

### Update
```json
lambda:UpdateAlias,
lambda:GetAlias,
lambda:PutProvisionedConcurrencyConfig,
lambda:DeleteProvisionedConcurrencyConfig,
lambda:GetProvisionedConcurrencyConfig,
codedeploy:CreateDeployment,
codedeploy:GetDeployment,
codedeploy:GetDeploymentGroup,
codedeploy:GetDeploymentConfig,
codedeploy:StopDeployment
```
