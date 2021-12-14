export const finishForm = function () {
  const formElem = document.querySelector('.login-form');
  const passwordForm = document.querySelector('input');

  const newAttribute = document.createElement('input');
  newAttribute.setAttribute('type', 'text');
  newAttribute.setAttribute('name', 'login');
  formElem.prepend(newAttribute);

  passwordForm.setAttribute('type', password);
};
