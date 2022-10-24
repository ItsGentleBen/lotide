const assert = require('chai').assert;
const _ = require('../index')

describe("#tail", () => {
  
  it("returns ['Lighthouse', 'Labs'] for ['Hey', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(['Hey', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });

});