const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;