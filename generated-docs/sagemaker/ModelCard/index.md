---
title: ModelCard
hide_title: false
hide_table_of_contents: false
keywords:
  - ModelCard
  - sagemaker
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
The ModelCard resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>sagemaker.ModelCard</b></span><br />
<span>resource id:&nbsp;<b>sagemaker:ModelCard</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sagemaker.ModelCard</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>sagemaker:ModelCard</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>ModelCardArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the successfully created model card.</td></tr><tr><td><code>ModelCardVersion</code></td><td><code>integer</code></td><td>A version of the model card.</td></tr><tr><td><code>ModelCardName</code></td><td><code>string</code></td><td>The unique name of the model card.</td></tr><tr><td><code>SecurityConfig</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>ModelCardStatus</code></td><td><code>string</code></td><td>The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.</td></tr><tr><td><code>Content</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>CreationTime</code></td><td><code>string</code></td><td>The date and time the model card was created.</td></tr><tr><td><code>CreatedBy</code></td><td><code>undefined</code></td><td>Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.</td></tr><tr><td><code>LastModifiedTime</code></td><td><code>string</code></td><td>The date and time the model card was last modified.</td></tr><tr><td><code>LastModifiedBy</code></td><td><code>undefined</code></td><td>Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.</td></tr><tr><td><code>ModelCardProcessingStatus</code></td><td><code>string</code></td><td>The processing status of model card deletion. The ModelCardProcessingStatus updates throughout the different deletion steps.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>Key-value pairs used to manage metadata for model cards.</td></tr>
</tbody></table>