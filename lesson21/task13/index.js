export function getSection(num) {
  const elementList = document.querySelector(`span[data-number='${num}']`);
  return elementList.closest('.box').getAttribute('data-section');
}
