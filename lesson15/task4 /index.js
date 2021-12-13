// 1. Создать массив с определенными типа данных и другими показателями
// 2. Создать функцию для записи строки в объек с типом warn;
// 3. Создать функцию для записи строки в объек с типом error;
// 4. Создать функцию для записи строки в объек с типом log;

const createLogger = () => {
  let loggerArray = [
    {
      message: 'сохраненное сообщение',
      type: 'warn',
      datetime: new Date('November 26, 2021 14:52:00'),
    },
    {
      message: 'сохраненное сообщение',
      type: 'error',
      datetime: new Date('November 26, 2021 14:52:00'),
    },
    {
      message: 'сохраненное сообщение',
      type: 'log',
      datetime: new Date('November 26, 2021 14:52:00'),
    },
  ];

  function warn(str) {
    loggerArray[0].type = str;
    return loggerArray[0].type;
  }
  function error(str) {
    loggerArray[1].type = str;
    return loggerArray[1].type;
  }
  function log(str) {
    loggerArray[2].type = str;
    return loggerArray[2].type;
  }

  // Работа с массивом
  function getRecord(str) {
    if (str === undefined) {
      return loggerArray;
    }

    const filteredType = loggerArray.filter(el => {
      if (el.type.includes(str)) {
        return true;
      }
      return false;
    });

    // const sortedByDate = filteredType.sort(el => {
    //   return compare(el.datetime);
    // });

    return filteredType;
  }

  return {
    warn,
    error,
    log,
    getRecord,
  };
};
const logger = createLogger();
console.log(logger.log('User logged in'));
console.log(logger.warn('User try to restricted page'));
console.log(logger.log('User logged out'));
console.log(logger.error('Unexpected error on the site'));

// console.log(logger.getRecord());
console.log(logger.getRecord('warn'));
console.log(logger.getRecord('log'));
console.log(logger.getRecord('error'));
