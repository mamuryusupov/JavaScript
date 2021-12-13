// 1. creat object
// 2. create method to get fullname
// 3. creat method to receive external args and set new value to the name and surname

// const user = {
//   firstName: 'Mamur',
//   lastName: 'Yusupov',
//   getFullName() {
//     console.log(`${this.firstName}  ${this.lastName}`);
//   },
//   setFullName(firstName1, lastName1) {
//     this.firstName = firstName1;
//     this.lastName = lastName1;
//   },
// };
// const func1 = user.getFullName.bind(user);
// func1();
// const func2 = user.setFullName('Dima', 'Efremov');
// func2();

// const user = {
//   firstName: 'Mamur',
//   lastName: 'Yusupov',
//   getFullName() {
//     return `${this.firstName}  ${this.lastName}`;
//   },

//   setFullName(fullName) {
//     [this.firstName, this.lastName] = fullName.split(' ');
//   },
// };
// console.log(user.getFullName());
// console.log(user.setFullName());
// console.log(user);

export const user = {
  firstName: 'John',
  lastName: 'Doe',

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ');
  },
};

const getFullName1 = user.getFullName();
console.log(getFullName1);
console.log(user.getFullName());
