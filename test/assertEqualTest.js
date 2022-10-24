const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  
  it("returns 'Lighthouse Labs' not equal to 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("returns 1 is 1", () => {
    assert.strictEqual(assertEqual(1, 1)); 
  });

});