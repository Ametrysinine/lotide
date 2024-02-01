const eqArrays = function(arrayOne, arrayTwo) { // Import eqArrays
  let arraysEqual = true;

  if (arrayOne.length !== arrayTwo.length) {
    arraysEqual = false;

  } else {
    for (let i in arrayOne) { // Compare each item in array
      if (arrayOne[i] !== arrayTwo[i]) {
        arraysEqual = false;
      }
    }
  }

  return arraysEqual;
};

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
}; // eqObjects end

const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect; // <= add this line
  const passMessage = `✔✔ Test passed ✔✔: ${inspect(actualObject)} === ${inspect(expectedObject)}`;
  const failMessage = `❌ Test failed ❌: ${inspect(actualObject)} !== ${inspect(expectedObject)}`;


  if (eqObjects(actualObject, expectedObject)) {
    console.log(passMessage);

  } else {
    console.log(failMessage);
  }
};

