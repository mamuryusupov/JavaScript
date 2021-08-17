//Массивы
//1 способ с помощью литерала
// let numbers = [11, 22, 33];

// let numberOfElements = numbers.length;

// console.log(numberOfElements);
// console.log("Element number #1: " + numbers[1]); //доступ к элементам
// console.log("Element number #0: " + numbers[0]); //доступ к элементам
// console.log("Element number last: " + numbers[numbers.length - 1]); //доступ к элементам

//Статический метод Array.isArray() проверяет является ли элемент массивом
//Задача
// [11, 22, 33, 44, 55, 66] => [length, firts elem, last elem]
// let numbers = [11, 22, 33, 44, 55, 66];

// function getArrayBound(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     return [arr.length, arr[0], arr[arr.length - 1]];
// }
// const arrayBound = getArrayBound([1, 2, 3]);
// console.log(arrayBound);

// // второй способо с помощью функции кантруктора. Редко используется
// const arr = new Array();

//Пример
// new Array (); = [] пустой массив
// new Array (1, 2, 3); = [1, 2, 3]
// new Array (6); = [empty × 6] массив из 6 пустых элементов

//---------------------------
// //первый способо

//
// // второй сопосбо создание массива
// //const arr = new Array();

// //длина массива
// const numbersOfElements = numbers.length;
// console.log(numbersOfElements);

// // доступа к элементам можно получить черезе индексы
// console.log("Element #1: " + numbers[1]);
// console.log("Element #0: " + numbers[0]);
// console.log("Element last: " + numbers[numbers.length - 1]);

//[11, 22, 33, 55, 66] => [length, first ele, las ele]
// const numbers = [11, 22, 33, 55, 66];

// function getArrayBound(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     return [arr.length, arr[0], arr[arr.length - 1]];
// }
// const arrayBound = getArrayBound([]);
// console.log(arrayBound);

// function getArrayBounds(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     } else {
//         return [arr.length, arr[0], arr[arr.length - 1]];
//     }
// }

// console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
// console.log(getArrayBounds(10, 12, 14)); // ==> null
// console.log(getArrayBounds([1])); // ==> [1, 1, 1]

//Массивы
//Option 1
//const numbers = [1, 2, 3];
//Option 2
//const arr = new Array();
//new Array(); //[]
//new Array(1, 3, 4);//[1, 3, 4]
//new Array(5); //[empty × 5]Массива из 5 пустых элементов

// const numbers = [11, 22, 33, 55, 66];
// const numberOfElements = numbers.length;
// console.log(numberOfElements);

// console.log("Element number 1: " + numbers[1]); // доступ к элементу
// console.log("Element last: " + numbers[numbers.length - 1]); // последний элемент массива

//Задача
// [11, 22, 33, 55, 66] ==> [length, first elem, last elem]

// const numbers = [11, 22, 33, 55, 66];

// function getArrayBound(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     return [arr.length, arr[0], arr[arr.length - 1]];
// }
// const arrBound = getArrayBound([]);
// console.log(arrBound);

//Homework

function getArrayBounds(arr) {
    // put your code here
    if (!Array.isArray(arr)) {
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}

// examples
console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
console.log(getArrayBounds(10, 12, 14)); // ==> null
console.log(getArrayBounds([1])); // ==> [1, 1, 1]