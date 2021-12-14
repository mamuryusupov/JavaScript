export { getSection };
const getSection = num => {
  const spanElem = document.querySelector(`span[data-number ='${num}']`);

  return spanElem.closest('.box').dataset.section;
};

getSection();
