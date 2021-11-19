//1. Learn requirement  +
//2. Create step by step code (& input/output for functions)+
//3. Write draft solutions & testing +
//4. Refactoring & final testing ---

//Step 1  Check if the arr is array.
//input: array
//output:  boolean
//Step 2
//2.1 step 1 true =
//2.2 ittirate through array from 0 index to the last index
//2.3 multiply each elem * elem
//input: array(object)
//output:  modified array(object)
//Step 3  return modified array(

// const arraySquaredElements = (arr) => {
//     if (!Array.isArray(arr)) {
//         return "not Array";
//     }
//     let newArr = [];
//     const squaredElements = arr.forEach((num) => {
//         newArr.push(num * num);
//     });
//     return newArr;
// };

// const newArr = [1, 3, 7, 9, 13];

// console.log(arraySquaredElements(newArr));

// Вопросы

// 1. Можно ли не использовать фигурный скобки внутри методов?
// 2. Почему forEach возвращает  undefined?
// 3. Можно ли вернуть forEach без push в новый массив?

const arraySquaredElements = (arr) => {
    if (!Array.isArray(arr)) {
        return "not Array";
    }
    let squaredElem = (num) => {
        return num * num;
    };

    return arr.map(squaredElem);
};

const newArr = [1, 3, 7, 9, 13];

console.log(arraySquaredElements(newArr));