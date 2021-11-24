//1. Learn requirement +
//2. Create step by step code (& input/output for functions) +
//3. Write draft solutions & testing +
//4. Refactoring & final testing

//Step 1 Check if the word includes certain letters with include()
//input:  string
//output: boolean
//Step 2 Check if (string.length > 5)
//input:  string, number
//output: boolean
//Step 3 Filter all odd elements with filter
//input:  array
//output: modified array

// const filterNames = (arr, text) => {
//     const ifMatch = (word) => {
//         if (word.includes(text) && word.length >= 5) {
//             return true;
//         }
//         return false;
//     };

//     return arr.filter(ifMatch);
// };

const filterNames = (arr, text) =>
  arr.filter(word => {
    if (word.includes(text) && word.length >= 5) {
      return true;
    }
    return false;
  });
console.log(filterNames(['Jonh', 'Olivya', 'Oleksandr', 'Vanya'], 'ya'));
