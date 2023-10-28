---
title: DataSet
hide_title: false
hide_table_of_contents: false
keywords:
  - DataSet
  - quicksight
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The DataSet resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>quicksight.DataSet</b></span><br />
<span>resource id:&nbsp;<b>quicksight:DataSet</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>quicksight.DataSet</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>quicksight:DataSet</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Arn</code></td><td><code>string</code></td><td><p>The Amazon Resource Name (ARN) of the resource.</p></td></tr><tr><td><code>AwsAccountId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>ColumnGroups</code></td><td><code>array</code></td><td><p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p></td></tr><tr><td><code>ColumnLevelPermissionRules</code></td><td><code>array</code></td><td></td></tr><tr><td><code>ConsumedSpiceCapacityInBytes</code></td><td><code>number</code></td><td><p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
            imported into SPICE.</p></td></tr><tr><td><code>CreatedTime</code></td><td><code>string</code></td><td><p>The time that this dataset was created.</p></td></tr><tr><td><code>DataSetId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>FieldFolders</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ImportMode</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>LastUpdatedTime</code></td><td><code>string</code></td><td><p>The last time that this dataset was updated.</p></td></tr><tr><td><code>LogicalTableMap</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td><p>The display name for the dataset.</p></td></tr><tr><td><code>OutputColumns</code></td><td><code>array</code></td><td><p>The list of columns after all transforms. These columns are available in templates,
            analyses, and dashboards.</p></td></tr><tr><td><code>Permissions</code></td><td><code>array</code></td><td><p>A list of resource permissions on the dataset.</p></td></tr><tr><td><code>PhysicalTableMap</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>RowLevelPermissionDataSet</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td><p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p></td></tr><tr><td><code>IngestionWaitPolicy</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>DataSetUsageConfiguration</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>