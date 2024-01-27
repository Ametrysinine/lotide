const assertArraysEqual = function(actualArray, expectedArray) {
  const passMessage = `✔✔ Test passed ✔✔: ${actualArray} === ${expectedArray}`;
  const failMessage = `❌ Test failed ❌: ${actualArray} !== ${expectedArray}`;

  if (eqArrays(actualArray, expectedArray)) {
    console.log(passMessage);

  } else {
    console.log(failMessage);
  }
  
};

const eqArrays = function(arrayOne, arrayTwo) { // Import eqArrays
  let arraysEqual = true;

  if (arrayOne.length !== arrayTwo.length) {
    return false;

  } else {
    for (let i in arrayOne) {
      if (arrayOne[i] !== arrayTwo[i]) {
        arraysEqual = false;
      }

    }
  }
  return arraysEqual;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Fail
assertArraysEqual([1, 2, 3], [2, 4]); // Fail
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // Fail