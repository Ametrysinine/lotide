const head = function(array) {
  if (Array.isArray(array)) {
    return array[0]; // Return first element of array
  } else {
    return undefined;
  }

};

module.exports = head;