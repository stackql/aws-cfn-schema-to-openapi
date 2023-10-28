---
title: Volume
hide_title: false
hide_table_of_contents: false
keywords:
  - Volume
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
The Volume resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>Volume</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ec2.Volume</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>MultiAttachEnabled</code></td><td><code>boolean</code></td><td>Indicates whether Amazon EBS Multi-Attach is enabled.</td></tr><tr><td><code>KmsKeyId</code></td><td><code>string</code></td><td>The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption. If KmsKeyId is specified, the encrypted state must be true. If you omit this property and your account is enabled for encryption by default, or Encrypted is set to true, then the volume is encrypted using the default CMK specified for your account. If your account does not have a default CMK, then the volume is encrypted using the AWS managed CMK.  Alternatively, if you want to specify a different CMK, you can specify one of the following:  Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab. Key alias. Specify the alias for the CMK, prefixed with alias/. For example, for a CMK with the alias my_cmk, use alias/my_cmk. Or to specify the AWS managed CMK, use alias/aws/ebs. Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab. Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</td></tr><tr><td><code>Encrypted</code></td><td><code>boolean</code></td><td>Specifies whether the volume should be encrypted. The effect of setting the encryption state to true depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see Encryption by default in the Amazon Elastic Compute Cloud User Guide. Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see Supported instance types.</td></tr><tr><td><code>Size</code></td><td><code>integer</code></td><td>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.  Constraints: 1-16,384 for gp2, 4-16,384 for io1 and io2, 500-16,384 for st1, 500-16,384 for sc1, and 1-1,024 for standard. If you specify a snapshot, the volume size must be equal to or larger than the snapshot size. Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size. </td></tr><tr><td><code>AutoEnableIO</code></td><td><code>boolean</code></td><td>The Availability Zone in which to create the volume.</td></tr><tr><td><code>OutpostArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Outpost.</td></tr><tr><td><code>AvailabilityZone</code></td><td><code>string</code></td><td>The Availability Zone in which to create the volume.</td></tr><tr><td><code>Throughput</code></td><td><code>integer</code></td><td>The throughput that the volume supports, in MiB/s.</td></tr><tr><td><code>Iops</code></td><td><code>integer</code></td><td>The number of I/O operations per second (IOPS) to provision for an io1 or io2 volume, with a maximum ratio of 50 IOPS/GiB for io1, and 500 IOPS/GiB for io2. Range is 100 to 64,000 IOPS for volumes in most Regions. Maximum IOPS of 64,000 is guaranteed only on Nitro-based instances. Other instance families guarantee performance up to 32,000 IOPS. For more information, see Amazon EBS volume types in the Amazon Elastic Compute Cloud User Guide. This parameter is valid only for Provisioned IOPS SSD (io1 and io2) volumes. </td></tr><tr><td><code>SnapshotId</code></td><td><code>string</code></td><td>The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size. </td></tr><tr><td><code>VolumeType</code></td><td><code>string</code></td><td>The volume type. This parameter can be one of the following values: General Purpose SSD: gp2 | gp3, Provisioned IOPS SSD: io1 | io2, Throughput Optimized HDD: st1, Cold HDD: sc1, Magnetic: standard</td></tr><tr><td><code>VolumeId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags to apply to the volume during creation.</td></tr>
</tbody></table>