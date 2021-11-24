// function checker(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let minNum = arr[0];
//   let maxNum = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minNum) {
//       minNum = arr[i];
//       console.log(minNum);
//     }
//     if (arr[i] > maxNum) {
//       maxNum = arr[i];
//     }
//   }
//   return minNum + maxNum > 1000;
// }

// console.log(checker([-1, 2, 3, 4, 5, 10, 20, 50, 89]));
// console.log(checker([-1, 2, 3, 4, 5, 400, 10, 20, 500, 89, 200, 1500]));

// in: arr
// out: boolean

// 1. lool arr
// 2. compare current elem with next elem
// 3. if elem is smaller safe it as the smallest elem
// 4. if elem is bigger safe it as the biggest elem

function checker(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let theBiggestElem = 0;
  console.log(theBiggestElem);

  let theSmallestElem = 0;
  console.log(theSmallestElem);
  for (let index = 0; index < array.length; index += 1) {
    console.log('The current elem: ' + array[index]);
    for (let j = 0; j <= index; j += 1) {
      console.log('The next elem: ' + array[j]);
      if (array[index] < array[j]) {
        console.log(array[index]);
        console.log(array[j]);

        theSmallestElem = array[index];
      }
      if (array[index] >= array[j]) {
        theBiggestElem = array[j];
      }
    }
  }
}

const initialArray = [1, 2, 3, 99, 100];
// const initialArray2 = [10, 20, 30, 990, 111];

console.log(checker(initialArray));
