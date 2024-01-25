const without = function(array, itemsToRemove) {
  let cleanedArray = [];
  let removalIndex = 0;
  let i = 0;

  while (i < array.length) {
    if (removalIndex === itemsToRemove.length) {
      cleanedArray.push(array[i]);
      i++;
      removalIndex = 0;

    } else if (array[i] === itemsToRemove[removalIndex]) {
      removalIndex = 0;
      i++;
    } else {
      removalIndex++;
    }


  }

  return cleanedArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]