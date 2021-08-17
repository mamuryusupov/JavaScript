const prefix = "Hi, ";

function sayHi(name, anotherName = "anonymus") {
    // console.log("abother name :", anotherName);
    // console.log(arguments);
    const greeting = prefix + name + " and " + anotherName;
    console.log(greeting);
}

sayHi("John");