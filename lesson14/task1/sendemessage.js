// sendMessage
// 'use strict';

// // Function epxression
// const message = 'Just learn it!';

// const sendMessage = name => {
//   const sender = 'gromcode';
//   console.log(`${name}, ${message}. Your ${sender}`);
// };
// console.log(sendMessage('Tom'));

// Function declaration

// const message = 'Just learn it!';
// console.log(sendMessage('Tom'));
// function sendMessage(name) {
//   const sender = 'gromcode';
//   console.log(`${name}, ${message}. Your ${sender}`);
// }

// // More difficult

let message = 'Just learn it!';

export default function sendMessage(name) {
  const sender = 'gromcode';
  console.log(`${name}, ${message}! Your ${sender}`);
}

export default function setMessage(text) {
  message = text;
}


// console.log(sendMessage('Tom'));

// setMessage('How are you doing?');
console.log(sendMessage('Mamur'));
console.log(sendMessage('Alex'));
setMessage('How are you doing?');
console.log(sendMessage('Alex'));

// another.justifyContent:
// import { sendMessage } from 'index.js' ;
// let message = 'Bye!';

// sendMessage('Bob');
