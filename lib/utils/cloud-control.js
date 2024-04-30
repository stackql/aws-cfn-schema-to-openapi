export const cloudControlServers = [
    {
      url: 'https://cloudcontrolapi.{region}.amazonaws.com',
      variables: {
        region: {
          description: 'The AWS region',
          enum: [
            'us-east-1', 'us-east-2', 'us-west-1', 'us-west-2',
            'us-gov-west-1', 'us-gov-east-1', 'ca-central-1',
            'eu-north-1', 'eu-west-1', 'eu-west-2', 'eu-west-3',
            'eu-central-1', 'eu-south-1', 'af-south-1',
            'ap-northeast-1', 'ap-northeast-2', 'ap-northeast-3',
            'ap-southeast-1', 'ap-southeast-2', 'ap-east-1',
            'ap-south-1', 'sa-east-1', 'me-south-1'
          ],
          default: 'us-east-1'
        }
      },
      description: 'The CloudControlApi multi-region endpoint'
    },
    {
      url: 'https://cloudcontrolapi.{region}.amazonaws.com.cn',
      variables: {
        region: {
          description: 'The AWS region',
          enum: ['cn-north-1', 'cn-northwest-1'],
          default: 'cn-north-1'
        }
      },
      description: 'The CloudControlApi endpoint for China (Beijing) and China (Ningxia)'
    }
  ];

export const cloudControlParameters = {
    parameters: {
      'X-Amz-Content-Sha256': {
        name: "X-Amz-Content-Sha256",
        in: "header",
        schema: {
          type: "string"
        },
        required: false
      },
      'X-Amz-Date': {
        name: "X-Amz-Date",
        in: "header",
        schema: {
          type: "string"
        },
        required: false
      },
      'X-Amz-Algorithm': {
        name: "X-Amz-Algorithm",
        in: "header",
        schema: {
          type: "string"
        },
        required: false
      },
      'X-Amz-Credential': {
        name: "X-Amz-Credential",
        in: "header",
        schema: {
          type: "string"
        },
        required: false
      },
      'X-Amz-Security-Token': {
        name: "X-Amz-Security-Token",
        in: "header",
        schema: {
          type: "string"
        },
        required: false
      },
      'X-Amz-Signature': {
        name: "X-Amz-Signature",
        in: "header",
        schema: {
          type: "string"
        },
        required: false
      },
      'X-Amz-SignedHeaders': {
        name: "X-Amz-SignedHeaders",
        in: "header",
        schema: {
          type: "string"
        },
        required: false
      }
    }
  };

export const cloudControlSecuritySchemes = {
      hmac: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        description: "Amazon Signature authorization v4",
        'x-amazon-apigateway-authtype': "awsSigv4"
      }
  };

