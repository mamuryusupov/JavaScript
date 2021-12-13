export const createButton = function (buttonText) {
  const newBut = document.createElement('button');
  newBut.textContent = buttonText;
  const butSet = document.querySelector('body').append(newBut);
  return butSet;
};
