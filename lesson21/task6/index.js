// const setButton = function (buttonText) {
//   const newBut = document.createElement('button');
//   newBut.textContent = buttonText;
//   const butSet = (document.querySelector('body').innerHTML = 'newBut');
//   return butSet;
// };

export setButton('Hello');
const setButton = function (buttonText) {
  const butSet = (document.querySelector('body').innerHTML = '<button>buttonText</button>');
  return butSet;
};
