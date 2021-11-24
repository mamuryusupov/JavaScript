// ['Ann', 'Tom', 'Bob', 'Kate']; ['Tom', 'Bob'] => ['Keep it up, Ann', 'Keep it up, Kate']

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//     const passedStudents = allStudentsList.filter(
//         (name) => studentsForRetake.indexOf(name) === -1
//     );

//     const messages = passedStudents.map((name) => "Good job, " + name);

//     return messages;
// };

// const allStudents = ["Ann", "Tom", "Bob", "Kate"];
// const failedStudents = ["Tom", "Bob"];

// console.log(getMessagesForPassedStudents(allStudents, failedStudents));

// const getMessagesForPassedStudents = (allStudents, failedStudents) => {
//     const passedStudents = allStudents.filter(
//         (name) => failedStudents.indexOf(name) === -1
//     );

//     const messages = passedStudents.map((name) => "Good job, " + name);

//     return messages;
// };

// const allStudents = ["Ann", "Tom", "Bob", "Kate"];
// const failedStudents = ["Tom", "Bob"];

// console.log(getMessagesForPassedStudents(allStudents, failedStudents));
//1. Find passed students
//2. Add Keep it up

//Метод фильтер отфильтровывает лишние элементы

// Метод indexOf проверяет наличие элемента в массиве, не принимает call back
// ["Tom", "Bob"].indexOf("dd"); // -1
// ["Tom", "Bob"].indexOf("Tom"); //0
// ["Tom", "Bob"].indexOf("Tom"); //1

//Метод include проверяет входит ли элемент в массив или нет

//Метод map(), не мутирует и получает колл бек

// ['Ann', 'Tom', 'Bob', 'Kate']; ['Tom', 'Bob'] => ['Good job, Ann', 'Good job, Kate']
// Long version
// const sendMessages = (allStundents, failedStudents) => {
//   //   const passedStudents = allStundents.filter(name => failedStudents.indexOf(name) === -1);
//   const passedStudents = allStundents.filter(name => !failedStudents.includes(name));

//   const messages = passedStudents.map(name => 'Good job, ' + name);
//   return messages;
// };
// short version

const sendMessages = (allStundents, failedStudents) =>
  allStundents.filter(name => !failedStudents.includes(name)).map(name => 'Good job, ' + name);

const allStudents1 = ['Ann', 'Tom', 'Bob', 'Kate'];
const failedStudents1 = ['Tom', 'Bob'];

console.log(sendMessages(allStudents1, failedStudents1));
// console.log(['Tom', 'Bob'].indexOf(dd));

// 1. Find passed students
// 2. Add Good job
