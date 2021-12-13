// User
// Функицией контруктором может быть любая функция кроме стрелочной
// Если функция - конструктор то называем с большой буквы
// function User(name, age) {
//   // { } создает пустой объект и наполняет
//   this.name = name;
//   this.age = age;
//   // return {...}
// }

// const user1 = new User('Tom', 17);
// console.log(user1);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function () {
//     console.log(`Hi, I am ${this.name}`);
//   };
// }
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    return false;
  }
  this.age = newAge;
  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return this.age;
};

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// экземпляр класса 1
const user1 = new User('Tom', 17);
// console.log(user1);
// user1.sayHi();

// user1.requestNewPhoto();
// user1.setAge(26);
user1.setAge(18);
console.log(user1);
// экземпляр класса 2
const user2 = new User('Bob', 21);
// user2.sayHi();
user2.requestNewPhoto();

// console.log(user2.sayHi === user1.sayHi);
