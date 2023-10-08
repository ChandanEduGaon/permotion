const toCamelCase = (str) => {
  const camelCaseString = str.charAt(0).toUpperCase() + str.slice(1);
  return camelCaseString;
};

export default toCamelCase;
