const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  it("returns ['Lighthouse', 'Labs'] for ['Hey', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hey', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });

});