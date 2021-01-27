const {expect} = require('chai');
const {add} = require('./kata');

describe('add()', () => {
  it('should return 0 with no parameters', () => {
    const result = add();
    expect(result).to.equal(0);
  })

  it('should return the sum of the number in input separated by comma or new lines', () => {
    const result1 = add('1');
    const result2 = add('862,783');
    const result3 = add('1,2,3,4');
    const result4 = add('1\n2,3');
    const result5 = add('863\n783\n333');
    expect(result1).to.equal(1);
    expect(result2).to.equal(1645);
    expect(result3).to.equal(10);
    expect(result4).to.equal(6);
    expect(result5).to.equal(1979);
  })

  it('should accept custom delimiter if defined in first line', () => {
    const result1 = add('//;\n1;2');
    const result2 = add('//%\n1%2%33\n7');
    const result3 = add('//$\n1\n2\n9');
    expect(result1).to.equal(3);
    expect(result2).to.equal(43);
    expect(result3).to.equal(12);
  })

  it('should throw and error if one or more number are negative', () => {
    expect(() => add('1,-2')).to.throw('Negatives not allowed: -2');
    expect(() => add('-1,-2,-3')).to.throw('Negatives not allowed: -1, -2, -3');
  })

  it('should skip numbers greater than 1000', () => {
    const result1 = add('//;\n1001;2');
    const result2 = add('1001,1002');
    expect(result1).to.equal(2);
    expect(result2).to.equal(0);
  })
})