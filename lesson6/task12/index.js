// function sortAsc(array) {
//     if (!Array.isArray(array)) {
//         return null;
//     }

//     let temp;

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j] > array[j + 1]) {
//                 console.log(array[j])
//                 temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }

// console.log(sortAsc([22, 11, 10, 5, 4, 3, 20, 50, 89]));

// in: array;
// out: sorted array;

// 1. find the smallest eleme in the arr
// ...
// 2. loop arr
// 3. compare with the smalles elem; if smaller put at the first place / if larger put at the last place

// Step 1
// function findSmallestElem(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let theSmallestElem = arr[0];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (theSmallestElem > arr[i]) {
//       theSmallestElem = arr[i];
//     }
//   }
//   return theSmallestElem;
// }

// const initialArray = [1, 2, 3, 99, 100];
// const initialArray2 = [99, 88, 67, 99, 100];

// // const initialArray2 = [10, 20, 30, 990, 111];

// console.log(findSmallestElem(initialArray));
// console.log(findSmallestElem(initialArray2));

// Step 2

// function sortAsc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   const newArr = [];
//   const smallestElem = findSmallestElem(array[0]);
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > smallestElem) {
//       newArr.unshift(array[i]);
//     }
//   }
//   return newArr;
// }
// const initialArray = [1, 2, 3, 99, 100];
// const initialArray2 = [55, 99, 63, 79, 88, 100];

// // const initialArray2 = [10, 20, 30, 990, 111];

// console.log(sortAsc(initialArray));
// console.log(sortAsc(initialArray2));

// in: array;
// out: sorted array;

// 1. loop arr first time start with the first index
// 2. loop arr second time start with the second index
// 3. compare firstIndex with second index
// if bigger put at first place

function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  //   let newArr = [];
  // let a = newArr[0];
  let temp = 0;
  console.log(temp);
  for (let firstElm = 0; firstElm < array.length; firstElm += 1) {
    console.log(array[firstElm]);
    // let isBigger = false;
    for (let secondElm = 0; secondElm < array.length; secondElm += 1) {
      console.log(array[secondElm]);
      if (firstElm < secondElm);
      temp = array[secondElm];
      array[secondElm] = array[firstElm];
      array[firstElm] = temp;
    }
    // if (isBigger) {
    //     newArr.unshift(array[firstElm]);
    // }
  }
  return array;
}

const initialArray = [1, 2, 3, 99, 100];
const initialArray2 = [55, 99, 63, 79, 88, 100];

// const initialArray2 = [10, 20, 30, 990, 111];

console.log(sortAsc(initialArray));
console.log(sortAsc(initialArray2));
