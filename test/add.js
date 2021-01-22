const { expect } = require('chai');
const add = require('../add.js');

describe('add function', () => {
  it('make 1 + 1 = 2', () => {
    expect(add(1,1)).to.eq(2);
  });
})
