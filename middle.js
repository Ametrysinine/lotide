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



const middle = function(array) {
  if (array.length === 1 || array.length === 2) { // If array is length 1 or 2, return empty array
    return [];
  } else {
    let sliceIndex = Math.floor((array.length - 1) / 2); // Slice according to length
    return array.slice(sliceIndex, -sliceIndex);
  }
};


assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Pass
assertArraysEqual(middle([1, 2]), []); // Pass
assertArraysEqual(middle([1]), []); // Pass
