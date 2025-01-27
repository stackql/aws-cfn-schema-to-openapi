---
title: database_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - database_tags
  - lightsail
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

Expands all tag keys and values for <code>databases</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>database_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::Database</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.database_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="relational_database_name" /></td><td><code>string</code></td><td>The name to use for your new Lightsail database resource.</td></tr>
<tr><td><CopyableCode code="database_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="availability_zone" /></td><td><code>string</code></td><td>The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.</td></tr>
<tr><td><CopyableCode code="relational_database_blueprint_id" /></td><td><code>string</code></td><td>The blueprint ID for your new database. A blueprint describes the major engine version of a database.</td></tr>
<tr><td><CopyableCode code="relational_database_bundle_id" /></td><td><code>string</code></td><td>The bundle ID for your new database. A bundle describes the performance specifications for your database.</td></tr>
<tr><td><CopyableCode code="master_database_name" /></td><td><code>string</code></td><td>The name of the database to create when the Lightsail database resource is created. For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.</td></tr>
<tr><td><CopyableCode code="master_username" /></td><td><code>string</code></td><td>The name for the master user.</td></tr>
<tr><td><CopyableCode code="master_user_password" /></td><td><code>string</code></td><td>The password for the master user. The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.</td></tr>
<tr><td><CopyableCode code="preferred_backup_window" /></td><td><code>string</code></td><td>The daily time range during which automated backups are created for your new database if automated backups are enabled.</td></tr>
<tr><td><CopyableCode code="preferred_maintenance_window" /></td><td><code>string</code></td><td>The weekly time range during which system maintenance can occur on your new database.</td></tr>
<tr><td><CopyableCode code="publicly_accessible" /></td><td><code>boolean</code></td><td>Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.</td></tr>
<tr><td><CopyableCode code="ca_certificate_identifier" /></td><td><code>string</code></td><td>Indicates the certificate that needs to be associated with the database.</td></tr>
<tr><td><CopyableCode code="backup_retention" /></td><td><code>boolean</code></td><td>When true, enables automated backup retention for your database. Updates are applied during the next maintenance window because this can result in an outage.</td></tr>
<tr><td><CopyableCode code="rotate_master_user_password" /></td><td><code>boolean</code></td><td>When true, the master user password is changed to a new strong password generated by Lightsail. Use the get relational database master user password operation to get the new password.</td></tr>
<tr><td><CopyableCode code="relational_database_parameters" /></td><td><code>array</code></td><td>Update one or more parameters of the relational database.</td></tr>
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
Expands tags for all <code>databases</code> in a region.
```sql
SELECT
region,
relational_database_name,
database_arn,
availability_zone,
relational_database_blueprint_id,
relational_database_bundle_id,
master_database_name,
master_username,
master_user_password,
preferred_backup_window,
preferred_maintenance_window,
publicly_accessible,
ca_certificate_identifier,
backup_retention,
rotate_master_user_password,
relational_database_parameters,
tag_key,
tag_value
FROM aws.lightsail.database_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>database_tags</code> resource, see <a href="/providers/aws/lightsail/databases/#permissions"><code>databases</code></a>

