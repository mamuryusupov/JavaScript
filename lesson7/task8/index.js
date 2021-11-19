//1. Learn requirement +
//2. Create step by step code (& input/output for functions) +
//3. Write draft solutions & testing +
//4. Refactoring & final testing

//Step 1  Check if the arr is array.
//input: array
//output:  boolean

//Step 2
//1. Copy the array with slice();
//input: array
//output:  copy of array

function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return "null";
    }
    return arr.slice();
}

const initialArray = [1, 2, 4, 5, 6, 9, 21];

console.log(cloneArr(initialArray));
//After:
console.log("initialArry after cloning: " + initialArray);

// праивльно ли прописан алгоритм?
// Как можно было сделать с предварительным расширенным кодом?