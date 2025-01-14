---
title: connection_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_tags
  - codeconnections
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

Expands all tag keys and values for <code>connections</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connection_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Schema for AWS::CodeConnections::Connection resource which can be used to connect external source providers with other AWS services (i.e. AWS CodePipeline)</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeconnections.connection_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="connection_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection reference when the connection is shared between AWS services.</td></tr>
<tr><td><CopyableCode code="connection_name" /></td><td><code>string</code></td><td>The name of the connection. Connection names must be unique in an AWS user account.</td></tr>
<tr><td><CopyableCode code="connection_status" /></td><td><code>string</code></td><td>The current status of the connection.</td></tr>
<tr><td><CopyableCode code="owner_account_id" /></td><td><code>string</code></td><td>The name of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.</td></tr>
<tr><td><CopyableCode code="provider_type" /></td><td><code>string</code></td><td>The name of the external provider where your third-party code repository is configured. You must specify either a ProviderType or a HostArn.</td></tr>
<tr><td><CopyableCode code="host_arn" /></td><td><code>string</code></td><td>The host arn configured to represent the infrastructure where your third-party provider is installed. You must specify either a ProviderType or a HostArn.</td></tr>
<tr><td><CopyableCode code="tag_key" /></td><td><code>string</code></td><td>Tag key.</td></tr>
<tr><td><CopyableCode code="tag_value" /></td><td><code>string</code></td><td>Tag value.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

## Methods

<table><tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>

## `SELECT` examples
Expands tags for all <code>connections</code> in a region.
```sql
SELECT
region,
connection_arn,
connection_name,
connection_status,
owner_account_id,
provider_type,
host_arn,
tag_key,
tag_value
FROM aws.codeconnections.connection_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>connection_tags</code> resource, see <a href="/providers/aws/codeconnections/connections/#permissions"><code>connections</code></a>

