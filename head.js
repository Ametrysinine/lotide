//assertEqual import start

const assertEqual = function(actual, expected) {

  const passMessage = `✔✔ Test passed ✔✔: ${actual} === ${expected}`;
  const failMessage = `❌ Test failed ❌: ${actual} !== ${expected}`;

  if (actual === expected) {
    console.log(passMessage);

  } else {
    console.log(failMessage);

  }
};

//assertEqual import end

const head = function(array) {
  if (Array.isArray(array)) {
    return array[0]; // Return first element of array
  } else {
    return "This is not an array.";
  }

};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");