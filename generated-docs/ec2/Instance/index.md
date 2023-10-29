---
title: Instance
hide_title: false
hide_table_of_contents: false
keywords:
  - Instance
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
The Instance resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>Instance</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.Instance</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Tenancy</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SecurityGroups</code></td><td><code>array</code></td><td></td></tr><tr><td><code>PrivateDnsName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PrivateIpAddress</code></td><td><code>string</code></td><td></td></tr><tr><td><code>UserData</code></td><td><code>string</code></td><td></td></tr><tr><td><code>BlockDeviceMappings</code></td><td><code>array</code></td><td></td></tr><tr><td><code>IamInstanceProfile</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Ipv6Addresses</code></td><td><code>array</code></td><td></td></tr><tr><td><code>KernelId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SubnetId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>EbsOptimized</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>PropagateTagsToVolumeOnCreation</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>ElasticGpuSpecifications</code></td><td><code>array</code></td><td></td></tr><tr><td><code>ElasticInferenceAccelerators</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Volumes</code></td><td><code>array</code></td><td></td></tr><tr><td><code>PrivateIp</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Ipv6AddressCount</code></td><td><code>integer</code></td><td></td></tr><tr><td><code>LaunchTemplate</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>EnclaveOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>NetworkInterfaces</code></td><td><code>array</code></td><td></td></tr><tr><td><code>ImageId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>InstanceType</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Monitoring</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td></td></tr><tr><td><code>AdditionalInfo</code></td><td><code>string</code></td><td></td></tr><tr><td><code>HibernationOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>LicenseSpecifications</code></td><td><code>array</code></td><td></td></tr><tr><td><code>PublicIp</code></td><td><code>string</code></td><td></td></tr><tr><td><code>InstanceInitiatedShutdownBehavior</code></td><td><code>string</code></td><td></td></tr><tr><td><code>CpuOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>AvailabilityZone</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PrivateDnsNameOptions</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>HostId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>HostResourceGroupArn</code></td><td><code>string</code></td><td></td></tr><tr><td><code>PublicDnsName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SecurityGroupIds</code></td><td><code>array</code></td><td></td></tr><tr><td><code>DisableApiTermination</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>KeyName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>RamdiskId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SourceDestCheck</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>PlacementGroupName</code></td><td><code>string</code></td><td></td></tr><tr><td><code>SsmAssociations</code></td><td><code>array</code></td><td></td></tr><tr><td><code>Affinity</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Id</code></td><td><code>string</code></td><td></td></tr><tr><td><code>CreditSpecification</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>