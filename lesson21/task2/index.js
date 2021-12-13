export const getTitleElement = function () {
  const findElem = document.querySelector('.title');
  console.dir(findElem);
  return findElem;
};

export const getInputElement = function () {
  const inputElem = document.querySelector('input');
  console.dir(inputElem);
  return inputElem;
};

getTitleElement();
getInputElement();
