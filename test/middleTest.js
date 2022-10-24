const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  
  it("returns middle is na", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns middle is 2, 3", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });

});
