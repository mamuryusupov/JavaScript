class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Статические методы есть только у класса не у экземпляров
  static compare(user1, user2) {
    return user1.age - user2.age;
  }
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
      console.log(`New photo request was sent for ${this.name}`);
    }
    return this.age;
  }
}
const user1 = new User('Tom', 17);
const user2 = new User('Mamur', 28);
console.log(User.compare(user1, user2));
