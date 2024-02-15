const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;

  } else {
    for (let i in arrayOne) { // Compare each item in array
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqArrays;