//ex 2

// "use strict";

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */

// function getSum(arr) {
//     let sumOfElements = 0;
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     for (let num of arr) {
//         sumOfElements += num;
//     }
//     return sumOfElements;
// }

// //console.log(getSum([1, 10, -10, 4])); // ==> 5
// //console.log(getSum([1])); // ==> 1
// //console.log(getSum([-8, 8])); // ==> 0
// console.log(getSum(10, 12, 14)); // ==> null

//ex 4
// "use strict";

// /**
//  * @param {number[]} numbers
//  * @return {number[]}
//  */
// function swap(numbers) {
//     let [a, ...restOfArr] = numbers;
//     return [...restOfArr, a];
// }

// /**
//  * @param {number[]} numbers
//  * @return {number[]}
//  */
// function swapManual(numbers) {
//     let lastElem = numbers.shift();
//     let newArr = numbers;

//     return newArr[lastElem];
// }

// // examples
// //console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
// console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]

// //ex 5

// function createEmptyArray(len) {
//     let emptyArr = [];
//     for (let i = 0; i <= len.length; i++) {
//         emptyArr.push(Array(len[i]));
//     }
//     return emptyArr;
// }
// console.log(createEmptyArray([1, 10, 9, 11]));

// //упражнение 6 Square Array

// ("use strict");

// // /**
// //  * @param {number[]} arr
// //  * @return {number[]}
// //  */

// function squareArray(arr) {
//     let newArr = [];
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     for (let num of arr) {
//         newArr.push(num * num);
//     }
//     return newArr;
// }

// // examples
// console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
// squareArray([10, 0, -4]); // ==> [100, 0, 16]
// squareArray([1]); // ==> [1]

// //упражнение 7 Проверка суммы

// function checkSums(numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//         sum += num;
//     }
//     if (Array.isArray(numbers) && sum > 100) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkSums([1, 10, 9, 11, 200]));
// console.log(checkSums("word"));

// //упражнение 8

// function increaseEvenEl(arr, delta) {
//     let evenElementsResult = [];
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenElementsResult[arr] = arr[i] + delta;
//         }
//     }
//     return evenElementsResult;
// }

// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
// // examples
// increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
// increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
// increaseEvenEl([], 120); // ===> []

// //Клонирование
// function cloneArr(arr) {
//     let newArr = arr.slice();
//     return newArr;
// }
// console.log(cloneArr([1, 2, 3, 4]));

//Reverse

// function reverseArray(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     let newArr = arr.slice();
//     for (let num of newArr) {
//         newArr.unshift(num);
//     }
//     return newArr;
// }

// console.log(reverseArray([1, 2, 3, 4]));

// function reverseArray(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     let copy = arr.slice(0);
//     return copy.reverse();
// }

// console.log(reverseArray([1, 2, 3, 4]));

//Сортировка массива

//Withdraw

function withdraw(clients, balances, client, amount) {
  for (let i = 0; i <= clients; i++) {
    if (clients[i].includes(client)) {
      return true;
    }
    return false;
  }
  // for (let j = 0; j <= balances.length; j++) {
  //     if (clients[i] === clients && amount < balances[j]) {
  //         return (restSum = balances[j] - amount);
  //     }
  //     return -1;
  // }
}
// console.log(withdraw(["Ann", "John", "User"], "John"));
// function withdraw(clients, client) {
//     for (let i = 0; i <= clients.length; i++) {
//         if ([i] == client) {
//             return true;
//         }
//         return false;
//     }
// }
// console.log(withdraw(["Ann", "John", "User"], "John"));

// let arr = ["Ann", "John", "User"];

// console.log(arr[John]);

// if (arr[1] == "Dima") {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const increaseEvenEl = (arr, delta) => {
//     // put your code here
//     let copy = arr.slice();
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             copy = arr[i] + delta;
//         }
//     }
//     return copy;
// };

// const increaseEvenEl = (arr, delta) => {
//     // put your code here
//     let copy = arr.slice();

//     if (!arr.isArr(arr)) {
//         return null;
//     }
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             copy[i] += delta;
//         }
//     }
//     return copy;
// };
// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));

// //Java Script Basics

// const students = ["Andrey", "Vova", "Alex", "Nastya", "Joda", "Skywoker"];

// // const thirdELem = student[3];

// // console.log(thirdELem);

// const arrLength = students.length;
// console.log(students[arrLength - 1]);

//SubArray

// function getSubArray(arr, num) {
//     let deletedElems = arr.splice(0, num);
//     return deletedElems;
// }

// console.log(getSubArray([11, 4, 8, 3], 3));

// //includes

// const includes = (arr, num) => {
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] === num) {
//             return true;
//         }
//     }
//     return false;
// };

// console.log(includes([1, 4, 8, 3], 3));
// console.log(includes([1, 4, 8, 3], 5));

// //Дупликат массива

// function removeDuplicates(arr) {
//     let newArr = [];
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] !== arr[i]) {
//             newArr.push([i]);
//         }
//     }

//     return newArr;
// }

// console.log(removeDuplicates([1, 4, 8, 3, 4, 4, 3]));

// let varifiedName = false;
// let varifiedBalance = false;

// for (let i = 0; i <= clients.length; i++) {
//     if (clients[i] === client) {
//         varifiedName = true;
//     }
// }
// console.log(varifiedName);
// for (let i = 0; i <= balances.length; i++) {
//     if (clients[i] === balances[i]) {
//         varifiedBalance = true;
//     }
// }
// console.log(varifiedBalance);
// if (
//     varifiedName === true &&
//     varifiedBalance === true &&
//     amount > balances[a]
// ) {
//     return balances[i] - amount;
// } else {
//     return -1;
// }

// console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "Mamur", 50));

// function withdraw(clients, balances, client, amount) {
//     for (let i = 0; i <= clients.length; i++) {
//         for (let j = 0; j <= balances.length; j++) {
//             if (
//                 clients.includes(client) &&
//                 balances.includes(clients.indexOf(client, 0))
//             ) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John"));

// let clientsNames = ["Ann", "John", "User"];
// let clientsBalances = [1400, 87, -6];
// let varifiedUser = false;

// if (clientsNames.includes("Ann")) {
//     varifiedUser = true;
// }
// console.log(varifiedUser);

// let array = ["Ann", "John", "User"];

// console.log(array.indexOf("John"));

// let array2 = [1400, 87, -6];

// let balance = array2[array.indexOf("John")];
// // console.log(array2[array.indexOf("John")]);
// let amount = 50;
// let output;

// if ( balance > amount) {
//     output = balance - amount;
// } else {
//     console.log(-1);
// }

// console.log(output);

// function withdraw(clients, balances, client, amount) {
//     let userAccount;

//     for (let i = 0; i <= clients.length; i++) {
//         for (let j = 0; j <= balances.length; j++) {
//             userAccount = balances[clients.indexOf(client)];
//         }
//     }
//     if (userAccount > amount) {
//         userAccount -= amount;
//     } else {
//         return -1;
//     }

//     return userAccount;
// }
// console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));

// function removeDuplicates(array) {
//     let newArr = [];
//     for (let i = 0; i <= array.length; i++) {
//         if (!array[i] == array[i]) {
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }

