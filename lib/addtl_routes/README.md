# Adding additional routes

The base AWS provider specs are based upon the [AWS Cloud Control API](https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/Welcome.html).  Additional routes include:

- CRUDL resource routes which arent covered in the Cloud Control API, see [here](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/supported-resources.html); or
- lifecycle methods (such as stopping or starting a VM instance)

Native API resources and routes can b e sourced from [APIs guru](https://github.com/APIs-guru/openapi-directory/tree/main/APIs/amazonaws.com).

## Steps to add additional routes

Follow the steps below to add discrete routes from

### 1. Create additional routes file

Create a file with the same name as the service title (`info.title`) in the `lib/addtl_routes` directory.

### 2. Copy the contents from the APIs guru spec

Copy the contents of the APIs guru service spec.  The only sections required are `paths`, `components/schemas`, `components/x-stackQL-resources`.  Modify the spec preable following the example below (for `route53`):

```yaml
openapi: 3.0.0
info:
  title: Route53
  description: Additional stackql views for Route53
  version: 1.0.0
```

### 3. Project individual paths and add servers

Find the paths you wish to project in the resource, comment all others.  Add a `servers` block under the `path`, copied from the `servers` block from the APIs guru spec, for example...

```yaml
  "/2013-04-01/hostedzone/{Id}/rrset/":
    post:
      operationId: ChangeResourceRecordSets
      description: "blah blah"
      servers:
        - url: https://route53.amazonaws.com
          description: The general Route 53 multi-region endpoint
      responses:
        "200":
          description: Success
          content:
            text/xml:
              schema:
                $ref: "#/components/schemas/ChangeResourceRecordSetsResponse"
        ...
```                


