import _ from "lodash";

export function isAllowedInOpenAPISchema(key) {
  const allowedProperties = [
    "type",
    "format",
    "items",
    "properties",
    "additionalProperties",
    "description",
    "default",
    "required",
    "enum",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    "minLength",
    "maxLength",
    "pattern",
    "minItems",
    "maxItems",
    "uniqueItems",
    "minProperties",
    "maxProperties",
    "allOf",
    "anyOf",
    "oneOf",
    "not",
    "$ref",
    "example",
  ];

  return allowedProperties.includes(key);
}

export function convertToOpenAPI(input, componentName, schemaDefinitions) {
  const formattedComponentName = formatComponentName(componentName);
  const requiredProperties = input.required || [];
  const openAPIComponent = createOpenAPIComponent(
    formattedComponentName,
    requiredProperties
  );

  for (const [key, value] of Object.entries(input.properties)) {
    if (isObjectWithProperties(value)) {
      openAPIComponent.properties[key] = convertToOpenAPI(
        value,
        key,
        schemaDefinitions
      ).properties[key];
    } else {
      value["x-is-top-level-property"] = true;
      openAPIComponent.properties[key] = value;
    }
  }

  for (const [key, value] of Object.entries(input.definitions || {})) {
    schemaDefinitions[key] = value;
  }

  return { [formattedComponentName]: openAPIComponent };
}

function formatComponentName(componentName) {
  return componentName
    .replace(/^aws-lambda-/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function createOpenAPIComponent(formattedComponentName, requiredProperties) {
  return {
    type: "object",
    properties: {},
    required: requiredProperties,
    "x-stackql-resource-name": formattedComponentName,
  };
}

function isObjectWithProperties(value) {
  return value.type === "object" && value.properties;
}

function processProperties(value, parentKey = "", grandparentKey = "") {
  if (_.isPlainObject(value)) {
    return processObjectProperties(value, parentKey, grandparentKey);
  } else if (_.isArray(value)) {
    return processArrayProperties(value, parentKey, grandparentKey);
  } else {
    return value;
  }
}

function processObjectProperties(object, parentKey, grandparentKey) {
  let result = {};

  for (const [key, val] of Object.entries(object)) {
    if (isReferenceKey(key, val)) {
      result[key] = updateReference(val);
    } else if (needsPrefix(key, parentKey, grandparentKey)) {
      result[`x-${key}`] = processProperties(val, key, parentKey);
    } else {
      result[key] = processProperties(val, key, parentKey);
    }
  }

  return result;
}

function processArrayProperties(array, parentKey, grandparentKey) {
  return array.map((item) =>
    processProperties(item, parentKey, grandparentKey)
  );
}

function isReferenceKey(key, value) {
  return key === "$ref" && value.startsWith("#/definitions/");
}

function updateReference(reference) {
  return reference.replace("#/definitions/", "#/components/schemas/");
}

function needsPrefix(key, parentKey, grandparentKey) {
  const isKeyAllowed = isAllowedInOpenAPISchema(key);
  const isGrandparentValid =
    grandparentKey === "properties" || grandparentKey === "schemas";
  const isParentValid = parentKey !== "properties";
  const isNotPrefixed = !key.startsWith("x-");

  return !isKeyAllowed && isGrandparentValid && isParentValid && isNotPrefixed;
}

export function cleanOpenAPISpec(openAPIObject) {
  return processProperties(openAPIObject);
}

export function generateSelectQuery({
    schemaName,
    schema,
    region,
    componentName,
    openApiSpec
  }) {
    let selectQuery = "SELECT \n";
  
    for (const propertyName in schema.properties) {
      const propertySchema = schema.properties[propertyName];
      const isReference = propertySchema.$ref;
  
      if (isReference) {
        selectQuery += handleReferenceProperty(propertySchema, openApiSpec, propertyName);
      } else {
        selectQuery += handleSimpleProperty(propertyName);
      }
    }
  
    selectQuery = removeTrailingComma(selectQuery);
    selectQuery += buildFromClause(region, componentName, schemaName);
  
    return selectQuery;
  }
  
  function handleReferenceProperty(propertySchema, openApiSpec, propertyName) {
    let queryPart = '';
  
    const refSchemaName = propertySchema.$ref.split("/").pop();
    const refSchema = openApiSpec.components.schemas[refSchemaName];
  
    for (const nestedPropertyName in refSchema.properties) {
      const columnAlias = toSnakeCase(`${propertyName}${nestedPropertyName}`);
      queryPart += `JSON_EXTRACT(Properties, '$.${propertyName}.${nestedPropertyName}') as ${columnAlias},\n`;
    }
  
    return queryPart;
  }
  
  function handleSimpleProperty(propertyName) {
    const columnAlias = toSnakeCase(propertyName);
    return `JSON_EXTRACT(Properties, '$.${propertyName}') as ${columnAlias},\n`;
  }
  
  function removeTrailingComma(query) {
    return query.slice(0, -2);
  }
  
  function buildFromClause(region, componentName, schemaName) {
    return `\nFROM aws.cloud_control.resources WHERE region = '${region}' and data__TypeName = 'AWS::${componentName}::${schemaName}' ;`;
  }

export function toSnakeCase(str) {
  return str.replace(/[\w]([A-Z])/g, (m) => m[0] + "_" + m[1]).toLowerCase();
}
