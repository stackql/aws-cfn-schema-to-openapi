# aws-cfn-schema-to-openapi
Convert AWS CloudFormation Resource Specification to OpenAPI 3.0.0

## Usage
1. download and unzip AWS CloudFormation Resource Specification from https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-resource-specification.html
2. move the files to the `docs` directory
3. run `npm install`
4. run `node index.js`

## Generate User Docs
Use the following script to generate user docs with Docusaurus front matter for AWS view resources:

```
node lib/utils/generate-docs.cjs
```