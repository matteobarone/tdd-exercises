const {expect} = require('chai');
const {fizzBuzz} = require('./fizzBuzz');

function checkFizzBuzz(testValue, expectedResult) {
  const result = fizzBuzz(testValue);
  expect(result).to.equal(expectedResult);
}

describe('fizzBuzz()', () => {
  it('Should get "1" when I pass in 1', () => {
    checkFizzBuzz(1, '1');
  });
  
  it('Should get "2" when I pass in 2', () => {
    checkFizzBuzz(2, '2');
  });
  
  it('Should get "Fizz" when I pass in 3', () => {
    checkFizzBuzz(3, 'Fizz');
  });
  
  it('Should get "Buzz" when I pass in 5', () => {
    checkFizzBuzz(5, 'Buzz');
  });
  
  it('Should get "FizzBuzz" when I pass in a multiple of 3 and 5', () => {
    checkFizzBuzz(15, 'FizzBuzz');
    checkFizzBuzz(60, 'FizzBuzz');
  });
});