export const cloudControlPaths = {
      "/?Action=CreateResource&Version=2021-09-30": {
        parameters: [
          {
            $ref: "#/components/parameters/X-Amz-Content-Sha256"
          },
          {
            $ref: "#/components/parameters/X-Amz-Date"
          },
          {
            $ref: "#/components/parameters/X-Amz-Algorithm"
          },
          {
            $ref: "#/components/parameters/X-Amz-Credential"
          },
          {
            $ref: "#/components/parameters/X-Amz-Security-Token"
          },
          {
            $ref: "#/components/parameters/X-Amz-Signature"
          },
          {
            $ref: "#/components/parameters/X-Amz-SignedHeaders"
          }
        ],
        post: {
          operationId: "CreateResource",
          parameters: [
            {
              description: "Action Header",
              in: "header",
              name: "X-Amz-Target",
              required: false,
              schema: {
                default: "CloudApiService.CreateResource",
                enum: [
                  "CloudApiService.CreateResource"
                ],
                type: "string"
              }
            },
            {
              in: "header",
              name: "Content-Type",
              required: false,
              schema: {
                default: "application/x-amz-json-1.0",
                enum: [
                  "application/x-amz-json-1.0"
                ],
                type: "string"
              }
            }
          ],
          requestBody: {
            content: {
              'application/x-amz-json-1.0': {
                schema: {
                  $ref: "#/components/schemas/CreateResourceInput"
                }
              }
            },
            required: true
          },
          responses: {
            200: {
              content: {
                'application/json': {
                  schema: {
                    $ref: "#/components/schemas/ProgressEvent"
                  }
                }
              },
              description: "Success"
            }
          }
        }
      },
      "/?Action=DeleteResource&Version=2021-09-30": {
        parameters: [
          {
            $ref: "#/components/parameters/X-Amz-Content-Sha256"
          },
          {
            $ref: "#/components/parameters/X-Amz-Date"
          },
          {
            $ref: "#/components/parameters/X-Amz-Algorithm"
          },
          {
            $ref: "#/components/parameters/X-Amz-Credential"
          },
          {
            $ref: "#/components/parameters/X-Amz-Security-Token"
          },
          {
            $ref: "#/components/parameters/X-Amz-Signature"
          },
          {
            $ref: "#/components/parameters/X-Amz-SignedHeaders"
          }
        ],
        post: {
          operationId: "DeleteResource",
          parameters: [
            {
              description: "Action Header",
              in: "header",
              name: "X-Amz-Target",
              required: false,
              schema: {
                default: "CloudApiService.DeleteResource",
                enum: [
                  "CloudApiService.DeleteResource"
                ],
                type: "string"
              }
            },
            {
              in: "header",
              name: "Content-Type",
              required: false,
              schema: {
                default: "application/x-amz-json-1.0",
                enum: [
                  "application/x-amz-json-1.0"
                ],
                type: "string"
              }
            }
          ],
          requestBody: {
            content: {
              'application/x-amz-json-1.0': {
                schema: {
                  $ref: "#/components/schemas/DeleteResourceInput"
                }
              }
            },
            required: true
          },
          responses: {
            200: {
              content: {
                'application/json': {
                  schema: {
                    $ref: "#/components/schemas/DeleteResourceOutput"
                  }
                }
              },
              description: "Success"
            }
          }
        }
      },
      "/?Action=UpdateResource&Version=2021-09-30": {
        parameters: [
          {
            $ref: "#/components/parameters/X-Amz-Content-Sha256"
          },
          {
            $ref: "#/components/parameters/X-Amz-Date"
          },
          {
            $ref: "#/components/parameters/X-Amz-Algorithm"
          },
          {
            $ref: "#/components/parameters/X-Amz-Credential"
          },
          {
            $ref: "#/components/parameters/X-Amz-Security-Token"
          },
          {
            $ref: "#/components/parameters/X-Amz-Signature"
          },
          {
            $ref: "#/components/parameters/X-Amz-SignedHeaders"
          }
        ],
        post: {
          operationId: "UpdateResource",
          parameters: [
            {
              description: "Action Header",
              in: "header",
              name: "X-Amz-Target",
              required: false,
              schema: {
                default: "CloudApiService.UpdateResource",
                enum: [
                  "CloudApiService.UpdateResource"
                ],
                type: "string"
              }
            },
            {
              in: "header",
              name: "Content-Type",
              required: false,
              schema: {
                default: "application/x-amz-json-1.0",
                enum: [
                  "application/x-amz-json-1.0"
                ],
                type: "string"
              }
            }
          ],
          requestBody: {
            content: {
              'application/x-amz-json-1.0': {
                schema: {
                  properties: {
                    ClientName: {
                      type: "string"
                    },
                    Identifier: {
                      $ref: "#/components/schemas/Identifier"
                    },
                    PatchDocument: {
                      type: "string"
                    },
                    RoleArn: {
                      $ref: "#/components/schemas/RoleArn"
                    },
                    TypeName: {
                      $ref: "#/components/schemas/TypeName"
                    },
                    TypeVersionId: {
                      $ref: "#/components/schemas/TypeVersionId"
                    }
                  },
                  required: [
                    "Identifier",
                    "PatchDocument",
                    "TypeName"
                  ],
                  type: "object"
                }
              }
            },
            required: true
          },
          responses: {
            200: {
              content: {
                'application/json': {
                  schema: {
                    $ref: "#/components/schemas/UpdateResourceOutput"
                  }
                }
              },
              description: "Success"
            }
          }
        }
      }
    }
;