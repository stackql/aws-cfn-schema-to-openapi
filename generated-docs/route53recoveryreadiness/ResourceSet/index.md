---
title: ResourceSet
hide_title: false
hide_table_of_contents: false
keywords:
  - ResourceSet
  - route53recoveryreadiness
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The ResourceSet resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>route53recoveryreadiness.ResourceSet</b></span><br />
<span>resource id:&nbsp;<b>route53recoveryreadiness:ResourceSet</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>route53recoveryreadiness.ResourceSet</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>route53recoveryreadiness:ResourceSet</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ResourceSetName</code></td><td><code>string</code></td><td>The name of the resource set to create.</td></tr><tr><td><code>Resources</code></td><td><code>array</code></td><td>A list of resource objects in the resource set.</td></tr><tr><td><code>ResourceSetArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the resource set.</td></tr><tr><td><code>ResourceSetType</code></td><td><code>string</code></td><td>The resource type of the resources in the resource set. Enter one of the following values for resource type: 

AWS: :AutoScaling: :AutoScalingGroup, AWS: :CloudWatch: :Alarm, AWS: :EC2: :CustomerGateway, AWS: :DynamoDB: :Table, AWS: :EC2: :Volume, AWS: :ElasticLoadBalancing: :LoadBalancer, AWS: :ElasticLoadBalancingV2: :LoadBalancer, AWS: :MSK: :Cluster, AWS: :RDS: :DBCluster, AWS: :Route53: :HealthCheck, AWS: :SQS: :Queue, AWS: :SNS: :Topic, AWS: :SNS: :Subscription, AWS: :EC2: :VPC, AWS: :EC2: :VPNConnection, AWS: :EC2: :VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>A tag to associate with the parameters for a resource set.</td></tr>
</tbody></table>