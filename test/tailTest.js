const assertEqual = require('../assertEqual');
const tail = require ('../tail');
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words).length, words.length - 1);
assertEqual(tail(["test"]).length, 0);
assertEqual(tail([]).length, 0);