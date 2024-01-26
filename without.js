const existsInArray = function(item, array) {
  let i = 0;

  while (i < array.length) {
    if (item === array[i]) {
      return true;

    } else {
      i++;
    }
  }

  if (i === array.length) {
    return false;
  }
};

const without = function(array, blocklist) {
  let cleanArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!existsInArray(array[i], blocklist)) {
      cleanArray.push(array[i]);
    }
  }

  return cleanArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["11", "11", "23"], ["11"])); // => ["23"]
console.log(without(["4", "4", "4"], ["4"])); // => []
console.log(without(["50", "25", "50", "10", "30"], ["50", "10"])); // => ["25", "30"]