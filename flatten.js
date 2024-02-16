const flatten = function(array) {
  let flatArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flatArray.push(array[i]);

    } else {
      for (let subIndex = 0; subIndex < array[i].length; subIndex++) { // Flattens one level of subarray
        flatArray.push(array[i][subIndex]);
      }
    }
  }
  return flatArray;
};

module.exports = flatten;