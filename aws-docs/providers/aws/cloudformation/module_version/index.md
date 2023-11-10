---
title: module_version
hide_title: false
hide_table_of_contents: false
keywords:
  - module_version
  - cloudformation
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>module_version</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>module_version</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>module_version</td></tr>
<tr><td><b>Id</b></td><td><code>aws.cloudformation.module_version</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the module.</td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td>The description of the registered module.</td></tr>
<tr><td><code>documentation_url</code></td><td><code>string</code></td><td>The URL of a page providing detailed documentation for this module.</td></tr>
<tr><td><code>module_name</code></td><td><code>string</code></td><td>The name of the module being registered.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;Recommended module naming pattern: company_or_organization::service::type::MODULE.</td></tr>
<tr><td><code>module_package</code></td><td><code>string</code></td><td>The url to the S3 bucket containing the schema and template fragment for the module you want to register.</td></tr>
<tr><td><code>is_default_version</code></td><td><code>boolean</code></td><td>Indicator of whether this module version is the current default version</td></tr>
<tr><td><code>schema</code></td><td><code>string</code></td><td>The schema defining input parameters to and resources generated by the module.</td></tr>
<tr><td><code>time_created</code></td><td><code>string</code></td><td>The time that the specified module version was registered.</td></tr>
<tr><td><code>version_id</code></td><td><code>string</code></td><td>The version ID of the module represented by this module instance.</td></tr>
<tr><td><code>visibility</code></td><td><code>string</code></td><td>The scope at which the type is visible and usable in CloudFormation operations.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;The only allowed value at present is:&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;PRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
arn,
description,
documentation_url,
module_name,
module_package,
is_default_version,
schema,
time_created,
version_id,
visibility
FROM aws.cloudformation.module_version
WHERE region = 'us-east-1'
AND data__Identifier = '&lt;Arn&gt;'
```