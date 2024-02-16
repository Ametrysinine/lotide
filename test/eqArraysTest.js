const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns false for [1, 2, 3,  4] and [1, 2, 3]", () => {
    assert(!eqArrays([1, 2, 3, 4], [1, 2, 3]), "Not returning false");
  });

  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert(eqArrays([1, 2, 3], [1, 2, 3]), "Not returning true");
  });
});

