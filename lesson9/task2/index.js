// const user = {
//   name: 'Tom',
//   key: 17,
// };

// const concatProps = (obj) => Object.values(obj);

// console.log(concatProps(user));

// const copyObj = (obj) => {
//     let copy = Object.assign({}, obj);
//     return copy;
// };
// let initialObj = { "John Doe": 19, Tom: 17, Bob: 18 };
// console.log(copyObj(initialObj));

// const users = {
//   Tom: 17,
//   Bob: 100,
// };
// const players = {
//   'John Doe': 19,
//   Bob: 18,
// };
// const res = Object.assign(players, users);
// const res = Object.assign({}, users);

// console.log(res);
// res, (Tom = 90);
// console.log(users);

// const copyObj = obj => Object.assign({}, obj);
// console.log(copyObj(players))

const players = {
  'John Doe': 19,
  Bob: 18,
};

// const user = { ...players };
// console.log(user)

// const { Bob } = players;
// console.log(Bob);
const { Bob = 'default', ...restProps } = players;

const player = {
  game: 'football',
  ...restProps,
};
console.log(player);
