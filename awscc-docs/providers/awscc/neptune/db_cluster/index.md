---
title: db_cluster
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster
  - neptune
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>db_cluster</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>db_cluster</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>db_cluster</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.neptune.db_cluster</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>endpoint</code></td><td><code>string</code></td><td>The connection endpoint for the DB cluster. For example: `mystack-mydbcluster-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com`</td></tr>
<tr><td><code>read_endpoint</code></td><td><code>string</code></td><td>The reader endpoint for the DB cluster. For example: `mystack-mydbcluster-ro-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com`</td></tr>
<tr><td><code>cluster_resource_id</code></td><td><code>string</code></td><td>The resource id for the DB cluster. For example: `cluster-ABCD1234EFGH5678IJKL90MNOP`. The cluster ID uniquely identifies the cluster and is used in things like IAM authentication policies.</td></tr>
<tr><td><code>associated_roles</code></td><td><code>array</code></td><td>Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.</td></tr>
<tr><td><code>availability_zones</code></td><td><code>array</code></td><td>Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.</td></tr>
<tr><td><code>backup_retention_period</code></td><td><code>integer</code></td><td>Specifies the number of days for which automatic DB snapshots are retained.</td></tr>
<tr><td><code>copy_tags_to_snapshot</code></td><td><code>boolean</code></td><td>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default behaviour is not to copy them.</td></tr>
<tr><td><code>db_cluster_identifier</code></td><td><code>string</code></td><td>The DB cluster identifier. Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster stored as a lowercase string.</td></tr>
<tr><td><code>db_cluster_parameter_group_name</code></td><td><code>string</code></td><td>Provides the name of the DB cluster parameter group.</td></tr>
<tr><td><code>db_instance_parameter_group_name</code></td><td><code>string</code></td><td>The name of the DB parameter group to apply to all instances of the DB cluster. Used only in case of a major EngineVersion upgrade request.</td></tr>
<tr><td><code>db_port</code></td><td><code>integer</code></td><td>The port number on which the DB instances in the DB cluster accept connections. &lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If not specified, the default port used is `8182`. &lt;br&#x2F;&gt;&lt;br&#x2F;&gt;Note: `Port` property will soon be deprecated from this resource. Please update existing templates to rename it with new property `DBPort` having same functionalities.</td></tr>
<tr><td><code>db_subnet_group_name</code></td><td><code>string</code></td><td>Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.</td></tr>
<tr><td><code>deletion_protection</code></td><td><code>boolean</code></td><td>Indicates whether or not the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled.</td></tr>
<tr><td><code>enable_cloudwatch_logs_exports</code></td><td><code>array</code></td><td>Specifies a list of log types that are enabled for export to CloudWatch Logs.</td></tr>
<tr><td><code>engine_version</code></td><td><code>string</code></td><td>Indicates the database engine version.</td></tr>
<tr><td><code>iam_auth_enabled</code></td><td><code>boolean</code></td><td>True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</td></tr>
<tr><td><code>kms_key_id</code></td><td><code>string</code></td><td>If `StorageEncrypted` is true, the Amazon KMS key identifier for the encrypted DB cluster.</td></tr>
<tr><td><code>port</code></td><td><code>string</code></td><td>The port number on which the DB cluster accepts connections. For example: `8182`.</td></tr>
<tr><td><code>preferred_backup_window</code></td><td><code>string</code></td><td>Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.</td></tr>
<tr><td><code>preferred_maintenance_window</code></td><td><code>string</code></td><td>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</td></tr>
<tr><td><code>restore_to_time</code></td><td><code>string</code></td><td>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</td></tr>
<tr><td><code>restore_type</code></td><td><code>string</code></td><td>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</td></tr>
<tr><td><code>serverless_scaling_configuration</code></td><td><code>object</code></td><td>Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster.</td></tr>
<tr><td><code>snapshot_identifier</code></td><td><code>string</code></td><td>Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;After you restore a DB cluster using a SnapshotIdentifier, you must specify the same SnapshotIdentifier for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;However, if you don't specify the SnapshotIdentifier, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the SnapshotIdentifier, and the original DB cluster is deleted.</td></tr>
<tr><td><code>source_db_cluster_identifier</code></td><td><code>string</code></td><td>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</td></tr>
<tr><td><code>storage_encrypted</code></td><td><code>boolean</code></td><td>Indicates whether the DB cluster is encrypted.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If you specify the `DBClusterIdentifier`, `DBSnapshotIdentifier`, or `SourceDBInstanceIdentifier` property, don't specify this property. The value is inherited from the cluster, snapshot, or source DB instance. If you specify the KmsKeyId property, you must enable encryption.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If you specify the KmsKeyId, you must enable encryption by setting StorageEncrypted to true.</td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>The tags assigned to this cluster.</td></tr>
<tr><td><code>use_latest_restorable_time</code></td><td><code>boolean</code></td><td>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.&lt;br&#x2F;&gt;&lt;br&#x2F;&gt;If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</td></tr>
<tr><td><code>vpc_security_group_ids</code></td><td><code>array</code></td><td>Provides a list of VPC security groups that the DB cluster belongs to.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
endpoint,
read_endpoint,
cluster_resource_id,
associated_roles,
availability_zones,
backup_retention_period,
copy_tags_to_snapshot,
db_cluster_identifier,
db_cluster_parameter_group_name,
db_instance_parameter_group_name,
db_port,
db_subnet_group_name,
deletion_protection,
enable_cloudwatch_logs_exports,
engine_version,
iam_auth_enabled,
kms_key_id,
port,
preferred_backup_window,
preferred_maintenance_window,
restore_to_time,
restore_type,
serverless_scaling_configuration,
snapshot_identifier,
source_db_cluster_identifier,
storage_encrypted,
tags,
use_latest_restorable_time,
vpc_security_group_ids
FROM awscc.neptune.db_cluster
WHERE data__Identifier = '<DBClusterIdentifier>';
```

## Permissions

To operate on the <code>db_cluster</code> resource, the following permissions are required:

### Read
```json
rds:DescribeDBClusters,
rds:ListTagsForResource,
kms:*
```

### Update
```json
ec2:DescribeSecurityGroups,
iam:PassRole,
rds:AddRoleToDBCluster,
rds:AddTagsToResource,
rds:DescribeDBClusters,
rds:DescribeDBInstances,
rds:DescribeDBSubnetGroups,
rds:DescribeGlobalClusters,
rds:ListTagsForResource,
rds:ModifyDBCluster,
rds:ModifyDBInstance,
rds:RemoveFromGlobalCluster,
rds:RemoveRoleFromDBCluster,
rds:RemoveTagsFromResource,
kms:*
```

### Delete
```json
rds:DeleteDBCluster,
rds:DeleteDBInstance,
rds:DescribeDBClusters,
rds:DescribeGlobalClusters,
rds:ListTagsForResource,
rds:RemoveFromGlobalCluster,
rds:CreateDBClusterSnapshot,
kms:*
```

