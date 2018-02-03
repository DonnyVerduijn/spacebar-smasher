const omit = (object, properties = []) => {

  const clone = Object.assign({}, object);
  if (Array.isArray(properties)) {
    properties.forEach(key => {
      Reflect.deleteProperty(clone, key);
    });
  } else {
    Reflect.deleteProperty(clone, properties);
  }
  return clone;
};

module.exports = omit;
