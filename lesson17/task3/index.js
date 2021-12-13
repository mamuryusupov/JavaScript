// переодересация функции на другой объект

// функция обертка

// defer(func, ms) => function

function defer(func, ms) {
  // return function () {
  //   setTimeout(() => func(...arguments), ms);
  // };
  // return function () {
  //   setTimeout(() => func.call(this, ...arguments), ms);
  // };
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}
// const sayHi = () => {
//   console.log('Hello');
// };
//sayHi();
// const sum = (a, b) => {
//   console.log(a + b);
// };

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi my name is ${this.name}`);
  },
};
// const deferHi = defer(user.sayHi.bind(user), 1000);

// deferHi();
// call
const deferHi = defer(user.sayHi, 1000);

deferHi.call({ name: 'Bob' });

// const deferSayHi = defer(sayHi, 1000);
// defferedSayHi();
// const deferSum = defer(sum, 1000);
// deferSum(1, 4);
