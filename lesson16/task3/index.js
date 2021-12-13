// create

const createArrayOfFunctions = num => {
  let newArr = [];

  if (typeof num === 'undefined') {
    return newArr;
  }
  if (typeof num !== 'number') {
    return null;
  }

  for (let i = 0; i < num; i += 1) {
    newArr[i] = function () {
      return i;
    };
  }
  return newArr;
};

export { createArrayOfFunctions };
console.log(createArrayOfFunctions('Mamur'));
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions(10)[1]());
console.log(createArrayOfFunctions());
// console.log(typeof );
