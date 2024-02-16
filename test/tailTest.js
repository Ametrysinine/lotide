const tail = require ('../tail');
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns ['Bob', 'Carol'] for ['Alice', 'Bob', 'Carol']", () => {
    assert.deepEqual(tail(["Alice", "Bob", "Carol"]), ["Bob", "Carol"]);
  });

});