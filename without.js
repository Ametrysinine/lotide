const assertArraysEqual = function(actualArray, expectedArray) { // Import assertArraysEqual
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

const existsInArray = function(item, array) { // Checks if item is in array
  let i = 0;

  while (i < array.length) {
    if (item === array[i]) {
      return true;

    } else {
      i++;
    }
  }

  if (i === array.length) { // Return true after every comparing to every index in array
    return false;
  }
};

const without = function(array, blocklist) {
  let cleanArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!existsInArray(array[i], blocklist)) { // Add to result array if not in blocklist
      cleanArray.push(array[i]);
    }
  }

  return cleanArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["11", "11", "23"], ["11"])); // => ["23"]
console.log(without(["4", "4", "4"], ["4"])); // => []
console.log(without(["50", "25", "50", "10", "30"], ["50", "10"])); // => ["25", "30"]