const middle = function(array) {
  if (array.length === 1 || array.length === 2) { // If array is length 1 or 2, return empty array
    return [];
  } else {
    let sliceIndex = Math.floor((array.length - 1) / 2); // Slice according to length
    return array.slice(sliceIndex, -sliceIndex);
  }
};

module.exports = middle;