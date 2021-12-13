export const getItemsList = function () {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};
export const getItemsArray = function () {
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(Array.from(elementsArray));
  return elementsArray;
};

getItemsList();
getItemsArray();
