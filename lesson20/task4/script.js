// Wallet

class Wallet {
  _balance = 0;

  // contructor() {
  // }
  getBalance() {
    return this._balance;
  }
  deposit(amount) {
    this._balance += amount;
  }
  withdraw(amount) {
    if (amount > this._balance) {
      console.log('No enough funds');
      return;
    }
    this._balance -= amount;
  }
}

const wallet1 = new Wallet();
// console.log(wallet1._balance);
console.log(wallet1.getBalance());
wallet1.deposit(100);
wallet1.withdraw(89);
console.log(wallet1.getBalance());
