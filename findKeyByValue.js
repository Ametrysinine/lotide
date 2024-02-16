const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  const values = Object.values(object);

  for (let i = 0; i < values.length; i++) {
    if (values[i] === value) {
      return keys[i];
    }
  }

  return undefined;
};

module.exports = findKeyByValue;