---
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
  - s3
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>buckets</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>buckets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.s3.buckets</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>AccelerateConfiguration</code></td><td><code>undefined</code></td><td>Configuration for the transfer acceleration state.</td></tr><tr><td><code>AccessControl</code></td><td><code>string</code></td><td>A canned access control list (ACL) that grants predefined permissions to the bucket.</td></tr><tr><td><code>AnalyticsConfigurations</code></td><td><code>array</code></td><td>The configuration and any analyses for the analytics filter of an Amazon S3 bucket.</td></tr><tr><td><code>BucketEncryption</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>BucketName</code></td><td><code>string</code></td><td>A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.</td></tr><tr><td><code>CorsConfiguration</code></td><td><code>undefined</code></td><td>Rules that define cross-origin resource sharing of objects in this bucket.</td></tr><tr><td><code>IntelligentTieringConfigurations</code></td><td><code>array</code></td><td>Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.</td></tr><tr><td><code>InventoryConfigurations</code></td><td><code>array</code></td><td>The inventory configuration for an Amazon S3 bucket.</td></tr><tr><td><code>LifecycleConfiguration</code></td><td><code>undefined</code></td><td>Rules that define how Amazon S3 manages objects during their lifetime.</td></tr><tr><td><code>LoggingConfiguration</code></td><td><code>undefined</code></td><td>Settings that define where logs are stored.</td></tr><tr><td><code>MetricsConfigurations</code></td><td><code>array</code></td><td>Settings that define a metrics configuration for the CloudWatch request metrics from the bucket.</td></tr><tr><td><code>NotificationConfiguration</code></td><td><code>undefined</code></td><td>Configuration that defines how Amazon S3 handles bucket notifications.</td></tr><tr><td><code>ObjectLockConfiguration</code></td><td><code>undefined</code></td><td>Places an Object Lock configuration on the specified bucket.</td></tr><tr><td><code>ObjectLockEnabled</code></td><td><code>boolean</code></td><td>Indicates whether this bucket has an Object Lock configuration enabled.</td></tr><tr><td><code>OwnershipControls</code></td><td><code>undefined</code></td><td>Specifies the container element for object ownership rules.</td></tr><tr><td><code>PublicAccessBlockConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ReplicationConfiguration</code></td><td><code>undefined</code></td><td>Configuration for replicating objects in an S3 bucket.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>An arbitrary set of tags (key-value pairs) for this S3 bucket.</td></tr><tr><td><code>VersioningConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>WebsiteConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Arn</code></td><td><code>undefined</code></td><td>The Amazon Resource Name (ARN) of the specified bucket.</td></tr><tr><td><code>DomainName</code></td><td><code>string</code></td><td>The IPv4 DNS name of the specified bucket.</td></tr><tr><td><code>DualStackDomainName</code></td><td><code>string</code></td><td>The IPv6 DNS name of the specified bucket. For more information about dual-stack endpoints, see [Using Amazon S3 Dual-Stack Endpoints](https://docs.aws.amazon.com/AmazonS3/latest/dev/dual-stack-endpoints.html).</td></tr><tr><td><code>RegionalDomainName</code></td><td><code>string</code></td><td>Returns the regional domain name of the specified bucket.</td></tr><tr><td><code>WebsiteURL</code></td><td><code>string</code></td><td>The Amazon S3 website endpoint for the specified bucket.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.s3.buckets
WHERE region = 'us-east-1'
</pre>
