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
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2]));
// 1 check array length. 2 odd or even 3 odd protocol 4 even protocol