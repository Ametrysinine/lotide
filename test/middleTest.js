const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Pass
assertArraysEqual(middle([1, 2]), []); // Pass
assertArraysEqual(middle([1]), []); // Pass
