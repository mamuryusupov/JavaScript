//1. Learn requirement +
//2. Create step by step code (& input/output for functions) +
//3. Write draft solutions & testing +
//4. Refactoring & final testing

//Step 1  ittirate with reduce and add all elemnts to accum
//input: arr with seperate elems
//output: number (sum of all elements)

const sum = (arr) => {
    if (!Array.isArray(arr)) {
        return "not Array";
    }
    const sumOfElems = (accum, elem) => {
        return accum + elem;
    };
    return arr.reduce(sumOfElems);
};

const initialArray = [1, 2, 4, 5, 6, 9, 21];
console.log(sum(initialArray));