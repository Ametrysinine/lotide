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

const tail = function(array) {
  let tailArray = [];
  if (Array.isArray(array)) {
    tailArray = array.slice(1);
    return tailArray;

  } else {
    return "This is not an array.";
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words).length, words.length - 1);
assertEqual(tail(["test"]).length, 0);
assertEqual(tail([]).length, 0);