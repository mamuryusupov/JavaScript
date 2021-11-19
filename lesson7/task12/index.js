//1. Learn requirement +
//2. Create step by step code (& input/output for functions) +
//3. Write draft solutions & testing +
//4. Refactoring & final testing

//Step 1 Check if arr is arr
//input:  array
//output: boolean
//Step 2 Find sum of all nums with reduce()
//input:  array
//output: number
//Step 3 Devide the sum by the arr.length
//input:  number, number
//output: number

const arrAvarage = (arr) => {
    if (!Array.isArray(arr)) {
        return "not Array";
    }
    const sumOfElems = (accum, elem) => {
        return accum + elem;
    };
    let averageNum = arr.reduce(sumOfElems) / arr.length;
    return averageNum;
};

console.log(arrAvarage([2, 5, 6, 3]));