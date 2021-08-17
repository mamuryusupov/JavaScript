// //методы массива .pop(), .push(), .shift(), .unshift();

// const people = ["Olga", "Ivan", "Dima"];

// // people[people.length] = "Jack";

// //Методы массива
// people.push("Jack", "John"); // добавление в конец элемента
// //people.unshift("Kate"); // добавление в начало элемента
// const first = people.shift(); //удаляте с начала и возвращает
// const last = people.pop(); //удаляет с конца и возвращает и сохранить в массив

// // people.length = 2; // можно конролировать длину массива
// console.log(first);
// console.log(last);
// console.log(people);
// console.log(people.length);
// //from, to => [n %3 === 0];

// function getSpecialNumbers(from, to) {
//     let specialNumbers = [];
//     for (let i = from; i <= to; i++) {
//         if (i % 3 === 0) {
//             specialNumbers.push(i);
//         }
//     }
//     return specialNumbers;
// }

// const specialNumbers = getSpecialNumbers(10, 30);

// console.log(specialNumbers);

//___________

// const people = ["Olga", "Ivan", "Dima"];
// people[people.length] = "Jack";
//people.push("Jack", "Michael"); // добав элем в конец массива
//people.unshift("Marsha"); // добав элем в начало массива
// people.pop("Jack", "John"); // удал элем в конце массива
// people.shift("Marsha"); // удал элем с начала массива
// const last = people.pop();
// const first = people.shift();

// console.log(first);
// console.log(last);
//people.length = 2; можно конралировать размер массива
// console.log(people);
// console.log(people.length);

//from , to => [%3===0]

// function getSpecialNums(from, to) {
//     let specialNumbers = [];

//     for (let i = from; i <= to; i++) {
//         if (i % 3 === 0) {
//             specialNumbers.push(i);
//         }
//     }
//     return specialNumbers;
// }
// const specialNumbers = getSpecialNums(10, 30);

// console.log(specialNumbers);

// function getSpecialNumbers(from, to) {
//     let specialNumbers = [];
//     for (let i = from; i <= to; i++) {
//         if (i % 3 === 0) {
//             specialNumbers.push(i);
//         }
//     }
//     return specialNumbers;
// }
// console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]

//Restart
// //методы массива .pop(), .push(), .shift(), .unshift();
const people = ["Tom", "Ann", "Bob"];

// people[people.length] = "Jack";

//Методы массива
// people.push("Jack"); // to the end
// people.unshift("Kate"); // put to the start
// people.shift("Jack"); // Delete from the start
// people.pop("Jack"); //Delete from the end

// const last = people.pop();
// const first = people.shift();
// console.log(first);
// console.log(last);
// console.log(people);
// console.log(people.length);

//Функция с методами
//from, to => [% 3 ===0]

// function getSpecialNumbers(from, to) {
//     let specialNumbers = [];
//     for (let i = from; i <= to; i++) {
//         if (i % 3 === 0) {
//             specialNumbers.push(i);
//         }
//     }
//     return specialNumbers;
// }
// const specialNumbers = getSpecialNumbers(10, 30);
// console.log(specialNumbers);

//people.length = 10; //измененеие длины в ручную. элементы могут быть удалены

///////////// задачи

// let emptyArr = new Arr(arr.length);

// let arr = ["Tom", "Ann", "Bob"];

// function createEmptyArray(len) {
//     let emptyArray =  Array(len.length);

// return emptyArray;
// }

// console.log(createEmptyArray(arr));
// let arr = ["Tom", "Ann", "Bob"];

//  function createEmptyArray(len) {
//   let emptyArray = len[len.length];

//     return emptyArray;
//  }

//  console.log(createEmptyArray(arr));

//Homework;

function getSpecialNumbers(from, to) {
    // put your code here
    let newArr = [];

    for (let i = from; i <= to; i++) {
        if (i % 3 === 0) {
            newArr.push(i);
        }
    }
    return newArr;
}

// examples
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2); // ==> [ ]