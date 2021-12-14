export const finishForm = function () {
  const formElem = document.querySelector('.login-form');
  const newAttribute = document.createElement('input');
  formElem.prepend(newAttribute);
  newAttribute.setAttribute('name', 'login');
  newAttribute.setAttribute('type', password);
};
