// const prefix = "Hi, ";

// function sayHi(name, anotherName = "anonymus") {
//     // console.log("abother name :", anotherName);
//     // console.log(arguments);
//     const greeting = prefix + name + " and " + anotherName;
//     console.log(greeting);
// }

// sayHi("John");

/* Function argument */

function sayHi(name, anotherName = 'anonymus') {
  //   console.log(arguments);
  const prefix = 'Hi, ';
  const greeting = prefix + name + ' and ' + anotherName;
  console.log(greeting);
}

// console.log(sayHi(greeting));
