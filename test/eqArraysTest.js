const assert = require('chai').assert;
const _ = require('../index')

describe("#eqArrays", () => {
  
  it("returns [1, 2, 3] is [1, 2, 3]", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns '[1, 2, 3] is [3, 2, 1]", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });

});