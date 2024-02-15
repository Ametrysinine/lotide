const head = function(array) {
  if (Array.isArray(array)) {
    return array[0]; // Return first element of array
  } else {
    return "This is not an array.";
  }

};

module.exports = head;