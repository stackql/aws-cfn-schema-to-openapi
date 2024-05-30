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

Copy the contents of the APIs guru service spec.  The only sections required are `paths`, `components/schemas`, `components/x-stackQL-resources` and `x-stackQL-config`, other sections are included for OpenAPI completeness (like `info` and `components/parameters`).  Modify the spec preable following the example below (for `route53`):

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
paths:
  "/2013-04-01/hostedzone/{Id}/rrset/?__nativeEndpoint=true":
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

> NOTE the `?__nativeEndpoint=true` query string that must be added to the `path` of a native AWS API (non Cloud Control operation)

### 4. Add additional config options

Include config options which will be merged with the config in the original Cloud Control specification, for example:

```yaml
x-stackQL-config:
  queryParamTranspose:
    algorithm: AWSCanonical
```

### 4. Add `x-stackQL-resources` methods and sql verbs

Find all schemas related to the operations included in step 3, you can use the `lib/addtl_routes/resolveSchemas.js` script for this.  Update `schemaFile` and `targetPaths` in `resolveSchemas.js` and run: 

```bash
cd lib/addtl_routes
node resolveSchemas.js
```

Add the schemas to `components/schemas` in the additional route spec.

### 5. Add `x-stackQL-resources` methods and sql verbs

Project resources from the spec and methods mapping to operations mapping to sql verbs, for example:

```yaml
components:
  x-stackQL-resources:
    resource_record_sets:
      name: resource_record_sets
      x-cfn-schema-name: ResourceRecordSet
      x-example-where-clause: "WHERE region = 'us-east-1' AND Id = '<HostedZoneId>'"
      x-type: custom
      methods:
        create_record_set:
          serviceName: route53
          operation:
            $ref: '#/paths/~12013-04-01~1hostedzone~1{Id}~1rrset~1?__nativeEndpoint=true/post'
          request:
            mediaType: text/xml
            xmlRootAnnotation: 'xmlns="https://route53.amazonaws.com/doc/2013-04-01/"'
          response:
            mediaType: text/xml
            openAPIDocKey: '200'
        list_record_sets:
          serviceName: route53
          operation:
            $ref: '#/paths/~12013-04-01~1hostedzone~1{Id}~1rrset?__nativeEndpoint=true/get'
          response:
            objectKey: /*/ResourceRecordSets/ResourceRecordSet
            mediaType: text/xml
            openAPIDocKey: '200'
      id: aws.route53.resource_record_sets
      sqlVerbs:
        delete: []
        insert:
          - $ref: '#/components/x-stackQL-resources/resource_record_sets/methods/create_record_set'
        select:
          - $ref: '#/components/x-stackQL-resources/resource_record_sets/methods/list_record_sets'
        update: []
      title: resource_record_sets
```

Additional sections (used for documentation generation) are described here:

| Key                            | Description                                                                                 | Example                                     | Required |
|--------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------|----------|
| `x-cfn-schema-name`            | key in `components/schemas` for the main response body for the read method for the resource | `ResourceRecordSet`                         | No       |
| `x-example-where-clause`       | example where clause used in the documentation `SELECT` example                             | `"WHERE region = 'us-east-1' AND Id = ''"`  | No       |
| `x-type`                       | tells the documentation generator that this is a `custom` resource (value must be `custom`) | `custom`                                    | Yes      |
| `x-description`                | required if `x-cfn-schema-name` is not supplied                                             | `Imports or deletes a public key for a user`| No       |

> NOTE if a resource does not contain a `select` method, then do not supply `x-cfn-schema-name` and include `x-description` 

### 6. Update static selectable resource and method counts in `lib/utils/generate-docs.js`

To generate accurate metrics for the service in the docs, update the following sections in `lib/utils/generate-docs.js`:

```javascript
const staticSelectableResourcesDiff = {
  route53: 0,
};  // non selectable resources from static services
const staticMethodCounts = {
    route53: 2, 
}; // method counts from static services
```

### 7. Build and test the provider as normal

Build and test the provider using the instructions in the project [`README`](../../README.md)

### 8. Merge the new provider version into the `stackql-provider-registry`

### 9. Update the provider version and generate user docs

Update `awsProviderVer` in `lib/utils/generate-docs.js` and generate the user markdown docs to merge into `stackql-registry-docs`.