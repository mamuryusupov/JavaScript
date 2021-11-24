//Option 1
// const getSpecialNumbers = (numbers) => {
//     let specialNumbers = [];
// // Перебор с итерацией
//     // for (let i = 0; i < numbers.length; i++) {
//     //     console.log();

//     if (numbers[i] % 3 === 0) {

//         specialNumbers.push(numbers[i]);
//     }
// }
//     return specialNumbers;
// };

// console.log(getSpecialNumbers([1, 2, 4, 5, 6]));

//Option 2
//Callback функция
// function checkIfSpecialNumbers(num) {
//     if (num % 3 === 0) {
//         specialNumbers.push(num);
//     }
// }

//For each применяется для каждого элемента
//Option 2

// const getSpecialNumbers = (numbers) => {
//     let specialNumbers = [];

//     //Методы массива принимаю функцию

//     numbers.forEach( num => {
//         if (num % 3 === 0) {
//             specialNumbers.push(num);
//         }
//     }
//     );

//     return specialNumbers;
// };

// console.log(getSpecialNumbers([1, 2, 4, 5, 6, 9]));

//Option 3
//Сортировка
// const getSpecialNumbers = (numbers) => {
//     // let specialNumbers = [];

//     //Методы массива принимаю функцию

//     const result = numbers.filter((num) => {
//         return num % 3 === 0 ? true : false;
//     });

//     return result;
// };

// console.log(getSpecialNumbers([1, 2, 4, 5, 6, 9, 21]));

// const getSpecialNumbers = (arr) => {
//     const ifAliquote = (number) => {
//         if (number % 3 === 0) {
//             return number;
//         }
//         return false;
//     };
//     return arr.filter(ifAliquote);
// };

// const initialArray = [1, 3, 9, 11, 12, 2];
// console.log(getSpecialNumbers(initialArray));

// Можно объявить снаружи
//   function checkIfSpecialNumber(num) {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   }
const getSpecialNumbers = numbers => numbers.filter(num => num % 3 === 0);
//   const specialNumbers = [];

//   const result = numbers.forEach(num => {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });

//   return result;

const array = [1, 2, 30, 35, 45, 30];
console.log(getSpecialNumbers(array));
