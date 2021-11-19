//1. Learn requirement
//2. Create step by step code (& input/output for functions)
//3. Write draft solutions & testing
//4. Refactoring & final testing

//Step 1  Check if the arr is array.
//input: array
//output:  boolean

//Step 2 -
// 1. Copy array with slice()
//input: array
//output: new array

// 2. Reverse array with reverse()
//input: array with normal flow
//output: array with reversed flow

//Step 3
//input:
//output:

//Step 4
//input:
//output:

const reverseArray = (array) => {
    if (!Array.isArray(array)) {
        return "null";
    }
    return array.slice().reverse();
};

const initialArray = [1, 2, 4, 5, 6, 9, 21];
console.log(reverseArray(initialArray));

//Вопросы
//1)  как сокаратить/рефакторит ?
//2) как написать полную версию slice и reverse?