// console.log(removeDuplicates(["Ann", "John", "User", "Ann", "John"]));

// function removeDuplicates(array) {
//     let newArr = [];

//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     for (let i = 0; i <= array.length; i++) {
//         if (!newArr.includes(array[i])) {
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }
// console.log(removeDuplicates(["Ann", "John", "User", "Ann", "John"]));

// function removeDuplicates(array) {
//     let newArr = [];

//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     for (let i = 0; i <= array.length; i++) {
//         if (newArr[i] !== array[i]) {
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }

// console.log(removeDuplicates(["Ann", "John", "User", "Ann", "John"]));

// function removeDuplicates(array) {
//     let uniques = 0;

//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     for (let i = 0; i <= array.length; i++) {
//         if (array[i] !== array[i]) {
//             uniques += 1;
//         }
//     }
//     return newArr;
// }
// console.log(removeDuplicates(["Ann", "John", "User", "Ann", "John"]));

// function sortAsc(array) {
//     // let minElem = Math.min(...array);
//     // let a = array[0];
//     // let b = array[1];
//     let newArr = [];

//     for (let i = 0; i <= array.length; i++) {
//         if (array[i] > array[i - 1]) {
//             continue;
//         }
//         newArr.unshift(array[i]);
//     }
//     return newArr;
// }
// console.log(sortAsc([100, 0, 50, 20, 30]));

// let array = [100, 0, 50];

// in: number
// out: arr
// num => arr (of num)
// 1. creat empty arr
// 2. apply the num to create the length

function createEmptyArray(len) {
  let newArray = [];
  newArray.length = len;
  return newArray;
}

console.log(createEmptyArray(10));
