import _ from "lodash";

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
function isAllowedInOpenAPISchema(key) {
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

function toSnakeCase(str) {
  return str
      .replace(/([A-Z]+)([A-Z][a-z])/g, (match, p1, p2) => `${p1.toLowerCase()}_${p2.toLowerCase()}`)
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .toLowerCase()
      .replace(/_+/g, '_');
}

function createOpenAPIComponent(formattedComponentName, requiredProperties) {
  return {
    type: "object",
    properties: {},
    ...(requiredProperties && { required: requiredProperties }),
    "x-stackql-resource-name": toSnakeCase(formattedComponentName),
  };
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

export function convertToOpenAPI(input, componentName, schemaDefinitions) {

  const formattedComponentName = formatComponentName(componentName);
  const requiredProperties = input.required;
  const openAPIComponent = createOpenAPIComponent(
    formattedComponentName,
    requiredProperties
  );

  for (const [key, value] of Object.entries(input.properties)) {
    //if property type is array, like ['string', 'object'], check if it has #ref, if yes then convert it to openapi object, else leave it as it is and change type to 'string'
    const hasObjectInType =
      (Array.isArray(value.type) && value.type.includes("object")) ||
      isObjectWithProperties(value);

    const needToConvertToObject = hasObjectInType && value.$ref;

    const needToRemoveObjectType =
      hasObjectInType && !value.$ref && Array.isArray(value.type);

    if (needToConvertToObject) {
      openAPIComponent.properties[key] = convertToOpenAPI(
        value,
        key,
        schemaDefinitions
      ).properties[key];
    } else if (needToRemoveObjectType) {
      const nonObjectTypeValue = value.type
        .filter((type) => type !== "object")
        .shift();
      openAPIComponent.properties[key] = {
        type: nonObjectTypeValue,
      };
    } else {
      openAPIComponent.properties[key] = value;
    }
  }

  // Add the x-stackql-primaryIdentifier if present
  if (input['primaryIdentifier']) {
    openAPIComponent['x-stackql-primaryIdentifier'] = input.primaryIdentifier.map(id => id.replace('/properties/', ''))
  }

  // Add the x-create-only-properties if present
  if (input['createOnlyProperties']) {
    openAPIComponent['x-create-only-properties'] = input.createOnlyProperties.map(id => id.replace('/properties/', ''))
  }

  // Add the x-read-only-properties if present
  if (input['readOnlyProperties']) {
    openAPIComponent['x-read-only-properties'] = input.readOnlyProperties.map(id => id.replace('/properties/', ''))
  }

  // Add the x-required-permissions
  if (input.handlers && typeof input.handlers === 'object') {
    openAPIComponent['x-required-permissions'] = {};
    // Iterate over the handlers object
    for (const [handlerName, handlerInfo] of Object.entries(input.handlers)) {
      // Add the permissions array to the corresponding handler in the x-required-permissions object
      openAPIComponent['x-required-permissions'][handlerName] = handlerInfo.permissions;
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

function isObjectWithProperties(value) {
  // Determine if the value is an object with properties
  return value.type === 'object' && value.properties;
}

export function cleanOpenAPISpec(openAPIObject) {
  return processProperties(openAPIObject);
}
