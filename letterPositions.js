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

module.exports = letterPositions;