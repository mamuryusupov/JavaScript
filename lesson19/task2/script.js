const user = {
  firstName: 'John',
  lastName: 'Doe',

  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // set fullName(value) {
  //   const [firstName, lastName] = value.split(' ');
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // },
  setfullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
// user.fullName = 'Tom Hardy';

user.setFullName('Tom Hardy');

// обращаемся как к свойству
console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);
