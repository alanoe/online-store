exports.objHasProperties = (obj, properties) => {
  missingProps = new Array()
  for (prop of properties) {
    if (!(prop in obj)) {
      missingProps.push(prop)
    }
  }
  return missingProps
}

exports.filterObjByKeys = (raw, keys) => {
  return Object.keys(raw)
    .filter(key => keys.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        // TODO: confirm that shallow copying is good enough for our needs
        [key]: raw[key]
      };
    }, {});
}
