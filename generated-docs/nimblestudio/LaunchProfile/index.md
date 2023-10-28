---
title: LaunchProfile
hide_title: false
hide_table_of_contents: false
keywords:
  - LaunchProfile
  - nimblestudio
  - azure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Azure resources using SQL
custom_edit_url: null
image: /img/providers/azure/stackql-azure-provider-featured-image.png
---
The LaunchProfile resource documentation.

:::info Resource Summary

<div class="row">
<div class="providerDocColumn">
<span>resource type:&nbsp;<b>nimblestudio.LaunchProfile</b></span><br />
<span>resource id:&nbsp;<b>nimblestudio:LaunchProfile</b></span><br />
</div>
</div>

:::

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>nimblestudio.LaunchProfile</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td></td></tr>
<tr><td><b>Id</b></td><td><code>nimblestudio:LaunchProfile</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>Description</code></td><td><code>string</code></td><td><p>The description.</p></td></tr><tr><td><code>Ec2SubnetIds</code></td><td><code>array</code></td><td><p>Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from.
            These subnets must support the specified instance types. </p></td></tr><tr><td><code>LaunchProfileId</code></td><td><code>string</code></td><td></td></tr><tr><td><code>LaunchProfileProtocolVersions</code></td><td><code>array</code></td><td><p>The version number of the protocol that is used by the launch profile. The only valid
            version is "2021-03-31".</p></td></tr><tr><td><code>Name</code></td><td><code>string</code></td><td><p>The name for the launch profile.</p></td></tr><tr><td><code>StreamConfiguration</code></td><td><code>undefined</code></td><td></td></tr><tr><td><code>StudioComponentIds</code></td><td><code>array</code></td><td><p>Unique identifiers for a collection of studio components that can be used with this
            launch profile.</p></td></tr><tr><td><code>StudioId</code></td><td><code>string</code></td><td><p>The studio ID. </p></td></tr><tr><td><code>Tags</code></td><td><code>undefined</code></td><td></td></tr>
</tbody></table>