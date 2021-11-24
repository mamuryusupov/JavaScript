//TransformToObject;

// const prop = 'my';

// const obj = {
//     name: "Tom",
//     age: 17,
//     interest: "football",
//     "my name": "Bob",
//     [prop + 'name']: 'value' //вычислимое значение
// };

// //Обращение к свойству

// console.log(obj.age);

// //Меняем свойства объекта
// obj.age = 18;

// console.log(obj.age);

// console.log(obj["my name"]);
// console.log(obj[prop + 'name']);

//Задача
//[1, 'text'] => {'1': 1, text: 'text'}

// const transformToObject = arr => {
//   let obj = {};

//   arr.forEach(el => {
//     obj[el] = el;
//   });

//   return obj;
// };

// const arr = [1, 'text'];
// const result = transformToObject(arr);

// console.log(result);

// const user = {
//   name: 'Tom',
// };

// user.name = 'Bob';
// console.log(user.name);

//Каждый по отедельности
// const a = 17;
// const b = a;

//Ссылаются на одно и тоже
// const a = {number: 17};
// const b = a;

// const a = {};
// const b = {};
// console.log(a ==b);//false

// const a = {};
// const b = a;
// console.log(a > b);

// const name = 'Tom';

// const user = {
//     name, //если одинковые названи то можно отпусктить
// }

// const transformToObject = arr => {
//     // put your code here
//     arr.

// };

// // examples
// transformToObject(['a', 17.1, 'John Doe']); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

// TransformToObject
// const prop = 'my';

// const obj = {
//   name: 'Tom',
//   interest: 'football',
//   age: 17,
//     'my name': 'Bob',
//   [prop + "name"]: 'value'
// };

// console.log(obj.age);

// obj.age = 18;

// console.log(obj.age);
// console.log(obj['my name']);
// console.log(obj[prop + 'name']);

// const transformToObject = arr => {
//   let obj = {};

//   arr.forEach(el => {
//     obj[el] = el;
//   });

//   return obj;
// };

// [1, 'text'] => {'1': 1, text: 'text'}
// const arr = [1, 'text'];
// const result = transformToObject(arr);
// console.log(result);

// const user = {
//   name: 'Tom',
// };

// user.name = 'Bob';

// console.log(user.name);
// console.log

// const a = 17;
// const b = a;

// const c = { c: 17 };
// const d = c;

// const a = {};
// const b = {};

// console.log(a === b);
const a = {};
const b = a;

console.log(a === b);

const uName = 'tom';
const user = {
  uName,
};
