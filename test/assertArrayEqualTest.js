const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  });

  it("returns ['1', '2', '3'] for ['1', 2, '3']", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", 2, "3"])); 
  });

});
