---
title: detector
hide_title: false
hide_table_of_contents: false
keywords:
  - detector
  - frauddetector
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Gets an individual <code>detector</code> resource

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>detector</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>detector</td></tr>
<tr><td><b>Id</b></td><td><code>awscc.frauddetector.detector</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>detector_id</code></td><td><code>string</code></td><td>The ID of the detector</td></tr>
<tr><td><code>detector_version_status</code></td><td><code>string</code></td><td>The desired detector version status for the detector</td></tr>
<tr><td><code>detector_version_id</code></td><td><code>string</code></td><td>The active version ID of the detector</td></tr>
<tr><td><code>rule_execution_mode</code></td><td><code>string</code></td><td></td></tr>
<tr><td><code>tags</code></td><td><code>array</code></td><td>Tags associated with this detector.</td></tr>
<tr><td><code>description</code></td><td><code>string</code></td><td>The description of the detector.</td></tr>
<tr><td><code>rules</code></td><td><code>array</code></td><td></td></tr>
<tr><td><code>event_type</code></td><td><code>object</code></td><td>The event type to associate this detector with.</td></tr>
<tr><td><code>arn</code></td><td><code>string</code></td><td>The ARN of the detector.</td></tr>
<tr><td><code>created_time</code></td><td><code>string</code></td><td>The time when the detector was created.</td></tr>
<tr><td><code>last_updated_time</code></td><td><code>string</code></td><td>The time when the detector was last updated.</td></tr>
<tr><td><code>associated_models</code></td><td><code>array</code></td><td>The models to associate with this detector.</td></tr>
<tr><td><code>region</code></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
```sql
SELECT
region,
detector_id,
detector_version_status,
detector_version_id,
rule_execution_mode,
tags,
description,
rules,
event_type,
arn,
created_time,
last_updated_time,
associated_models
FROM awscc.frauddetector.detector
WHERE data__Identifier = '<Arn>';
```

## Permissions

To operate on the <code>detector</code> resource, the following permissions are required:

### Update
```json
frauddetector:GetDetectors,
frauddetector:GetDetectorVersion,
frauddetector:PutDetector,
frauddetector:UpdateDetectorVersion,
frauddetector:UpdateDetectorVersionStatus,
frauddetector:UpdateDetectorVersionMetadata,
frauddetector:UpdateRuleVersion,
frauddetector:UpdateRuleMetadata,
frauddetector:CreateRule,
frauddetector:CreateVariable,
frauddetector:UpdateVariable,
frauddetector:GetVariables,
frauddetector:PutLabel,
frauddetector:PutOutcome,
frauddetector:PutEntityType,
frauddetector:PutEventType,
frauddetector:GetRules,
frauddetector:GetEventTypes,
frauddetector:GetLabels,
frauddetector:GetOutcomes,
frauddetector:GetEntityTypes,
frauddetector:GetExternalModels,
frauddetector:GetModelVersion,
frauddetector:DeleteEventType,
frauddetector:DeleteVariable,
frauddetector:DeleteLabel,
frauddetector:DeleteEntityType,
frauddetector:ListTagsForResource,
frauddetector:TagResource,
frauddetector:UntagResource
```

### Delete
```json
frauddetector:GetDetectors,
frauddetector:GetDetectorVersion,
frauddetector:DescribeDetector,
frauddetector:GetRules,
frauddetector:GetVariables,
frauddetector:GetEventTypes,
frauddetector:GetLabels,
frauddetector:GetOutcomes,
frauddetector:GetEntityTypes,
frauddetector:DeleteDetector,
frauddetector:DeleteDetectorVersion,
frauddetector:DeleteRule,
frauddetector:DeleteEventType,
frauddetector:DeleteVariable,
frauddetector:DeleteLabel,
frauddetector:DeleteOutcome,
frauddetector:DeleteEntityType,
frauddetector:ListTagsForResource
```

### Read
```json
frauddetector:GetDetectors,
frauddetector:GetDetectorVersion,
frauddetector:DescribeDetector,
frauddetector:GetRules,
frauddetector:GetVariables,
frauddetector:GetEventTypes,
frauddetector:GetExternalModels,
frauddetector:GetModelVersion,
frauddetector:GetLabels,
frauddetector:GetOutcomes,
frauddetector:GetEntityTypes,
frauddetector:ListTagsForResource
```

