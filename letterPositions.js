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

const letterPositions = function(string) {
  const positions = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") { // Skip spaces
      continue;
    } else if (positions.hasOwnProperty(string[i])) { // Check if array exists
      positions[string[i]].push(i)
    } else { // Create array if doesn't exist
      positions[string[i]] = [i];
    }
  }
  return positions;
};

console.log(letterPositions("Zaboomafoo"));
console.log(letterPositions("ZzZ"));