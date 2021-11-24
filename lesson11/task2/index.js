// Sort Contacts

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Ann',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Stephan',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];

const sortContacts = contacts => {
  const result = contacts.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return result;
};
console.log(sortContacts(contacts));

// console.log(String.fromCodePoint(65));
// console.log('Ann'.charCodeAt(0));

// const sortContacts = (contacts) => {
//     const result = contacts.sort((a, b) => {
//         return b.name.localeCompare(a.name);
//     });
//     return result;
// };

// console.log(sortContacts(contacts));

// Метод  .localeCompare()

// console.log('a'.localeCompare('A'));

// Можно узнать значение в JS
// console.log('a'.charCodeAt(0));
// console.log('A'.charCodeAt(0));
// console.log(String.fromCodePoint(65));
// console.log(String.fromCodePoint(97));

// const sortContacts = (contacts, condition) => {
//   if (!Array.isArray(contacts)) {
//     return null;
//   }
//   const result = contacts.sort((a, b) => {
//     if (condition === false) {
//       return b.name.localeCompare(a.name);
//     }
//     return a.name.localeCompare(b.name);
//   });
//   return result;
// };

// console.log(sortContacts(contacts, false));
