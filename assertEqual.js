const assertEqual = function(actual, expected) {

  const passMessage = `✔✔ Test passed ✔✔: ${actual} === ${expected}`;
  const failMessage = `❌ Test failed ❌: ${actual} !== ${expected}`;

  if (actual === expected) {
    console.log(passMessage);
    return true;
  } else {
    console.log(failMessage);
    return false;
  }
};

module.exports = assertEqual;