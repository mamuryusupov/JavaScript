// unsorted array => sorted

// const sortArray = (numbers) => numbers.slice().sort((a, b) => a - b);

// // const sortedArray = numbers.sort();

// // return sortedArray;
// //копия массива 1й способ
// // const copy = [...numbers];

// // копия массива 2й способ

// const arr = [1, 2, 21, 4, 9, 6, 5, 23];
// console.log(sortArray(arr));
// console.log(arr);

// const sortDesc = (array) => {
//     const compare = (a, b) => {
//         if (a > b) {
//             return -1;
//         }
//         if (a < b) {
//             return 1;
//         }
//         return 0;
//     };

//     return array.sort(compare);
// };

// unsorted arra => sorted array

const sortArray = numbers => {
  //     // первый метод копировать массив
  //     const copy = [...numbers];
  //     // второй метод копировать массив
  //     // const copy = numbers.slice();

  //   copy.sort((a, b) => (a < b ? 1 : -1));
  //   return copy;

  return numbers.slice().sort((a, b) => (a < b ? 1 : -1));
};

const initialArray = [1, 4, 70, 21, 5, 55, 6];
console.log(sortArray(initialArray));
