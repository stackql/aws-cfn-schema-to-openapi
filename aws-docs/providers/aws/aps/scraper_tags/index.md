---
title: scraper_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - scraper_tags
  - aps
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

Creates, updates, deletes or gets a <code>scraper_tag</code> resource or lists <code>scraper_tags</code> in a region

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>scraper_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::APS::Scraper</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.aps.scraper_tags" /></td></tr>
</tbody></table>

## Fields
<table><tbody><tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="scraper_id" /></td><td><code>string</code></td><td>Required to identify a specific scraper.</td></tr>
<tr><td><CopyableCode code="alias" /></td><td><code>string</code></td><td>Scraper alias.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>Scraper ARN.</td></tr>
<tr><td><CopyableCode code="role_arn" /></td><td><code>string</code></td><td>IAM role ARN for the scraper.</td></tr>
<tr><td><CopyableCode code="scrape_configuration" /></td><td><code>object</code></td><td>Scraper configuration</td></tr>
<tr><td><CopyableCode code="source" /></td><td><code>object</code></td><td>Scraper metrics source</td></tr>
<tr><td><CopyableCode code="destination" /></td><td><code>object</code></td><td>Scraper metrics destination</td></tr>
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








