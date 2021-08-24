const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 & 3 in an array for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns Lighthouse & Labs in an array for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});