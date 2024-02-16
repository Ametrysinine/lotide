const without = function(array, blocklist) {
  const existsInArray = function(item, array) { // Checks if item is in array, helper function
    let i = 0;
  
    while (i < array.length) {
      if (item === array[i]) {
        return true;
  
      } else {
        i++;
      }
    }
  
    if (i === array.length) { // Return true after every comparing to every index in array
      return false;
    }
  };
  
  
  let cleanArray = [];

  
  for (let i = 0; i < array.length; i++) {
    if (!existsInArray(array[i], blocklist)) { // Add to result array if not in blocklist
      cleanArray.push(array[i]);
    }
  }

  return cleanArray;
};

module.exports = without;