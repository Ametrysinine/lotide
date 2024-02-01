const assertArraysEqual = function(actualArray, expectedArray) { // assertArraysEqual
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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(map([1, 2, 3, 4], x => x + 1), [2, 3, 4, 5])
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], x => x[0]), ["g", "c", "t", "m", "t"])