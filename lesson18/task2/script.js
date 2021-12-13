// заимствование методов

// [1, 2, 3];
// Math.max(1, 2, 3);
// Math.max.apply(null, [1, 4, 20]);

const wallet = {
  transaction: [1, 5, 89, 337, 3],
  getMax() {
    return Math.max(...this.transaction);
  },
  getMin() {
    return Math.min(...this.transaction);
  },
};
console.log(wallet.getMax());
console.log(wallet.getMin());
