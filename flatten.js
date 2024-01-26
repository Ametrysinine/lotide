const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flatArray.push(array[i]);
    } else {
      for (let subIndex = 0; subIndex < array[i].length; subIndex++) {
        flatArray.push(array[i][subIndex]);
      }
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));