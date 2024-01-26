// Below is the without function

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
      i++;
      removalIndex = 0;

    } else {
      removalIndex++;
    }

  }
  return cleanedArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["11", "11", "23"], ["11"])); // => ["23"]
console.log(without(["4", "4", "4"], ["4"])); // => []
console.log(without(["50", "25", "50", "10", "30"], ["50", "10"])); // => ["25", "30"]