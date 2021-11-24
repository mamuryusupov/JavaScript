//Copy Object

// const users = {
//     Tom: 17,
//     Bob: 100
// };
//const player = users;// ссылка на один и тот же объект и будет мутировать

// const players = {
//     John: 19,
//     Bob: 18,
// }
// const res = Object.assign({}, players); // объеденяте все волуес у нескольких объектов в новый объект. Если есть свойста с одинаковым ключем, то выбирается ключ у объекта правее

// console.log(res);

// players.Jonh = 20;

// console.log(players);

// console.log(res === players);//true, res ссылается на первый объект и расширяет(меняет) его и поэтому польность идентичен
// // чтобы объект скопировать и не менять, нужно поставить litteral {}
//  console.log(res === users);// false, так как это новый объект и он не мутирует

// res.Tom = 90;
// console.log(users);

//Option 1 of copying an object
// const players = {
//     John: 19,
//     Bob: 18,
// };

// const copyObj = obj => Object.assign({}, obj);

// console.log(copyObj(players));

//Option 2 of copying an object

// const user = {
//     name: "Tom",
//     key: 17,
// };

// const player = {...user };

// const copyObj = obj => Object.assign({}, obj);

// console.log(copyObj(players));
// Копирование свойст на первом уровне
// const user = {
//     name: "Tom",
//     key: 17,
// father: {
//     name: 'Bob'
// }
// };

// const player = {...user};

// console.log(player ===user);
// console.log(player);
//Диструтуризация

// const user = {
//     name: "Tom",
//     age: 17,
// };
// const { name = "default", ...restProps } = user;
// console.log(restProps);

// const player = {
//     game: "football",
//     ...restProps,
// };

// console.log(player);

// console.log(player);

// function quickCheck(arr, elem) {
//     // Only change code below this line

//       if (arr.indexOf(elem)>= 0) {
//         return true;
//       } else {
//         return false;
//       }

//     // Only change code above this line
//   }

//   console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));

//   function filteredArray(arr, elem) {
//     let newArr = [];
//     // Only change code below this line
//   for(let i =0; i<arr.length; i++)
//   {
//     if(arr[i].indexOf(elem) == -1) {
//         newArr.push(arr[i]);
//     }
//   }
//     // Only change code above this line
//     return newArr;
//   }

//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//Array Methods

// //ForEach
// [1, 2, 3].forEach(function(item, index) {
//     console.log(item, index);
// });

//Map

// const three = [1, 2, 3];
// const doubled = three.map(function(item) {
//     return item *2;
// });
// console.log(doubled);

//Filter
// const ints = [1, 2, 3];
// const evens = ints.filter(function (item) {
//     return item % 2 ===0;
// });
// console.log(evens);

//Reduce
// const sum = [1, 2, 3].reduce(function(result, item) {
//     return result + item;
// }, 0);

// console.log(sum);

//Sum
// const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item)
// {
// return item < 0;

// })
// console.log(hasNegativeNumbers);

//every
// const  allPositiveNumber = [1, 2, 3].every(function (item) {
// return item >0;
// });
// console.log(allPositiveNumber);

//find
// const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
// const found = objects.find(function (item) {
//     return item.id === 'b';
// });
// console.log(found);

//find index
// const objects2 = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
// const foundIndex = objects2.findIndex(function (item) {
//     return item.id === 'b';
// });
// console.log(foundIndex);

// function getKeys(obj) {
//     // put you code here
//     Object.keys(obj).forEach((elem) => {
//         console.log(elem);
//     });
// }

// let initialObj = { "John Doe": 19, Tom: 17, Bob: 18 };
// console.log(getKeys(initialObj));

// methods

const user = {
  name: 'Tom',
  age: 17,
  sayHi: function () {
    console.log('Hi');
  },
};

console.log(user.sayHi());

[1, 2].forEach;

console.log('text'.toUpperCase());
console.log((1.89).toFixed());
console.log((1).toFixed());
