const assert = require('chai').assert;
const _ = require('../index')

describe("#middle", () => {
  
  it("returns middle is na", () => {
    assert.deepEqual(_.middle([1, 2]), []);
  });

  it("returns middle is 2, 3", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]); 
  });

});