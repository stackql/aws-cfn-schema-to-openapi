---
title: location_hdfs_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - location_hdfs_list_only
  - datasync
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

Lists <code>location_hdfs</code> in a region or regions, for all properties use <a href="/providers/aws/serviceName/location_hdfs/"><code>location_hdfs</code></a>

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>location_hdfs_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::LocationHDFS.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_hdfs_list_only" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name_nodes" /></td><td><code>array</code></td><td>An array of Name Node(s) of the HDFS location.</td></tr>
<tr><td><CopyableCode code="block_size" /></td><td><code>integer</code></td><td>Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster.</td></tr>
<tr><td><CopyableCode code="replication_factor" /></td><td><code>integer</code></td><td>Number of copies of each block that exists inside the HDFS cluster.</td></tr>
<tr><td><CopyableCode code="kms_key_provider_uri" /></td><td><code>string</code></td><td>The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored.</td></tr>
<tr><td><CopyableCode code="qop_configuration" /></td><td><code>object</code></td><td>Configuration information for RPC Protection and Data Transfer Protection. These parameters can be set to AUTHENTICATION, INTEGRITY, or PRIVACY. The default value is PRIVACY.</td></tr>
<tr><td><CopyableCode code="authentication_type" /></td><td><code>string</code></td><td>The authentication mode used to determine identity of user.</td></tr>
<tr><td><CopyableCode code="simple_user" /></td><td><code>string</code></td><td>The user name that has read and write permissions on the specified HDFS cluster.</td></tr>
<tr><td><CopyableCode code="kerberos_principal" /></td><td><code>string</code></td><td>The unique identity, or principal, to which Kerberos can assign tickets.</td></tr>
<tr><td><CopyableCode code="kerberos_keytab" /></td><td><code>string</code></td><td>The Base64 string representation of the Keytab file.</td></tr>
<tr><td><CopyableCode code="kerberos_krb5_conf" /></td><td><code>string</code></td><td>The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><CopyableCode code="agent_arns" /></td><td><code>array</code></td><td>ARN(s) of the agent(s) to use for an HDFS location.</td></tr>
<tr><td><CopyableCode code="subdirectory" /></td><td><code>string</code></td><td>The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination.</td></tr>
<tr><td><CopyableCode code="location_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the HDFS location.</td></tr>
<tr><td><CopyableCode code="location_uri" /></td><td><code>string</code></td><td>The URL of the HDFS location that was described.</td></tr>
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
Lists all <code>location_hdfs</code> in a region.
```sql
SELECT
region,
location_arn
FROM aws.datasync.location_hdfs_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>location_hdfs_list_only</code> resource, see <a href="/providers/aws/datasync/location_hdfs/#permissions"><code>location_hdfs</code></a>


