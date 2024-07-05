---
title: trust_store_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_store_tags
  - elasticloadbalancingv2
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

Creates, updates, deletes or gets a <code>trust_store_tag</code> resource or lists <code>trust_store_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>trust_store_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStore</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticloadbalancingv2.trust_store_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the trust store.</td></tr>
<tr><td><CopyableCode code="ca_certificates_bundle_s3_bucket" /></td><td><code>string</code></td><td>The name of the S3 bucket to fetch the CA certificate bundle from.</td></tr>
<tr><td><CopyableCode code="ca_certificates_bundle_s3_key" /></td><td><code>string</code></td><td>The name of the S3 object to fetch the CA certificate bundle from.</td></tr>
<tr><td><CopyableCode code="ca_certificates_bundle_s3_object_version" /></td><td><code>string</code></td><td>The version of the S3 bucket that contains the CA certificate bundle.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The status of the trust store, could be either of ACTIVE or CREATING.</td></tr>
<tr><td><CopyableCode code="number_of_ca_certificates" /></td><td><code>integer</code></td><td>The number of certificates associated with the trust store.</td></tr>
<tr><td><CopyableCode code="trust_store_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the trust store.</td></tr>
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
    <td><CopyableCode code="view" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody></table>







