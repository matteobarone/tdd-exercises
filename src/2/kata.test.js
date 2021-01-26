const {expect} = require('chai');
const {add} = require('./kata');

describe('add()', () => {
  it('should return 0 with no parameters', () => {
    const result = add();
    expect(result).to.equal(0);
  })

  it('should return the sum of the number in input separated by comma or new lines', () => {
    const result1 = add('1');
    const result2 = add('2361,7832');
    const result3 = add('1,2,3,4');
    const result4 = add('1\n2,3');
    const result5 = add('2361\n7832\n333');
    expect(result1).to.equal(1);
    expect(result2).to.equal(10193);
    expect(result3).to.equal(10);
    expect(result4).to.equal(6);
    expect(result5).to.equal(10526);
  })

  it('should accept custom delimiter if defined in first line', () => {
    const result1 = add('//;\n1;2');
    const result2 = add('//%\n1%2%33\n7');
    const result3 = add('//$\n1\n2\n9');
    expect(result1).to.equal(3);
    expect(result2).to.equal(43);
    expect(result3).to.equal(12);
  })
})