const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert(assertArraysEqual([1, 2, 3], [1, 2, 3]), "Not equal");
  });

  it("returns false for [1, 2, 3] and [1, 2, 4]", () => {
    assert(!assertArraysEqual([1, 2, 3], [1, 2, 4]), "Equal");
  });

  it("returns false for [1, 2, 3] and [2. 4]", () => {
    assert(!assertArraysEqual([1, 2, 3], [2, 4]), "Equal");
  });


  it("returns false for [1, 2, 3] and [1, 2, 3, 4]", () => {
    assert(!assertArraysEqual([1, 2, 3], [1, 2, 3, 4]), "Equal");
  });
});

