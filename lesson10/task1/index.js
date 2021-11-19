// //Numbers

// //Целые и дробные чила = Numbers
// const price = 5.95;
// const amount = 3;
// const total = 5.95 * 3; // 17.85

// const a = Infinity;
// const b = -Infinity;
// const c = NaN;
// const d = -0;
// const e = 0;

// const hexNumber = 0x11; // 17 //16 ричная
// const octalNumber = 0o11; // 9
// const binaryNumber = 0b11; // 3 бинарная система

// const distance = 1.7e5; //170000
// const space = 1.7e-5; // 0.000017

// //Операция с числами

// //Унарный плюс приводит значение к числу

// typeof "17"; // 'number'

// //Математические операции с числами приводят другие аргументы к числам, кроме плюса

// 17 - "1"; // 16
// //Матем опер с значением, которые нельзя привести к числу вернут NaM
// 17 - undefined; //NaN

// //Методы чисел

// console.log(Number("34"));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number("String"));

// console.log(Number.isNaN("Text")); // false
// //Глобальный объект
// console.log(isNaN("Text")); //true
// console.log(NaN == NaN); //false

// console.log(Number.isFinite("17")); //false
// console.log(isFinite("17")); //true

// console.log(Number.isInteger(17)); //true
// console.log(Number.isInteger(17.17)); //false
// console.log(Number.isInteger(17.0)); //true
// console.log(Number.isInteger(Infinity)); //false

// //Метод парсинга чисел

// //Option 1 извлечение целого числа
// console.log(parseInt("17.17text")); //17
// console.log(parseInt("12px")); //12

// //Option 2 считывает дробные чисел
// console.log(parseFloat("17.17text")); //17.17
// console.log(parseFloat("17.17.99text")); //17.17
// console.log(parseFloat("seventeen")); //NaN

// console.log(parseFloat === Number.parseFloat); //true
// console.log(isFinite === Number.isFinite); //false

// //Пример
// const parseArray = (arr) => {
//     const result = arr.map((el) => Number.parseFloat(el));
//     return result;
// };

// const elementsList = [4, 5.6, "  5.7kl", null, NaN, Infinity, undefined];
// console.log(parseArray(elementsList));

// //Пример 2

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2); //теряется точность

// //Объект Math

// console.log(Math.ceil(17.17));
// console.log(Math.floor(17.71));
// console.log(Math.round(-17.5));
// console.log(Math.trunc(-17.5));

// console.log(Math.abs(-17));
// console.log(Math.max(5, 7, 17, 1));
// console.log(Math.min(5, 7, 1, -4));

// console.log(Math.pow(3, 4));
// console.log(Math.sqrt(9));

//Пример

//num => [];

// const multiRound1 = (num) => [
//     Math.round(num * 100) / 100,
//     Math.floor(num * 100) / 100,
//     Math.ceil(num * 100) / 100,
//     Math.trunc(num * 100) / 100,
//     num.toFixed(2),
// ];

// console.log(multiRound1(-17.1));
// // console.log(multiRound1(Math.PI));

// console.log(Math.PI + 1000);
// console.log(Math.PI * 1000);
// console.log(Math.round(Math.PI * 1000) / 1000);

// //toFixed
// console.log(Math.PI.toFixed(3));

// console.log(Number(Math.PI.toFixed(3)));
// console.log(+Math.PI.toFixed(3));

// console.log((0.1 * 34 + 0.2 * 17).toFixed(2));

//GetMaxAbsoluteNumber

//[2, -6, 78, -99] => 99

//Option 1
// const getMaxAbsoluteNumber = arr => {

//     let max = -Infinity;
//     arr.forEach(num => {
//         if (Math.abs(num) > max) {
//             max= Math.abs(num);
//         }
//     })
//     return  max;
// }

//Option 2

// const getMaxAbsoluteNumber = (arr) => {
//     const absoluteValues = arr.map((num) => Math.abs(num));

//     const max = Math.max(...absoluteValues);
//     return max;
// };

// console.log(getMaxAbsoluteNumber([-2, -6, -78, -99]));
// 1 - find absolute value
// 2 - find max

// //Funct 1
// const getFiniteNumbers = (arr) => arr.filter((num) => Number.isFinite(num));

// //Func 2
// const getFiniteNumbersV2 = (arr) => arr.filter((num) => isFinite(num));

// // Func 3
// const getNaN = (arr) => arr.filter((num) => Number.isNaN(num));

// // Func 4
// const getNaNV2 = (arr) => arr.filter((num) => isNaN(num));

// //Func 5

// const getIntergers = (arr) => arr.filter((num) => Number.isInteger(num));

// let initialArr = [2, 3.4, 18.99, 230, Infinity, NaN, -Infinity, "0"];
// let initialArrMultiple = [2, 3.4, 18.99, 230, null, NaN, undefined];

// console.log(getFiniteNumbers(initialArr));
// console.log(getFiniteNumbersV2(initialArr));
// console.log(getNaN(initialArrMultiple));
// console.log(getNaNV2(initialArrMultiple));
// console.log(getIntergers(initialArr));

//Parsing

//func 1

// const getParsedIntegers = (arr) => arr.map((num) => Number.parseInt(num));

// //funct 2
// const getParsedIntegersV2 = (arr) => arr.map((num) => parseInt(num));

// //func 3

// const getParsedFloats = (arr) => arr.map((num) => Number.parseFloat(num));

// //func 4

// const getParsedFloatsV2 = (arr) => arr.map((num) => parseFloat(num));

// //func 5

// let initialArr = [2, 3.4, 18.99, "230.19ly", "20.30.4"];
// console.log(getParsedIntegers(initialArr));
// console.log(getParsedIntegersV2(initialArr));
// console.log(getParsedFloats(initialArr));
// console.log(getParsedFloatsV2(initialArr));

const multiRound = (num) => {
    let mathOperations = [
        Math.floor(num * 100) / 100,
        Math.round(num * 100) / 100,
        Math.ceil(num * 100) / 100,
        Math.trunc(num * 100) / 100,
        Number(num.toFixed(2)),
    ];
    return mathOperations;
};

console.log(multiRound(-2));
console.log(multiRound(2.14));

// const getMaxAbsoluteNumber = (arr) => {
//     if (!Array.isArray(arr) || !arr.length) {
//         return null;
//     }

//     const wholeNums = arr.map((num) => {
//         return Math.abs(num);
//     });

//     let maxNum = Math.max(...wholeNums);
//     return maxNum;
// };

// let initialArr = [2, 3.4, 18.99];

// console.log(getMaxAbsoluteNumber(initialArr));
// console.log(getMaxAbsoluteNumber("initialArr"));
// console.log(getMaxAbsoluteNumber([]));

// console.log(Math.abs(1.2));
// console.log(Math.abs(-2));

// const getTotalPrice = (arr) => {
//     let totalSum = arr.reduce((accum, num) => {
//         let total = accum + num;
//         let roundNum = Math.floor(total * 100) / 100;
//         return roundNum;
//     }, 0);
//     return '$' + totalSum;
// };

// let initialArr = [2, 3.4, 18.99, 27.289];
// console.log(getTotalPrice(initialArr));

// const superRound = (num, prec) => {
//   // put your code here
// };

// const superRound = (num, prec) => {
//     const precision = 10 ** prec;
//     let newArr = [
//         Math.floor(num * precision) / precision,
//         Math.trunc(num * precision) / precision,
//         Math.ceil(num * precision) / precision,
//         Math.round(num * precision) / precision,
//         Number(num.toFixed(prec)),
//     ];
//     return newArr;
// };

// //examples
// console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]