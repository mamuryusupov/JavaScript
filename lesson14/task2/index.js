const createMessage = () => {
  let message = 'Hi';
  let sender = 'gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }
  function setMessage(text) {
    message = text;
  }
  function setSender(senderName) {
    sender = senderName;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};
const messenger = createMessage();
messenger.sendMessage('Tom');
messenger.setMessage('go home');
messenger.setSender('Alex');
// messenger.sendMessage('Tom');

const messenger1 = createMessage();
messenger1.sendMessage('Akakij');
messenger1.setMessage('be cool');
messenger1.setSender('Alex');
// messenger1.sendMessage('Akakij');
// const messenger = createMessage();
// messenger.sendMessage('Yura');

// const messenger2 = createMessage();
// messenger2.sendMessage('Pasha');
// messenger2.setMessage('Good Job');
// messenger2.setSender('Andrey');

// const messenger3 = createMessage();
// messenger3.sendMessage('Anna');
// messenger3.setMessage('Keep it up');
// messenger3.setSender('Mamur');

// const messenger1 = createMessage();
// messenger1.sendMessage('Bob');

// const messenger2 = createMessage();
// messenger2.sendMessage('Tom');
// messenger2.setMessage('hello');
// messenger2.setSender('Mentor');

// messenger1.sendMessage('Ann');
// messenger2.sendMessage('Mamur');
// messenger2.setMessage('hello');

// const messenger3 = createMessage();
// messenger3.sendMessage('Vova');
// messenger3.setMessage('keep it up!');
// messenger3.setSender('Mentor');
