//перебор элементов

// function sum(numbers) {
//     let sumOfArray = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
//         sumOfArray += numbers[i];
//     }
//     return sumOfArray;
// }

//Продвинутый массив for of
//Продвинутый массив for in  работает для объектов

// function sum(numbers) {
//     let sumOfArray = 0;
//     for (let num of numbers) {
//         // в переменную num получаем каждый последующий элемент numbers
//         console.log(num);
//         sumOfArray += num;
//     }
//     return sumOfArray;
// }
// const numbers = [11, 22, 33, 44, 55, 66];

// const sumOfElements = sum(numbers);
// console.log("Result: " + sumOfElements);
// const numbers = [11, 22, 33, 55, 66];

// const arr = numbers;

// arr[2] = 1000; // присваивание массива

// console.log(numbers);
//_____________________________

// function sum(numbers) {
//     let sumOfNumbers = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
//         sumOfNumbers += numbers[i];
//     }
//     return sumOfNumbers;
// }

// const sumOfNumbers = sum(numbers);
// console.log("Result: " + sumOfNumbers);

// const numbers = [11, 22, 33, 55, 66];
// const arr = numbers;
// arr[2] = 1000;
// console.log(numbers);

// const numbers = [11, 22, 33, 55, 66];

// function sum(numbers) {
//     let sumOfNumbers = 0;

//     for (let num of numbers) {
//         sumOfNumbers += num;
//     }
//     return sumOfNumbers;
// }

// const sumOfNumbers = sum(numbers);
// console.log("Result: " + sumOfNumbers);

// function getSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (!Array.isArray(arr)) {
//             return null;
//         } else {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// console.log(getSum([1, 10, -10, 4])); // ==> 5
// console.log(getSum([1])); // ==> 1
// console.log(getSum([-8, 8])); // ==> 0;
// console.log(getSum(10, 12, 14)); // ==> null;

/////////////////////////////////
// Restart
// Перебор массива
// const numbers = [11, 22, 33, 55, 66];

// for (let i = 0; i <= numbers.length - 1; i++) {
//     //i < numbers.length одно и тоже
//     console.log(numbers[i]);
// }

// Сумма
// const numbers = [11, 22, 33, 55, 66];

// function sum(numebrs) {
//     let sumOfNumbers = 0;
//     for (let i = 0; i <= numbers.length - 1; i++) {
//         //i < numbers.length одно и тоже
//         console.log(numbers[i]);
//         sumOfNumbers += numbers[i];
//     }
//     return sumOfNumbers;
// }

// const sumOFelements = sum(numbers);

// console.log("Result: " + sumOFelements);

//Присваивания значения элементам
// const numbers = [11, 22, 33, 55, 66];
// const arr = numbers;

// arr[2] = 1000;

// console.log(numbers);

//Homework

// function getSum(arr) {
//     // put your code here
//     let sumOfElems = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumOfElems += arr[i];
//     }
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     return sumOfElems;
// }

// // examples
// console.log(getSum([1, 10, -10, 4])); // ==> 5
// console.log(getSum([1])); // ==> 1
// console.log(getSum([-8, 8])); // ==> 0
// console.log(getSum(10, 12, 14)); // ==> null

// Перебор массива
const numbers = [11, 22, 33, 55, 66];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(i);
}
