const {expect} = require('chai');
const {waitAndPrint, waitAndPrintPromise} = require('./async');

describe('Asyncronous code', () => {
  it('should print foo from a callback after 50ms', (done) => {
    waitAndPrint((result) => {
      expect(result).to.equal('foo');
      done();
    })
  })

  it('should print bar from a promise after 50ms', () => {
    return waitAndPrintPromise().then((result) => {
      expect(result).to.equal('bar');
    })
  })

  it('should print bar from a promise after 50ms using async/await', async () => {
    const result = await waitAndPrintPromise();
    expect(result).to.equal('bar');
  })
})