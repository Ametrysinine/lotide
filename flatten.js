const assertArraysEqual = function(actualArray, expectedArray) {

  const passMessage = `✔✔ Test passed ✔✔: ${actualArray} === ${expectedArray}`;
  const failMessage = `❌ Test failed ❌: ${actualArray} !== ${expectedArray}`;

  if (eqArrays(actualArray, expectedArray)) {
    console.log(passMessage);

  } else {
    console.log(failMessage);
  }
  
};

const eqArrays = function(arrayOne, arrayTwo) {
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


const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flatArray.push(array[i]);
    } else {
      for (let subIndex = 0; subIndex < array[i].length; subIndex++) {
        flatArray.push(array[i][subIndex]);
      }
    }
  }
  return flatArray;
};

assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]); // Pass
assertArraysEqual(flatten([[1, 2], 3]), [1, 2, 3]); // Pass
assertArraysEqual(flatten([[1], [2], [3]]), [1, 2, 3]); // Pass