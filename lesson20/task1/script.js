// //======Класс=====

// class User {
//   // метод конструкто, примнимает арги и присваевает в поля класса
//   // контуор функция и конструктор в классе выполняет теже задачи
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   // дальше перечислятются инстансы(представители класса)
//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   }
//   requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.name}`);
//   }
//   setAge(newAge) {
//     if (newAge < 0) {
//       return false;
//     }
//     this.age = newAge;
//     if (this.age >= 25) {
//       console.log(`New photo request was sent for ${this.name}`);
//     }
//     return this.age;
//   }
// }

// const user1 = new User('Tom', 17);
// console.log(user1);
//====Фунциональный стиль========

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };
// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };
// User.prototype.setAge = function (newAge) {
//   if (newAge < 0) {
//     return false;
//   }
//   this.age = newAge;
//   if (this.age >= 25) {
//     console.log(`New photo request was sent for ${this.name}`);
//   }
//   return this.age;
// };
// option 1
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Instance methods
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;

    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    return this.age;
  }
  // Static method
  static createEmpty() {
const newUser = {name = ' ',age = null,}
    return newUser;
  }
}

const user1 = new User('Tom', 17);
const mamur = new User('Mamur', 28);
// console.log(mamur);

mamur.sayHi();
mamur.setAge(-1);
console.log(User.createEmpty());
// mamur.requestNewPhoto();
// console.log(mamur);
// console.log(user1);

// option 2
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };
// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };
// User.prototype.setAge = function (newAge) {
//   if (newAge < 0) {
//     return false;
//   }
//   this.age = newAge;
//   if (this.age >= 25) {
//     console.log(`New photo request was sent for ${this.name}`);
//   }
//   return this.age;
// };
