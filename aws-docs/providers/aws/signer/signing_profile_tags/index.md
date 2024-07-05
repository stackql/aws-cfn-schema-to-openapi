---
title: signing_profile_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - signing_profile_tags
  - signer
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

Creates, updates, deletes or gets a <code>signing_profile_tag</code> resource or lists <code>signing_profile_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>signing_profile_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A signing profile is a signing template that can be used to carry out a pre-defined signing job.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signer.signing_profile_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="profile_name" /></td><td><code>string</code></td><td>A name for the signing profile. AWS CloudFormation generates a unique physical ID and uses that ID for the signing profile name.</td></tr>
<tr><td><CopyableCode code="profile_version" /></td><td><code>string</code></td><td>A version for the signing profile. AWS Signer generates a unique version for each profile of the same profile name.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the specified signing profile.</td></tr>
<tr><td><CopyableCode code="profile_version_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the specified signing profile version.</td></tr>
<tr><td><CopyableCode code="signature_validity_period" /></td><td><code>object</code></td><td>Signature validity period of the profile.</td></tr>
<tr><td><CopyableCode code="platform_id" /></td><td><code>string</code></td><td>The ID of the target signing platform.</td></tr>
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








