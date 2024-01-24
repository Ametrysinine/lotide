const assertEqual = function(actual, expected) {

  const passMessage = "✔✔ Test passed ✔✔: " + actual + " ===  " + expected;
  const failMessage = "❌ Test failed ❌: " + actual + " !== " + expected;

  if (actual === expected) {
    console.log(passMessage);

  } else {
    console.log(failMessage);

  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);