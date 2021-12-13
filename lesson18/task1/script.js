'use strict';
// // this in event

// // const obj = {
// //   name: 'Tom',
// //   sayHi() {
// //     console.log(this);
// //   },
// // };

// // // obj.sayHi();

// // const func = obj.sayHi;
// // если вызвать метод через присвонеие, this ссылается глобальному объекту
// // func();
// // console.log(this);
// // // создает свойста в глобальном объекте
// // var a = 1;
// // если нужно сохранить свойства в го то нужно напряму
// // window.user = {
// //   name:
// //   id:
// // }

// // console.log(window.a);

// // let b = 2;
// // console.log(window.b);

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// const func = obj.sayHi;
// func();
// // если отправлять метод как коллбек, тогда получаем ссылку на глобальный объект
// // чтобы исправить  нужно строго зафиксировать контекст с bind

// // setTimeout(obj.sayHi, 100); // => cсылка на глобальный объект
// // setTimeout(obj.sayHi.bind(obj), 100); // => зафиксированный контекст с bind
// setTimeout(() => obj.sayHi(), 100); // => зафиксированный контекст с cтрелочной функцией

const event = {
  guests: [
    { name: 'Tom', email: 'a@gmail.com', age: 17 },
    { name: 'Tom', email: 'a@gmail.com', age: 18 },
  ],
  message: 'Welcome to the party',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        text: `Dear ${name}! ${this.message}`,
        email,
      }));
  },
};

console.log(event.getInvitations());
