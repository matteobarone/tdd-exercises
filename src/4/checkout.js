class Checkout {
  constructor() {
    this.prices = {};
    this.items = {};
    this.discounts = {};
  }

  addItemPrice(item, price) {
    this.prices[item] = price;
  }

  addItem(item) {
    if (!this.prices[item]) {
      throw(`No price for item ${item}`);
    }
    if (this.items[item]) {
      this.items[item]++
    } else {
      this.items[item] = 1
    }
  }

  calculateTotal() {
    let total = 0;
    for (let item in this.items) {
      total += this._calculateItemTotal(item);
    }
    return total;
  }

  _calculateItemTotal(item) {
    let total = 0;
    const discount = this.discounts[item];
    if (discount) {
      total += this._calculateDiscount(discount, item);
    } else {
      total += this.prices[item] * this.items[item];
    }

    return total;
  }

  _calculateDiscount(discount, item) {
    let total = 0;
    const nOfDiscounts = this.items[item] / discount.cnt;
    total += nOfDiscounts * discount.price;
    const remainder = this.items[item] % discount.cnt;
    total += remainder * this.prices[item];
    return total;
  }

  addDiscount(item, cnt, price) {
    this.discounts[item] = {cnt, price};
  }
}

module.exports = {
  Checkout
}