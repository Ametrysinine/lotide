const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
