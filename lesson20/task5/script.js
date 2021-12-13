'strict mode';

class Order {
  constructor(price, city, type, ID) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.ID = Math.random().toString(ID);
    this.isConfirmed = false;
    this.dateCreated = new Date();
  }
  checkPrice() {
    if (this.price > 1000) {
      console.log(true);
    }
    console.log(false);
  }
  confirmOrder() {
    if (!this.confirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  invalidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      console.log(true);
    }
    console.log(false);
  }
}

const newOrder1 = new Order(20, 'Sumy', 'Buy');
console.log(newOrder1);
newOrder1.checkPrice();
newOrder1.confirmOrder();

const newOrder2 = new Order(1001, 'Kyiv', 'Sell');
console.log(newOrder2);
newOrder2.checkPrice();

// const newOrder2 = new Order('Mamur', 'Yusupov');
// console.log(newOrder2);
