---
title: transit_gateway_multicast_group_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_group_sources
  - ec2
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

Creates, updates, deletes or gets a <code>transit_gateway_multicast_group_source</code> resource or lists <code>transit_gateway_multicast_group_sources</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_multicast_group_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::TransitGatewayMulticastGroupSource registers and deregisters members and sources (network interfaces) with the transit gateway multicast group</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_multicast_group_sources" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="group_ip_address" /></td><td><code>string</code></td><td>The IP address assigned to the transit gateway multicast group.</td></tr>
<tr><td><CopyableCode code="transit_gateway_attachment_id" /></td><td><code>string</code></td><td>The ID of the transit gateway attachment.</td></tr>
<tr><td><CopyableCode code="transit_gateway_multicast_domain_id" /></td><td><code>string</code></td><td>The ID of the transit gateway multicast domain.</td></tr>
<tr><td><CopyableCode code="subnet_id" /></td><td><code>string</code></td><td>The ID of the subnet.</td></tr>
<tr><td><CopyableCode code="resource_id" /></td><td><code>string</code></td><td>The ID of the resource.</td></tr>
<tr><td><CopyableCode code="resource_type" /></td><td><code>string</code></td><td>The type of resource, for example a VPC attachment.</td></tr>
<tr><td><CopyableCode code="network_interface_id" /></td><td><code>string</code></td><td>The ID of the transit gateway attachment.</td></tr>
<tr><td><CopyableCode code="group_member" /></td><td><code>boolean</code></td><td>Indicates that the resource is a transit gateway multicast group member.</td></tr>
<tr><td><CopyableCode code="group_source" /></td><td><code>boolean</code></td><td>Indicates that the resource is a transit gateway multicast group member.</td></tr>
<tr><td><CopyableCode code="source_type" /></td><td><code>string</code></td><td>The source type.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>
</tbody></table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html"><code>AWS::EC2::TransitGatewayMulticastGroupSource</code></a>.

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
    <td><CopyableCode code="TransitGatewayMulticastDomainId, NetworkInterfaceId, GroupIpAddress, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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
Gets all <code>transit_gateway_multicast_group_sources</code> in a region.
```sql
SELECT
region,
group_ip_address,
transit_gateway_attachment_id,
transit_gateway_multicast_domain_id,
subnet_id,
resource_id,
resource_type,
network_interface_id,
group_member,
group_source,
source_type
FROM aws.ec2.transit_gateway_multicast_group_sources
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>transit_gateway_multicast_group_source</code>.
```sql
SELECT
region,
group_ip_address,
transit_gateway_attachment_id,
transit_gateway_multicast_domain_id,
subnet_id,
resource_id,
resource_type,
network_interface_id,
group_member,
group_source,
source_type
FROM aws.ec2.transit_gateway_multicast_group_sources
WHERE region = 'us-east-1' AND data__Identifier = '<TransitGatewayMulticastDomainId>|<GroupIpAddress>|<NetworkInterfaceId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_multicast_group_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO aws.ec2.transit_gateway_multicast_group_sources (
 GroupIpAddress,
 TransitGatewayMulticastDomainId,
 NetworkInterfaceId,
 region
)
SELECT 
'{{ GroupIpAddress }}',
 '{{ TransitGatewayMulticastDomainId }}',
 '{{ NetworkInterfaceId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO aws.ec2.transit_gateway_multicast_group_sources (
 GroupIpAddress,
 TransitGatewayMulticastDomainId,
 NetworkInterfaceId,
 region
)
SELECT 
 '{{ GroupIpAddress }}',
 '{{ TransitGatewayMulticastDomainId }}',
 '{{ NetworkInterfaceId }}',
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
  - name: transit_gateway_multicast_group_source
    props:
      - name: GroupIpAddress
        value: '{{ GroupIpAddress }}'
      - name: TransitGatewayMulticastDomainId
        value: '{{ TransitGatewayMulticastDomainId }}'
      - name: NetworkInterfaceId
        value: '{{ NetworkInterfaceId }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM aws.ec2.transit_gateway_multicast_group_sources
WHERE data__Identifier = '<TransitGatewayMulticastDomainId|GroupIpAddress|NetworkInterfaceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_multicast_group_sources</code> resource, the following permissions are required:

### Create
```json
ec2:RegisterTransitGatewayMulticastGroupSources,
ec2:SearchTransitGatewayMulticastGroups
```

### Read
```json
ec2:SearchTransitGatewayMulticastGroups
```

### Delete
```json
ec2:DeregisterTransitGatewayMulticastGroupSources,
ec2:SearchTransitGatewayMulticastGroups
```

### List
```json
ec2:SearchTransitGatewayMulticastGroups
```
