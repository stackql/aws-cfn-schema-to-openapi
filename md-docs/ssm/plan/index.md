---
title: plan
hide_title: false
hide_table_of_contents: false
keywords:
  - plan
  - ssm
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The plan resource documentation.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>plan</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.ssm.plan</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ContactId</code></td><td><code>string</code></td><td>Contact ID for the AWS SSM Incident Manager Contact to associate the plan.</td></tr><tr><td><code>Stages</code></td><td><code>array</code></td><td>The stages that an escalation plan or engagement plan engages contacts and contact methods in.</td></tr><tr><td><code>RotationIds</code></td><td><code>array</code></td><td>Rotation Ids to associate with Oncall Contact for engagement.</td></tr><tr><td><code>Arn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the contact.</td></tr>
</tbody></table>