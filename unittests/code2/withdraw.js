export const withdraw = (clients, balances, client, amount) => {
  const clientNum = clients.indexOf(client);
  let clientBalance = balances[clientNum];
  if (clientBalance > amount) {
    clientBalance -= amount;
  } else {
    return -1;
  }
  return clientBalance;
};

const users1 = ['Ann', 'John', 'User'];
const usersBalances = [1400, 87, -6];
console.log(usersBalances);

console.log(withdraw(users1, usersBalances, 'Mamur', 50));
console.log(usersBalances);

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

// output
// -1
// и массив balances должен быть [1400, 87, -6]
