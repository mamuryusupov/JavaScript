export { getSection };
const getSection = num => {
  const spanElem = document.querySelector(`span[data-number ="${num}"]`);
  const closestParent = spanElem.closest('div[class="box"');
  return closestParent.dataset.section;
};

getSection(2);
