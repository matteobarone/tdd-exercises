interface Prices {
  [item: string]: number;
}

interface Items {
  [item: string]: number;
}

interface Discounts {
  [item: string]: Discount;
}

interface Discount {
  cnt: number;
  price: number;
}

export class Checkout {
  public prices: Prices;

  public items: Items;

  public discounts: Discounts;

  constructor() {
    this.prices = {};
    this.items = {};
    this.discounts = {};
  }

  addItemPrice(item: string, price: number) {
    this.prices[item] = price;
  }

  addItem(item: string) {
    if (!this.prices[item]) {
      throw new Error(`No price for item ${item}`);
    }

    this.items[item] = this.items[item] ? this.items[item] + 1 : 1;
  }

  calculateTotal() {
    let total = 0;

    Object.keys(this.items).forEach((key) => {
      total += this.calculateItemTotal(key);
    });

    return total;
  }

  calculateItemTotal(item: string) {
    let total = 0;
    const discount = this.discounts[item];
    if (discount) {
      total += this.calculateDiscount(discount, item);
    } else {
      total += this.prices[item] * this.items[item];
    }

    return total;
  }

  calculateDiscount(discount: Discount, item: string) {
    let total = 0;
    const nOfDiscounts = this.items[item] / discount.cnt;
    total += nOfDiscounts * discount.price;
    const remainder = this.items[item] % discount.cnt;
    total += remainder * this.prices[item];
    return total;
  }

  addDiscount(item: string, cnt: number, price: number) {
    this.discounts[item] = { cnt, price };
  }
}
