const { expect } = require('chai');
const { Checkout } = require('./checkout');

describe('Checkout', () => {
  let checkout;

  beforeEach(() => {
    checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
  })

  it('Can calculate the current total', () => {  
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
  })

  it('Can add multiple items and get correct total', () => {    
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
  })

  it('Can apply discout rule to the total', () => {
    checkout.addDiscount('a', 3, 2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2);
  })

  it('Throw error if add item without price', () => {
    expect(() => checkout.addItem('c')).to.throw();
  })
})