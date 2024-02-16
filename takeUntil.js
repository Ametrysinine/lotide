const takeUntil = function(array, callback) {
  const newArray = [];
  for (let item of array) {
    if (callback(item)) {
      return newArray;
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = takeUntil;