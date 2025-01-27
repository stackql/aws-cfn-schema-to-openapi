---
title: container_fleet_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - container_fleet_tags
  - gamelift
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

Expands all tag keys and values for <code>container_fleets</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>container_fleet_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::ContainerFleet resource creates an Amazon GameLift (GameLift) container fleet to host game servers.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.container_fleet_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="fleet_id" /></td><td><code>string</code></td><td>Unique fleet ID</td></tr>
<tr><td><CopyableCode code="fleet_role_arn" /></td><td><code>string</code></td><td>A unique identifier for an AWS IAM role that manages access to your AWS services. Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>A human-readable description of a fleet.</td></tr>
<tr><td><CopyableCode code="game_server_container_group_definition_name" /></td><td><code>string</code></td><td>The name of the container group definition that will be created per game server. You must specify GAME_SERVER container group. You have the option to also specify one PER_INSTANCE container group.</td></tr>
<tr><td><CopyableCode code="game_server_container_group_definition_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the game server container group definition. This field will be empty if GameServerContainerGroupDefinitionName is not specified.</td></tr>
<tr><td><CopyableCode code="per_instance_container_group_definition_name" /></td><td><code>string</code></td><td>The name of the container group definition that will be created per instance. This field is optional if you specify GameServerContainerGroupDefinitionName.</td></tr>
<tr><td><CopyableCode code="per_instance_container_group_definition_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the per instance container group definition. This field will be empty if PerInstanceContainerGroupDefinitionName is not specified.</td></tr>
<tr><td><CopyableCode code="instance_connection_port_range" /></td><td><code>object</code></td><td>Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.</td></tr>
<tr><td><CopyableCode code="instance_inbound_permissions" /></td><td><code>array</code></td><td>A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.</td></tr>
<tr><td><CopyableCode code="game_server_container_groups_per_instance" /></td><td><code>integer</code></td><td>The number of desired game server container groups per instance, a number between 1-5000.</td></tr>
<tr><td><CopyableCode code="maximum_game_server_container_groups_per_instance" /></td><td><code>integer</code></td><td>The maximum number of game server container groups per instance, a number between 1-5000.</td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The current status of the container fleet.</td></tr>
<tr><td><CopyableCode code="deployment_details" /></td><td><code>object</code></td><td>Provides information about the last deployment ID and its status.</td></tr>
<tr><td><CopyableCode code="deployment_configuration" /></td><td><code>object</code></td><td>Provides details about how to drain old tasks and replace them with new updated tasks.</td></tr>
<tr><td><CopyableCode code="instance_type" /></td><td><code>string</code></td><td>The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.</td></tr>
<tr><td><CopyableCode code="billing_type" /></td><td><code>string</code></td><td>Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.</td></tr>
<tr><td><CopyableCode code="locations" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="scaling_policies" /></td><td><code>array</code></td><td>A list of rules that control how a fleet is scaled.</td></tr>
<tr><td><CopyableCode code="metric_groups" /></td><td><code>array</code></td><td>The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.</td></tr>
<tr><td><CopyableCode code="new_game_session_protection_policy" /></td><td><code>string</code></td><td>A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.</td></tr>
<tr><td><CopyableCode code="game_session_creation_limit_policy" /></td><td><code>object</code></td><td>A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.</td></tr>
<tr><td><CopyableCode code="log_configuration" /></td><td><code>object</code></td><td>A policy the location and provider of logs from the fleet.</td></tr>
<tr><td><CopyableCode code="fleet_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift container fleet resource and uniquely identifies it across all AWS Regions.</td></tr>
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
Expands tags for all <code>container_fleets</code> in a region.
```sql
SELECT
region,
fleet_id,
fleet_role_arn,
description,
game_server_container_group_definition_name,
game_server_container_group_definition_arn,
per_instance_container_group_definition_name,
per_instance_container_group_definition_arn,
instance_connection_port_range,
instance_inbound_permissions,
game_server_container_groups_per_instance,
maximum_game_server_container_groups_per_instance,
creation_time,
status,
deployment_details,
deployment_configuration,
instance_type,
billing_type,
locations,
scaling_policies,
metric_groups,
new_game_session_protection_policy,
game_session_creation_limit_policy,
log_configuration,
fleet_arn,
tag_key,
tag_value
FROM aws.gamelift.container_fleet_tags
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>container_fleet_tags</code> resource, see <a href="/providers/aws/gamelift/container_fleets/#permissions"><code>container_fleets</code></a>

