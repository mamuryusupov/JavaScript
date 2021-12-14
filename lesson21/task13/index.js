export { getSection };
const getSection = num => {
  const parentElem = document.querySelector('.box');
  const spanElem = document.querySelector(`span[data-number ='${num}']`);

  return spanElem.closest(parentElem).dataset.section;
};

getSection();
