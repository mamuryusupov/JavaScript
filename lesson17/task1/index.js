// объект
// можем хранить функцию (методы).
// const user = {
//   name: 'Mamur',
//   age: 28,
// };
// просвоение метода через точку
// user.walk = function walk() {
//   console.log('I am walking');
// };
// для обращения к данным в объекте используем ключевое слово this
// this всегда на объект из который метод берет данные. Работает только в методах объекта.
// user.sayHi = function () {
//   console.log(`Hi, I am ${this.name}.`);
// };

// user.sayHi();

// const user = {
//   name: 'Mamur',
//   age: 28,
//   // метод может принимать аргументы
//   sayHi(num) {
//     console.log(num);
//     console.log(`Hi, I am ${this.name}.`);
//   },
// };

// user.sayHi(78);

// const user = {
//   firstName: 'Mamur',
//   lastName: 'Yusupov',
//   age: 28,
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// // user.getFullName();
// // const func = user.getFullName;
// // если вызываеть присвоенный метод из переменной то происходит потеря контекста
// // func();

// // чтобы не терять контектс можно использовать метод bind
// // bind принимает несколько аргументов:
// // 1) объект(контекст) на который ссылается this
// const func = user.getFullName.bind(user);
// func();

const user = {
  name: 'Mamur',

  age: 28,
  getFullName() {
    console.log(this.name);
  },
};
// option 1
// const func = user.getFullName.bind(user);
// func();
// option 2
// можно просто указать объект и переприсвоить значени ключа, но после этого нельзя ничего поменять
const func = user.getFullName.bind({ name: 'Tom' });
func();

// const user = {
//   name: 'Mamur',
//   age: 28,
//   // часть инфы из аргумента часть и объекта
//   sayHi(age, message) {
//     console.log(`${message}. I am ${this.name}. I am ${age}`);
//   },
// };

// метод CALL. Принимает объект, который является контекстом функции

// func.call({ name: 'Tom' });
// const func = user.sayHi();

// const func = user.sayHi;
// // метод APPLY. Работает как call. Принимает аргументы в виде массива

// const anotherUser = {
//   name: 'Tom',
// };

// func.apply(anotherUser, [17, 'Hello']);
// // call  Принимает аргументы в виде массива через запятую

// func.call(anotherUser, 17, 'Hello');

// простой вызов функции но терям контекст
// func(17, 'Hello');
// при таком вызове получаем имя
// const func = user.sayHi(17, 'Hello');
