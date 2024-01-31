const assertEqual = function(actual, expected) { // import assertEqual

  const passMessage = `✔✔ Test passed ✔✔: ${actual} === ${expected}`;
  const failMessage = `❌ Test failed ❌: ${actual} !== ${expected}`;

  if (actual === expected) {
    console.log(passMessage);

  } else {
    console.log(failMessage);

  }
};

const countLetters = function(string) {
  const letterCount = {};

  for (let i of string) {
    if (i === " ") { // Skip spaces
      continue;
    } else if (letterCount.hasOwnProperty(i)) { // Check if property exists
      letterCount[i] += 1;
    } else { // Create property if doesn't exist
      letterCount[i] = 1;
    }
  }

  return letterCount;
};

console.log(countLetters("Lighthouse Labs"));