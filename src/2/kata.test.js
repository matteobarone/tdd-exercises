const {expect} = require('chai');
const {add} = require('./kata');

describe.only('add()', () => {
  it('should return 0 with no parameters', () => {
    const result = add();
    expect(result).to.equal(0);
  })

  it('should return the sum of the number in input separated by comma, if two', () => {
    const result1 = add('1');
    const result2 = add('45');
    const result3 = add('1,2');
    const result4 = add('2361,7832');
    const result5 = add('1,2,3,4');
    const result6 = add('0,0,0,0,0,1,0');
    expect(result1).to.equal(1);
    expect(result2).to.equal(45);
    expect(result3).to.equal(3);
    expect(result4).to.equal(10193);
    expect(result5).to.equal(10);
    expect(result6).to.equal(1);
  })
})