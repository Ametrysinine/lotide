const tail = function(array) {
  let tailArray = [];
  if (Array.isArray(array)) {
    tailArray = array.slice(1);
    return tailArray;

  } else {
    return "This is not an array.";
  }
};

module.exports = tail;