export { squaredNumbers };
const squaredNumbers = () => {
  const element = document.querySelector('.number');
  const squared = Math.pow(element.dataset.number, 2);
  element.dataset.squaredNumber = squared;
};

squaredNumbers();
