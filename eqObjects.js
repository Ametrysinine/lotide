const eqArrays = require('./eqArrays');

const eqObjects = function(objectOne, objectTwo) { // eqObjects start
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) { // Length checker
    return false;
  }

  let keys = Object.keys(objectOne);

  for (let i = 0; i < keys.length; i++) {
    if (Array.isArray(objectOne[keys[i]])) { // Array checker
      if (!(eqArrays(objectOne[keys[i]], objectTwo[keys[i]]))) {
        return false;

      } else {
        continue;
      }
    }

    if (objectOne[keys[i]] !== objectTwo[keys[i]]) { // Primitive checker
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;