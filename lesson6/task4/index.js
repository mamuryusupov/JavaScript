//spread и диструктуризация

// const numbers = [11, 22, 33, 44, 55, 66];
// Превый способ получить элементы
// const a = numbers[0];
// const b = numbers[1];

// Второй способ с помощью диструктуризации

// const [a, b, c, d, e, f, g] = numbers;
// console.log(a, b, c, d, e, f, g);

// Спред оператор, получаем все отсальные элементы массива присвоенное в rest(любое имя)
// const [a, b, ...arr] = numbers;
//console.log(a, b, arr); // 11 22 (4) [33, 44, 55, 66]
//console.log(a, b, [1, 2, 3, arr]); //11 22 (4) [1, 2, 3, Array(4)]
//console.log(a, b, [1, 2, 3, ...arr, 4, 5]); //11 22 (7) [1, 2, 3, 33, 44, 55, 66] ! При диструктуризации сред оператор нельзя помещать в центр

// function swap(arr) {
//     const [start, ...rest] = arr;
//     return [...rest, start];
// }
// console.log(swap(numbers));
//____________________

//spread и диструктуризация

// const a = numbers[0];
// const b = numbers[1];

//диструктуризация

// const [a, b, c, d, e, f, g] = numbers;
// console.log(a, b, c, d, e, f, g);

//spread  оператор

// const [a, b, ...arr] = numbers;
// console.log(a, b, arr);

// const [a, b, ...arr] = numbers;
// console.log(a, b, [1, 2, 3, ...arr, 6, 7, 8]);

// const numbers = [11, 22, 33, 44, 55, 66];

// function swap(arr) {
//     const [start, ...rest] = arr;
//     return [...rest, start];
// }

// console.log(swap(numbers));

// function swap(numbers) {
//     const [start, ...rest] = arr;
//     return [...rest, start];
// }

// function swapManual(numbers) {
//     // put your code here
//     // let deleted = [];
//     let newArr = [];
//     for (let i = 0; i <= numbers.length - 1; i++) {
//         // deleted = newArr.shift(numbers[0]);
//         //newArr.unshift(numbers[i]);
//         newArr.push(numbers.slice(numbers[(1, 4)]));
//     }
//     return newArr;
// }

// //swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
// console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]

//Restart

const numbers = [11, 22, 33, 55, 66];

//Option 1
// const a = numbers[0];
// const b = numbers[1];
// console.log(a, b); //11 22
//Option 2 диструктуризация
// const [a, b] = numbers;
//Spread оперпато получаем все отсальные элементы

// const [a, b, ...arr] = numbers;

// console.log(a, b, [1, 2, 3, arr]); //11 22 (4) [1, 2, 3, Array(3)]
// console.log(a, b, [1, 2, 3, ...arr]); //11 22 (6) [1, 2, 3, 33, 55, 66]

// function swap(arr) {
//     const [start, ...rest] = arr;

//     return [...rest, start];
// }

// console.log(swap(numbers));

///Homework

function swap(numbers) {
    // put your code here
    const [a, ...arr] = numbers;
    return [...arr, a];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
    // put your code here

    let newArr = numbers.slice();
    let firstElement = newArr.shift(0);
    newArr.push(firstElement);
    return newArr;
}

// examples
// console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]