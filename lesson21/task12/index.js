export { squaredNumbers };
const squaredNumbers = () => {
  const elements = document.querySelectorAll('.number');
  elements.forEach(elem => {
    elem.dataset.squaredNumber = elem.dataset.number ** 2;
  });
};

squaredNumbers();
