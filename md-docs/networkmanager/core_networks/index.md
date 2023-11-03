---
title: core_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - core_networks
  - networkmanager
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/providers/aws/stackql-aws-provider-featured-image.png
---
Retrieves a list of <code>core_networks</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>core_networks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
null
<tr><td><b>Id</b></td><td><code>aws.networkmanager.core_networks</code></td></tr>
</tbody></table>

## Fields
<table><tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr>
<tr><td><code>GlobalNetworkId</code></td><td><code>string</code></td><td>The ID of the global network that your core network is a part of.</td></tr><tr><td><code>CoreNetworkId</code></td><td><code>string</code></td><td>The Id of core network</td></tr><tr><td><code>CoreNetworkArn</code></td><td><code>string</code></td><td>The ARN (Amazon resource name) of core network</td></tr><tr><td><code>PolicyDocument</code></td><td><code>object</code></td><td>Live policy document for the core network, you must provide PolicyDocument in Json Format</td></tr><tr><td><code>Description</code></td><td><code>string</code></td><td>The description of core network</td></tr><tr><td><code>CreatedAt</code></td><td><code>string</code></td><td>The creation time of core network</td></tr><tr><td><code>State</code></td><td><code>string</code></td><td>The state of core network</td></tr><tr><td><code>Segments</code></td><td><code>array</code></td><td>The segments within a core network.</td></tr><tr><td><code>Edges</code></td><td><code>array</code></td><td>The edges within a core network.</td></tr><tr><td><code>OwnerAccount</code></td><td><code>string</code></td><td>Owner of the core network</td></tr><tr><td><code>Tags</code></td><td><code>array</code></td><td>The tags for the global network.</td></tr>
</tbody></table>

## Methods
Currently only <code>SELECT</code> is supported for this resource resource.

## Example
<pre>
SELECT * 
FROM aws.networkmanager.core_networks
WHERE region = 'us-east-1'
</pre>