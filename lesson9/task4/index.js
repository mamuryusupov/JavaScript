//Methods

// const user = {
//     name: "Tom",
//     age: 17,
//     sayHi: function() {
//         console.log("Hi");
//     },
// };
// console.log(user.sayHi());
// user.sayHi();

// [1, 2].forEach;

// console.log('text'.toUpperCase());
// console.log(1.89.toFixed());
// console.log(1..toFixed());

/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
//Option 1
// function addPropertyV1(userData, userId) {
//     // put your code here
//     let changedObj = userData;
//     changedObj.id = userId;
//      return changedObj;
//   }

//   const user = {
//     name: 'Sam',
//   };
//   console.log (user);

//   console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }

//   console.log (user);

// put your code here
// //Option 2
// function addPropertyV2 (userData, userId) {
// let copyObj = Object.assign(userData);
// copyObj.id = userId;

// return copyObj;
// }

// const user = {
//     name: 'Sam',
//   };
//   console.log (user);

//   console.log(addPropertyV2(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }

//   console.log (user);

//Option 3

//Option 2
// function addPropertyV3 (userData, userId) {
//     let copyObj = Object.assign({}, userData);
//     copyObj.id = userId;

//     return copyObj;
//     }

//     const user = {
//         name: 'Sam',
//       };
//       console.log (user);

//       console.log(addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }

//       console.log (user);

// //Option 4
// function addPropertyV4(userData, userId) {
//     let copyObj = {...userData };
//     copyObj.id = userId;
//     return copyObj;
// }

// const user = {
//     name: "Sam",
// };
// console.log(user);

// console.log(addPropertyV4(user, "1234567")); // ==> { name: 'Sam', id: '1234567' }

// console.log(user);

// examples

// function getKeys(obj) {
//   // put you code here

//   return Object.keys(obj);
// }

// const user = {
//   name: 'Sam',
//   age: 18,
//   hobby: 'football',
// };
// console.log(getKeys(user));
