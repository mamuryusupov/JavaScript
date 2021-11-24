//1. Learn requirement +
//2. Create step by step code (& input/output for functions) +
//3. Write draft solutions & testing +
//4. Refactoring & final testing ---

//Step 1  Check if the arr is array.
//input: array
//output:  boolean

//Step 2 -

//1.Itterate through elems  with map()
//input: call back
//output: new elem for new Array

//2.Check if elem is even
//if (elem % 2 === 0)
//true = even + delta

//input: number
//output: boolean
// long form
// function increaseEvenEl(arr, delta) {
//     if (!Array.isArray(arr)) {
//         return "null";
//     }

//     const ifNumEven = (num) => {
//         if (num % 2 === 0) {
//             return num + delta;
//         } else {
//             return num;
//         }
//     };

//     return arr.map(ifNumEven);
// }
// short form

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return 'null';
  }

  return arr.map(num => {
    if (num % 2 === 0) {
      return num + delta;
    }
    return num;
  });
}

const initialArray = [1, 2, 4, 5, 6, 9, 21];
console.log(increaseEvenEl(initialArray, 20));

//Вопросы
//1) Как внутри колл бек  функция определит элемент массива?
//2) Нужно ли указывать название массива в колбек?
