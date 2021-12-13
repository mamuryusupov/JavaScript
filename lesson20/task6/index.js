// class User {
//   constructor(id, name, sessionId) {
//     this.id = id;
//     this.name = name;
//     this.sessionId = sessionId;
//   }
// }

// class UserRepository {
//   constructor(array) {
//     this.users = array[User];
//     console.log(this.users);
//   }
//   getUserNames() {
//     this.users.push(this.name);
//   }
//   getUserIds() {
//     this.users.push(this.id);
//   }
//   getUserNameById() {

//   }
// }

// // examples
// const user = new User('1', 'Tom', 'session-id');
// const user2 = new User('2', 'Mamur', 'session-id2');

// console.log(user);
// // получить свойства можем
// console.log(user._id); // ===> '1'
// console.log(user._name); // ===> 'Tom'
// console.log(user._sessionId); // ===> 'session-id'
// user.name = 'Bob';
// console.log(user._name); // ===> 'Tom'

// const newArr = new UserRepository(User);

// console.log(UserRepository.newArr);

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}
export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(user => user.name);
  }

  getUserIds() {
    return this._users.map(user => user.id);
  }

  getUserNameById(id) {
    for (const user of this._users) {
      if (user.id === id) {
        return user.name;
      }
    }
    return -1;
  }
}

const user2 = new UserRepository([{ id: 2, name: 'Bob', sessionId: 'iddd' }]);
console.log(user2.getUserIds());
console.log(user2.getUserNameById(2));
console.log(user2.getUserNames());
user2.users = { id: 4, name: 'Bfghb', sessionId: 'i' };
console.log(user2.users);

const user = new User('1', 'Tom', 'session-id');
console.log(user.id); // '1'
console.log(user.name); // 'Tom'
console.log(user.sessionId); // 'session-id'

user.id = 2;
console.log(user.id);
