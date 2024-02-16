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

module.exports = countLetters;