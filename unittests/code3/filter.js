export const getAdults = obj => {
  let newObj = {};
  for (let elem in obj) {
    if (obj[elem] >= 18) {
      newObj[elem] = obj[elem];
    }
  }
  return newObj;
};

// examples
console.log(getAdults({ 'John Doe': 17, Tom: 17, Bob: 10 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
