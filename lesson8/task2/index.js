// ConcatProps
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

// const user = {
//     name: "tom",
//     key: 17,
// };

// const concatProps = obj => {
//     let arr = [];
//     for(let key in obj) {
//         arr.push(object[key]);
//     }
//     return arr;
// }

const concatProps = obj => {
  let arr = [];
  for (let key in obj) {
    arr = arr.concatProps(obj[key]);
  }
  return arr;
};

console.log(concatProps);

// const concatProps = (obj) => {
//     // put your code here
//     let valuesOfObj = Object.values(obj);
//     let newArr = [].concat(valuesOfObj);

//     return newArr;
// };

// // examples
// concatProps({ name: "John Doe", age: 17, interest: "football" }); // ==> ['John Doe', 17, 'football']
// итер для массива
// const arr = ['a', 'b'];
// for (let i = 1; i < length; i += 1) {
//   console.log(arr[i]);
// }

// const arr = ['a', 'b'];
// for (let value of arr) {
//   console.log(value);
// }

// цикл для ojb

const user = {
  name: 'Tom',
  key: 17,
};
// // long version
// const concatProps = obj => {
//   let arr = [];
//   for (let key in obj) {
//     arr.push(obj[key]);
//     //   arr = arr.concat(obj[key])
//   }
//   return arr;
// };

// short version
const concatProps = obj => Object.values(obj);
console.log(concatProps(user));
