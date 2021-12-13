export const getTitle = function () {
  return document.querySelector('.title').textContent;
};
export const getDescription = function () {
  return document.querySelector('.about').innerText;
};
export const getPlans = function () {
  return document.querySelector('.plans').innerHTML;
};
export const getGoals = function () {
  return document.querySelector('.goal').outerHTML;
};
