// ['Ann', 'Tom', 'Bob', 'Kate']; ['Tom', 'Bob'] => ['Keep it up, Ann', 'Keep it up, Kate']

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
    const passedStudents = allStudentsList.filter(
        (name) => studentsForRetake.indexOf(name) === -1
    );

    const messages = passedStudents.map((name) => "Good job, " + name);

    return messages;
};

// const allStudents = ["Ann", "Tom", "Bob", "Kate"];
// const failedStudents = ["Tom", "Bob"];

// console.log(getMessagesForPassedStudents(allStudents, failedStudents));

const getMessagesForPassedStudents = (allStudents, failedStudents) => {
    const passedStudents = allStudents.filter(
        (name) => failedStudents.indexOf(name) === -1
    );

    const messages = passedStudents.map((name) => "Good job, " + name);

    return messages;
};

const allStudents = ["Ann", "Tom", "Bob", "Kate"];
const failedStudents = ["Tom", "Bob"];

console.log(getMessagesForPassedStudents(allStudents, failedStudents));
//1. Find passed students
//2. Add Keep it up

//Метод фильтер отфильтровывает лишние элементы

// Метод indexOf проверяет наличие элемента в массиве, не принимает call back
// ["Tom", "Bob"].indexOf("dd"); // -1
// ["Tom", "Bob"].indexOf("Tom"); //0
// ["Tom", "Bob"].indexOf("Tom"); //1

//Метод include проверяет входит ли элемент в массив или нет

//Метод map(), не мутирует и получает колл бек