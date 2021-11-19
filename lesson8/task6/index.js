/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

//step 1
//Itterate through obj with for in
//Get the keys of object
//Put in variable
//input: object
//output: keys list of obj

//step 2
// Itterate through array
// Get the values of obj with index and put into new obj
//input: array
//output: index

const pickProps = (obj, props) => {
    let newObj = {};
    for (let index of props) {
        for (let elem in obj) {
            if (elem === index) {
                newObj[index] = obj[elem];
            }
        }
    }
    return newObj;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"])); // ==> { a: 1, c: 3 }