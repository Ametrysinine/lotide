const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs', 'Bootcamp'", () => {
    assert(!assertEqual("Lighthouse Labs", "Bootcamp"), "Equal");
  });

  it("returns true for 1 and 1", () => {
    assert(assertEqual(1, 1), "Not equal");
  });

  it("returns true for 'Lighthouse Labs' and 'Lighthouse Labs'", () => {
    assert(assertEqual("Lighthouse Labs", "Lighthouse Labs"), "Not equal");
  });


  it("returns false for 1 and 0", () => {
    assert(!assertEqual(1, 0), "Equal");
  });
});


