const tail = function(array) {
  let tailArray = [];
  if (Array.isArray(array)) {
    tailArray = array.slice(1);
    return tailArray;

  } else {
    return undefined;
  }
};

module.exports = tail;