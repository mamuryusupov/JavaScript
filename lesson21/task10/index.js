export const finishForm = function () {
  const formElem = document.querySelector('form');
  const newAttribute = document.createElement('input');
  formElem.prepend(newAttribute);
  newAttribute.setAttribute('type', 'text');
  newAttribute.setAttribute('name', 'login');
  const passwordForm = document.querySelector('input');
  passwordForm.setAttribute('type', 'password');
};
