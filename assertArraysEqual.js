const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actualArray, expectedArray) {
  const passMessage = `✔✔ Test passed ✔✔: ${actualArray} === ${expectedArray}`;
  const failMessage = `❌ Test failed ❌: ${actualArray} !== ${expectedArray}`;

  if (eqArrays(actualArray, expectedArray)) {
    return true;
  } else {
    console.log(failMessage);
    return false;
  }

};

module.exports = assertArraysEqual;