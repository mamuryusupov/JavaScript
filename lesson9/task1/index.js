//Get Adults
//Методы объектов

// const user = {
//   name: 'Tom',
//   k: 17,
// };

// // // Object.keys(); // Получаем все ключи объекта
// console.log(Object.keys(user));

// // Object.values();// Получаем все значение ключей
// console.log(Object.values(user));

// // Object.entries();
// console.log(Object.entries(user));

// const user = {
//     Tom: 17,
//     John: 19,
//     Bob: 18,
// };

//option 1
// const getAdults = (usersObj) => {
//     //{ Tom': 17,  'John': 19, 'Bob': 18 } => [[Tom': 17],  ['John': 19], ['Bob': 18]]
//     const usersArray = Object.entries(usersObj);
//     //[[Tom': 17],  ['John': 19], ['Bob': 18]] => [['John': 19], ['Bob': 18]]
//     const filteredUsersArray = usersArray.filter((user) => user[1] >= 18);
//     //  [['John': 19], ['Bob': 18]] => [ 'John', 'Bob']
//     const usersNames = filteredUsersArray.map((user) => user[0]);

//     return usersNames;
// };
// console.log(getAdults(user));

//Option 2

// const getAdults = (usersObj) => {
//     //{ Tom': 17,  'John': 19, 'Bob': 18 } => [[Tom': 17],  ['John': 19], ['Bob': 18]]
//     const result = Object.entries(usersObj)
//         //[[Tom': 17],  ['John': 19], ['Bob': 18]] => [['John': 19], ['Bob': 18]]
//         .filter((user) => user[1] >= 18)
//         //  [['John': 19], ['Bob': 18]] => [ 'John', 'Bob']
//         .map((user) => user[0]);
//     //Возвращаем результат. Можно без промежуточной переменной вернуть результат
//     return result;
// };
// console.log(getAdults(user));

// function getAdults(object) {
//     const result = Object.entries(object);

//     const filteredAge = result.filter((user) => {
//         return user[1] >= 18;
//     });

//     const names = filteredAge.map((user) => user[0]);

//     return names;
// }

// // let names = filteredAge.map((user) => user[0]);
// // console.log(names);
// let initialObj = { "John Doe": 19, Tom: 17, Bob: 18 };
// console.log(getAdults(initialObj));

// getAdults

// const user = {
//   name: 'Tom',
//   key: 17,
// };

// // Object.keys();
// // Object.values();
// // Object.entries();

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

const users = {
  Tom: 17,
  'John Doe': 19,
  Bob: 18,
};
// long form
// const getAdults = usersObj => {
//   // {'Tom' : 17, 'John Doe': 19} => [['Tom' : 17], ['John Doe': 19]]
//   const usersArray = Object.entries(usersObj);
//   // [ ['John Doe': 19]]
//   const filteredUsersName = usersArray.filter(user => user[1] >= 18);
//   // [ ['John Doe': 19]]

//   const usersNames = filteredUsersName.map(user => user[0]);
//   return usersNames;
// };
// console.log(getAdults(users));

// short flowFrom:

const getAdults = usersObj =>
  Object.entries(usersObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

console.log(getAdults(users));
