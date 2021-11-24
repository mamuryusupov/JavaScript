// Square Array

// in: arr
// out: new arr
// arr with initial => arr with squared elements
// 1. Check if array is array. True / null
// 2. Copy the initial array
// 3. Ittirate through arr and multiply elem by elem itself

function squareArray(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const [...rest] = array;
  const newArray = [...rest];

  for (let num of newArray) {
    [...rest] *= num;
  }
  // for (let index = 0; index < newArray.length; index += 1) {
  //   newArray[index] *= newArray[index];
  // }
  return newArray;
}

const initialArray = [1, 2, 3, 99, 100];
console.log(initialArray);
console.log(squareArray(initialArray));
console.log(squareArray(1));
console.log(squareArray('Mamur'));
