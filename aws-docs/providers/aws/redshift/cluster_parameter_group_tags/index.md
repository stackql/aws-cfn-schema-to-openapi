---
title: cluster_parameter_group_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_parameter_group_tags
  - redshift
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

Creates, updates, deletes or gets a <code>cluster_parameter_group_tag</code> resource or lists <code>cluster_parameter_group_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cluster_parameter_group_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Redshift::ClusterParameterGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.cluster_parameter_group_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="parameter_group_name" /></td><td><code>string</code></td><td>The name of the cluster parameter group.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>A description of the parameter group.</td></tr>
<tr><td><CopyableCode code="parameter_group_family" /></td><td><code>string</code></td><td>The Amazon Redshift engine version to which the cluster parameter group applies. The cluster engine version determines the set of parameters.</td></tr>
<tr><td><CopyableCode code="parameters" /></td><td><code>array</code></td><td>An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
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








