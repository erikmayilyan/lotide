const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 3 in an array for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns 2 & 3 in an array for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns 3 & 4 in an array for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns empty in an array for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns empty in an array for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

