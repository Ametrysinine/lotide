const assertEqual = function(actual, expected) {

  const passMessage = `✔✔ Test passed ✔✔: ${actual} === ${expected}`;
  const failMessage = `❌ Test failed ❌: ${actual} !== ${expected}`;

  if (actual === expected) {
    console.log(passMessage);

  } else {
    console.log(failMessage);

  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  let arraysEqual = true;

  if (arrayOne.length !== arrayTwo.length) {
    arraysEqual = false;

  } else {
    for (let i in arrayOne) {
      if (arrayOne[i] !== arrayTwo[i]) {
        arraysEqual = false;
      }

    }



  }

  return arraysEqual;
};
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS