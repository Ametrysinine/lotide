const findKey = function(object, callback) {
  const keys = Object.keys(object);
  const values = Object.values(object);

  for (let i = 0; i < values.length; i++) {
    if (callback(values[i])) {
      return keys[i];
    }
  }

  return undefined;
};

module.exports = findKey;