# aws-cfn-schema-to-openapi
Convert AWS CloudFormation Resource Specification to OpenAPI 3.0.0

## Generating OpenAPI3 Specs
1. download and unzip AWS CloudFormation Resource Specification from https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-resource-specification.html
2. move the files to the `input-cfn-docs` directory
3. run `npm install`
4. run `node index.js`

output openapi3 specs (`components/schemas`) are written to `src/aws/v00.00.00000/services`

## Testing locally with `stackql`
1. ensure the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables are set
2. download the latest `stackql` binary, for example `curl -L https://bit.ly/stackql-zip -O && unzip stackql-zip` for Linux systems
3. run the following:
```
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}'", "verifyConfig": {"nopVerify": true}}'
./stackql shell --registry="${REG_STR}"
```
4. run `stackql` commands, for example `select * from aws.s3.bucket WHERE region = 'us-east-1'`

## Generate User Markdown Docs
Use the following script to generate user docs with Docusaurus front matter for AWS view resources:

```
node lib/utils/generate-docs.cjs
```

output markdown docs are written to `md-docs`