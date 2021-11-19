//ConcatProps
// const arr = ['a', 'b', 'c'];

// for (let i = 1; i < 10; i++) {
//     //...
// }

// const user = {
//     name: "tom",
//     key: 17,
// };

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

const user = {
    name: "tom",
    key: 17,
};

// const concatProps = obj => {
//     let arr = [];
//     for(let key in obj) {
//         arr.push(object[key]);
//     }
//     return arr;
// }

// const concatProps = (obj) => {
//     let arr = [];
//     for (let key in obj) {
//         arr = arr.concatProps(obj[key]);
//     }
//     return arr;
// };

// console.log(concatProps);

const concatProps = (obj) => {
    // put your code here
    let valuesOfObj = Object.values(obj);
    let newArr = [].concat(valuesOfObj);

    return newArr;
};

// examples
concatProps({ name: "John Doe", age: 17, interest: "football" }); // ==> ['John Doe', 17, 'football']