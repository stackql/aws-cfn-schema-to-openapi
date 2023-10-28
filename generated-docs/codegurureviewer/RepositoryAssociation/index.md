---
title: RepositoryAssociation
hide_title: false
hide_table_of_contents: false
keywords:
  - RepositoryAssociation
  - codegurureviewer
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The RepositoryAssociation resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>codegurureviewer.RepositoryAssociation</b></span><br />
<span>resource id:&nbsp;<b>codegurureviewer:RepositoryAssociation</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>codegurureviewer.RepositoryAssociation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>codegurureviewer:RepositoryAssociation</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Name</code></td><td><code>string</code></td><td>Name of the repository to be associated.</td></tr><tr><td><code>Type</code></td><td><code>string</code></td><td>The type of repository to be associated.</td></tr><tr><td><code>Owner</code></td><td><code>string</code></td><td>The owner of the repository. For a Bitbucket repository, this is the username for the account that owns the repository.</td></tr><tr><td><code>BucketName</code></td><td><code>string</code></td><td>The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.</td></tr><tr><td><code>ConnectionArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.</td></tr><tr><td><code>AssociationArn</code></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the repository association.</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags associated with a repository association.</td></tr>
</tbody></table>