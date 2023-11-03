---
title: access_point
hide_title: false
hide_table_of_contents: false
keywords:
  - access_point
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
Gets an individual <code>access_point</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>access_point</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.s3.access_point</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>The name you want to assign to this Access Point. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name.</td></tr><tr><td><code>Alias</code></td><td><code>string</code></td><td>The alias of this Access Point. This alias can be used for compatibility purposes with other AWS services and third-party applications.</td></tr><tr><td><code>Bucket</code></td><td><code>string</code></td><td>The name of the bucket that you want to associate this Access Point with.</td></tr><tr><td><code>BucketAccountId</code></td><td><code>string</code></td><td>The AWS account ID associated with the S3 bucket associated with this access point.</td></tr><tr><td><code>VpcConfiguration</code></td><td><code>undefined</code></td><td>If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).</td></tr><tr><td><code>PublicAccessBlockConfiguration</code></td><td><code>undefined</code></td><td>The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.</td></tr><tr><td><code>Policy</code></td><td><code>object</code></td><td>The Access Point Policy you want to apply to this access point.</td></tr><tr><td><code>PolicyStatus</code></td><td><code>object</code></td><td></td></tr><tr><td><code>NetworkOrigin</code></td><td><code>string</code></td><td>Indicates whether this Access Point allows access from the public Internet. If VpcConfiguration is specified for this Access Point, then NetworkOrigin is VPC, and the Access Point doesn't allow access from the public Internet. Otherwise, NetworkOrigin is Internet, and the Access Point allows access from the public Internet, subject to the Access Point and bucket access policies.</td></tr><tr><td><code>Arn</code></td><td><code>undefined</code></td><td>The Amazon Resource Name (ARN) of the specified accesspoint.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.s3.access_point
WHERE region = 'us-east-1' AND data__Identifier = '<Name>'
</pre>
