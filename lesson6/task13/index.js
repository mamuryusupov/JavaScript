// function removeDuplicates(array) {
//     if (!Array.isArray(array)) {
//         return null;
//     }

//     let arr = [];
//     for (let i = 0; i < array.length; i++) {
//         let temp = array[i];
//         let j = 0;
//         for (; j < array.length; j++) {
//             if (temp === array[j] && i !== j) {
//                 break;
//             }
//         }
//         if (j >= arr.length) {
//             arr.push(temp);
//         }
//     }
//     return arr;
// }

//
// function removeDuplicates(array) {
//     if (!Array.isArray(array)) {
//         return null;
//     }
//     let sortedElements = [];
//     for (let i = 0; i <= array.length - 1; i++) {
//         let temp = array[i];
//         let j = 0;
//         for (; j <= sortedElements.length - 1; j++) {
//             if (temp === sortedElements[j] && i !== j) {
//                 break;
//             }
//         }
//         if (j >= sortedElements.length) {
//             sortedElements.push(temp);
//         }
//     }

//     return sortedElements;
// }
// console.log(removeDuplicates([2, 2, 2, 4, 6, 7, 10, 10, 20, 21, 20]));

// in arr arr string num
// num / num

// 1. check if the elem exist in arr
// 2. loop clients arr to find and safe the index of elem
// 3. loop balance and check of clients index has required number
// 4. return balance of client
// 5. return -1

// function findCLient(clients, client) {
//   let isClient = false;
//   for (let i = 0; i < clients.length; i += 1) {
//     const clientName = clients[i];
//     if (clientName === client) {
//       isClient = true;
//       break;
//     }
//   }
//   return isClient;
// }

function withdraw(clients, balances, client, amount) {
  let isClient;
  let clientsBalance;

  for (let i = 0; i < clients.length; i += 1) {
    const clientName = clients[i];
    if (clientName === client) {
      isClient = i;
      // console.log(isClient);
      break;
    }
  }
  for (let i = 0; i < balances.length; i += 1) {
    // console.log(balances[i]);
    if (i === isClient && balances[i] > amount) {
      console.log(isClient);
      clientsBalance = balances[i];
      console.log(clientsBalance);
      clientsBalance -= amount;
    } else {
      return -1;
    }
  }
  console.log(clientsBalance);

  return clientsBalance;
}

// const balancesOfCLients1 = [1400, 87, -6];
// const listOfUsers1 = ['Ann', 'John', 'User'];
const balancesOfCLients2 = [300, 999, -467];
const listOfUsers2 = ['Dima', 'Elya', 'Mamur'];
// console.log(withdraw(listOfUsers1, balancesOfCLients1, 'User', 50));
console.log(withdraw(listOfUsers2, balancesOfCLients2, 'Mamur', 50));
